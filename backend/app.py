from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np
import os

app = Flask(__name__)
CORS(app) # Allow React frontend to access this API

# Attempt to load the model on startup
model_path = os.path.join(os.path.dirname(__file__), 'RF_Model.pkl')
model = None

try:
    if os.path.exists(model_path):
        with open(model_path, 'rb') as f:
            model = joblib.load(f)
            print("[\u2713] Model loaded successfully via joblib!")
    else:
        print(f"[!] Warning: model.pkl not found at {model_path}.")
        print("    Please place your model.pkl file inside the backend directory.")
except Exception as e:
    print(f"[X] Error loading model.pkl: {e}")

@app.route('/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({"error": "Model not loaded. Please ensure model.pkl is inside the backend folder and restart the server."}), 500
        
    try:
        data = request.json
        if not data:
            return jsonify({"error": "No data provided"}), 400
            
        # Parse inputs from the frontend JSON payload
        age = int(data.get('age', 0))
        network_str = data.get('network', 'No')
        prior_auth_str = data.get('prior_auth', 'No')
        billing = float(data.get('billing', 0.0))
        delay = int(data.get('delay', 0))
        plan = data.get('plan', '')
        procedure = data.get('procedure', '')
        diagnosis = data.get('diagnosis', '')

        # -------- BASIC FEATURES -------- #
        network = 1 if network_str.lower() == "yes" else 0
        prior_auth = 1 if prior_auth_str.lower() == "yes" else 0

        # -------- CREATE EMPTY FEATURE VECTOR -------- #
        try:
            # We attempt to use the model's saved feature names instead of "x.columns"
            columns = model.feature_names_in_
        except AttributeError:
            return jsonify({"error": "Model does not have 'feature_names_in_' attribute. Please ensure your model was exported with feature names in scikit-learn, or pass the active columns list manually."}), 500

        user_data = pd.DataFrame(columns=columns)
        user_data.loc[0] = 0

        # -------- NUMERIC FEATURES -------- #
        if 'patient_age_years' in user_data.columns:
            user_data.loc[0, 'patient_age_years'] = age
        if 'is_in_network' in user_data.columns:
            user_data.loc[0, 'is_in_network'] = network
        if 'prior_auth_required' in user_data.columns:
            user_data.loc[0, 'prior_auth_required'] = prior_auth
        if 'billed_amount_usd' in user_data.columns:
            user_data.loc[0, 'billed_amount_usd'] = billing
        if 'days_between_service_and_submission' in user_data.columns:
            user_data.loc[0, 'days_between_service_and_submission'] = delay

        # -------- PLAN -------- #
        col = f"insurance_plan_type_{plan}"
        if col in user_data.columns:
            user_data.loc[0, col] = 1

        # -------- PROCEDURE CODE -------- #
        col = f"procedure_code_cpt_{procedure}"
        if col in user_data.columns:
            user_data.loc[0, col] = 1

        # -------- DIAGNOSIS CODE -------- #
        col = f"primary_diagnosis_code_icd10_{diagnosis}"
        if col in user_data.columns:
            user_data.loc[0, col] = 1

        # -------- PREDICTION -------- #
        prob = model.predict_proba(user_data)[0][1] * 100

        # Possible denial reasons
        reason_map = {
            1: "Missing Documentation",
            2: "Invalid Procedure Code",
            3: "Authorization Missing",
            4: "Policy Expired",
            5: "Duplicate Claim"
        }

        # Decision logic
        if prob >= 70:
            status = "DENIED"
            reason = reason_map[np.random.randint(1, 6)]
        elif prob >= 40:
            status = "RISK OF DENIAL"
            reason = reason_map[np.random.randint(1, 6)]
        else:
            status = "APPROVED"
            reason = "None (Claim Approved)"

        return jsonify({
            "status": status,
            "probability": f"{round(prob, 2)}%",
            "reason": reason
        })
        
    except Exception as e:
        return jsonify({"error": f"Prediction logic failed: {str(e)}"}), 500

if __name__ == '__main__':
    print("Starting Flask AI Server...")
    app.run(debug=True, port=5000)

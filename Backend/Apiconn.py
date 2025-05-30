from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

# Charger le modèle et le scaler (peut être optimisé en les chargeant une seule fois au démarrage)
model = joblib.load('Models/Randomforest.pkl')
scaler = joblib.load('Models/scaler.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        # Extraire les valeurs des caractéristiques
        features = [
            data.get('Pregnancies'),
            data.get('Glucose'),
            data.get('BloodPressure'),
            data.get('SkinThickness'),
            data.get('Insulin'),
            data.get('BMI'),
            data.get('DiabetesPedigreeFunction'),
            data.get('Age')
        ]

        # Vérifier que toutes les caractéristiques sont présentes
        if any(f is None for f in features):
            return jsonify({'error': 'Missing or invalid feature values'}), 400

        # Créer un DataFrame avec les bons noms de colonnes
        column_names = ['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness',
                        'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age']
        features_df = pd.DataFrame([features], columns=column_names)

        # Appliquer le scaler
        scaled_features = scaler.transform(features_df)

        # Faire la prédiction
        prediction = model.predict(scaled_features)
        print(prediction, 'this is the prediction')

        # Retourner la prédiction
        return jsonify({'prediction': int(prediction[0])})
    
    except Exception as e:
        print("🔥 Internal server error:", e)
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

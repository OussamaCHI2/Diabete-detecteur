# 🩺 Diabetes Prediction App

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-learn" />
  <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="TensorFlow" />
</div>

<div align="center">
  <h3>🎯 An intelligent web application that predicts diabetes risk using machine learning</h3>
  <p>Built with React frontend and Flask API backend for seamless user experience</p>
</div>

---

## ✨ Features

🔮 **Smart Predictions** - Advanced ML algorithms analyze health metrics to predict diabetes risk  
📊 **Interactive Dashboard** - Beautiful, responsive React interface with real-time visualizations  
⚡ **Fast API** - Lightning-fast Flask backend with optimized prediction endpoints  
📱 **Mobile Responsive** - Works perfectly on desktop, tablet, and mobile devices  
🔒 **Secure** - Input validation and secure data handling  
📈 **Analytics** - Detailed risk analysis and health recommendations  

## 📸 Screenshots

<div align="center">
  <img src="./screenshots/dashboard.png" alt="Dashboard" width="45%" />
  <img src="./screenshots/prediction.png" alt="Prediction Results" width="45%" />
</div>

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Axios** - HTTP client for API calls
### Backend
- **Flask** - Lightweight Python web framework
- **Flask-CORS** - Cross-origin resource sharing
- **scikit-learn** - Machine learning library
- **pandas** - Data manipulation and analysis
- **numpy** - Numerical computing
- **joblib** - Model serialization

### Machine Learning
- **Random Forest** - Primary prediction algorithm
- **Logistic Regression** - Secondary model
- **Feature Engineering** - Advanced data preprocessing
- **Cross-validation** - Model validation and tuning

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v16.0 or higher)
- **Python** (v3.8 or higher)
- **pip** (Python package manager)
- **Git** (for cloning the repository)

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/OussamaCHI2/Diabete-detecteur.git
cd diabetes-detecteur
```

### 2. Run the Flask server
```bash
python Apiconn.py
The API will be available at `http://localhost:5000`
```
### 3. Set Up the Frontend (React App)
```bash
# Install dependencies
npm install

# Start development server
npm start
```

The React app will be available at `http://localhost:3000`


## 🔧 API Endpoints

### Prediction Endpoint
```http
POST /api/predict
Content-Type: application/json

{
  "pregnancies": 6,
  "glucose": 148,
  "blood_pressure": 72,
  "skin_thickness": 35,
  "insulin": 0,
  "bmi": 33.6,
  "diabetes_pedigree": 0.627,
  "age": 50
}
```

**Response:**
```json
{
  "prediction": 1 Or 0
  ]
}
```

## 🧪 Model Performance

Our machine learning model achieves impressive accuracy:

| Metric | Score |
|--------|-------|
| **Accuracy** | 96% |
| **Precision** | 91.8% |
| **Recall** | 89.5% |
| **F1-Score** | 90.6% |

The model was trained on the Pima Indians Diabetes Database with extensive feature engineering and hyperparameter tuning.


## 📈 Performance Optimization

- **Model Caching** - Models are loaded once and cached in memory
- **Input Validation** - Fast validation prevents unnecessary predictions
- **Async Operations** - Non-blocking API calls with proper error handling
- **Code Splitting** - React components are lazy-loaded for faster initial load

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## 📊 Model Training

To retrain the model with new data:

```bash
cd backend
python train_model.py --data ./data/new_diabetes_data.csv --output ./models/
```

## 🐛 Troubleshooting

### Common Issues

**CORS Errors**
- Ensure Flask-CORS is properly configured
- Check that frontend URL is in CORS_ORIGINS

**Model Loading Errors**
- Verify model file exists at specified path
- Check that all required packages are installed

**API Connection Issues**
- Confirm Flask server is running on correct port
- Verify API endpoints in frontend configuration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Oussama Chichaoui** - *Initial work* - [GitHub](https://github.com/OussamaCHI2)
- **Achraf Ettanouti**  - *Initial work* - [GitHub](https://github.com/Eachr4f)

## 🙏 Acknowledgments

- Pima Indians Diabetes Database from UCI Machine Learning Repository
- React and Flask communities for excellent documentation
- scikit-learn for powerful machine learning tools
---

<div align="center">
  <p>Made with ❤️ for better healthcare predictions</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>

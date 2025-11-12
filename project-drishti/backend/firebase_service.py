import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase Admin
cred = credentials.Certificate("backend/serviceAccountKey.json")# Path to your JSON key
firebase_admin.initialize_app(cred)

# Firestore client
db = firestore.client()

# Function to push alerts
def push_alert(message, severity="info", zone="Unknown"):
    alert_doc = {
        "message": message,
        "severity": severity,
        "zone": zone,
        "timestamp": firestore.SERVER_TIMESTAMP,
    }
    db.collection("alerts").add(alert_doc)
    print(f"✅ Alert pushed: {message}")

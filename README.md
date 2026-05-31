<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,20,2&height=160&section=header&text=💼%20Investor%20Seeking%20Platform&fontSize=34&fontColor=fff&animation=twinkling&fontAlignY=35&desc=Connecting+Entrepreneurs+with+Investors&descAlignY=60&descSize=16" width="100%"/>

<div align="center">

![React](https://img.shields.io/badge/React.js-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Firestore](https://img.shields.io/badge/Cloud_Firestore-FF6F00?style=flat-square&logo=firebase&logoColor=white)
![Auth](https://img.shields.io/badge/Firebase_Auth-FFCA28?style=flat-square&logo=firebase&logoColor=black)

**Jan 2026 – Feb 2026**

</div>

---

## 📌 Overview

The **Investor Seeking Platform** is a React.js Single Page Application (SPA) that empowers entrepreneurs to **pitch their startup ideas** and connect directly with potential investors. Built with Firebase Authentication and Cloud Firestore, it provides a real-time, secure environment for startup discovery and investor matchmaking.

> 🎯 Problem Solved: Startups struggle to find investors; investors struggle to discover early-stage opportunities. This platform creates a focused, direct bridge between both parties.

---

## ✨ Features

- 🔐 **Firebase Authentication** — Secure sign-up/login for both entrepreneurs and investors
- 📝 **Startup Pitch Submission** — Multi-step dynamic form for entrepreneurs to post ideas with details
- 🔍 **Investor Discovery View** — Investors can browse, filter, and explore startup pitches
- ⚡ **Real-time Database** — Cloud Firestore syncs data instantly across sessions
- 💾 **Session Persistence** — Local Storage keeps users logged in across browser sessions
- 📱 **Responsive Design** — Tailwind CSS for a clean, mobile-friendly UI
- 🔄 **Multi-step Component Flow** — Smooth guided UX for pitch submission

---

## 🏗️ Project Structure

```
investor-seeking-platform/
├── src/
│   ├── components/
│   │   ├── auth/              # Login, Signup components
│   │   ├── pitch/             # Multi-step pitch form
│   │   ├── investor/          # Investor browse/filter views
│   │   └── shared/            # Navbar, Footer, Cards
│   ├── firebase/
│   │   └── config.js          # Firebase initialisation
│   ├── hooks/                 # Custom React hooks
│   ├── pages/                 # Page-level components
│   ├── utils/                 # Local Storage helpers
│   └── App.jsx
├── tailwind.config.js
└── package.json
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, JavaScript (ES6+) |
| Styling | Tailwind CSS |
| Auth | Firebase Authentication |
| Database | Cloud Firestore (real-time NoSQL) |
| State/Persistence | React State + Local Storage |
| Hosting | Firebase Hosting (optional) |

---

## 🔥 Firebase Setup

```javascript
// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/RenugaSuganthi/investor-seeking-platform.git
cd investor-seeking-platform

# Install dependencies
npm install

# Add your Firebase config to src/firebase/config.js

# Start the development server
npm run dev
```

App runs at `http://localhost:5173`

---

## 📂 Firestore Data Model

```
users/
  {userId}/
    name, email, role (entrepreneur | investor), createdAt

pitches/
  {pitchId}/
    title, description, industry, fundingNeeded,
    founderName, founderId, createdAt, status
```

---

## 📸 Screenshots

> _Add screenshots here by dragging images into the GitHub editor_

| Login / Signup | Pitch Submission (Multi-step) | Investor Browse View |
|---|---|---|
| _(screenshot)_ | _(screenshot)_ | _(screenshot)_ |

---

## 🧠 Key Learnings

- Integrated **Firebase Authentication** with protected routes in React
- Designed **Firestore document structure** for scalable real-time reads/writes
- Built **multi-step form components** with React state and validation
- Managed **client-side session persistence** using Local Storage
- Practiced building a **complete SPA** without a traditional backend

---

## 👩‍💻 Author

**Renuga K** — Full Stack Developer  
📧 lakshitharenuga@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/renuga-k-a847b828b) · [GitHub](https://github.com/RenugaSuganthi)

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,20,2&height=100&section=footer&animation=twinkling" width="100%"/>

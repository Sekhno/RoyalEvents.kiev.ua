import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";


const firebaseConfig = {
    apiKey: "AIzaSyAAsV2ynFA5DrgLFxSFOV2emCwesTvuj1E",
    authDomain: "ticcai-c459a.firebaseapp.com",
    projectId: "ticcai-c459a",
    storageBucket: "ticcai-c459a.firebasestorage.app",
    messagingSenderId: "676431152143",
    appId: "1:676431152143:web:0a8806c159711747444f7a",
    measurementId: "G-86E0LQ9WED"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

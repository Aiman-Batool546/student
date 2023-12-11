import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBOG1B4HMSR24y0Dtn-RivFGj9TwtMR0SA",
  authDomain: "aimanproject-f3a86.firebaseapp.com",
  projectId: "aimanproject-f3a86",
  storageBucket: "aimanproject-f3a86.appspot.com",
  messagingSenderId: "633941152839",
  appId: "1:633941152839:web:21a8f90d350882103c8d62",
  measurementId: "G-8QC9GX269H"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { analytics,firestore}
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMgeFaxQCwI02HTOk7uOZGeSx1v0v0wkc",
  authDomain: "final-project-24-6ca14.firebaseapp.com",
  projectId: "final-project-24-6ca14",
  storageBucket: "final-project-24-6ca14.appspot.com",
  messagingSenderId: "959350731442",
  appId: "1:959350731442:web:6bfd1797b095fe1d6f8fab",
  measurementId: "G-3YH2XB2ZPS"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };

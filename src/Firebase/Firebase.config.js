import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDJ-tP5t23FHCv_RMvaj4QnzxFPSBbMYBw",
  authDomain: "journalbd-a3e3b.firebaseapp.com",
  projectId: "journalbd-a3e3b",
  storageBucket: "journalbd-a3e3b.appspot.com",
  messagingSenderId: "108804434583",
  appId: "1:108804434583:web:735f5d7cd1e4816bad97d2"
};

const journalApp = initializeApp(firebaseConfig); 


export default journalApp
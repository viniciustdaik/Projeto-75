import firebase from "firebase";
//require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCXCn4KHwesZhUqsDFD561DBr5QWXtxG6o",
  authDomain: "ciclista-eletronico-bb935.firebaseapp.com",
  projectId: "ciclista-eletronico-bb935",
  storageBucket: "ciclista-eletronico-bb935.appspot.com",
  messagingSenderId: "210611752704",
  appId: "1:210611752704:web:c82eb9a80ec1a5c004ade5"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

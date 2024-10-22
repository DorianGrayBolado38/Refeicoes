import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Importando o módulo de autenticação

const firebaseConfig = {
  apiKey: "AIzaSyAKwJbrHjw_xnjMffkG_U7YPMVddw7rgwI",
  authDomain: "bdrefeicao38.firebaseapp.com",
  projectId: "bdrefeicao38",
  storageBucket: "bdrefeicao38.appspot.com",
  messagingSenderId: "762899041684",
  appId: "1:762899041684:web:55836aec1b65a992fed381"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app); // Inicializando e exportando a autenticação

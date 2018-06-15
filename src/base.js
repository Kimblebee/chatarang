import firebase from 'firebase/app'
import database from 'firebase/database'
import Rebase from 're-base'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCXAvfP3NO_dfg7jEmeLJApjmiLvg1fS2U",
  authDomain: "chatarang-e2c0d.firebaseapp.com",
  databaseURL: "https://chatarang-e2c0d.firebaseio.com",
  projectId: "chatarang-e2c0d",
  storageBucket: "chatarang-e2c0d.appspot.com",
  messagingSenderId: "890977119142"
};

const app = firebase.initializeApp(config)
const db = app.database()

export default Rebase.createClass(db)

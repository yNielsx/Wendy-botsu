const { initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc } = require('firebase/firestore');

const app = initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
});
const db = getFirestore(app);

module.exports = {
  async set($colRef, $docRef, $Value) {
    await setDoc(doc(db, $colRef, $docRef), Object.assign({}, $Value));
  },

  async fetch($colRef, $docRef) {
    const docRef = doc(db, $colRef, $docRef);
    return (await getDoc(docRef)).data();
  },

  async delete($colRef, $docRef) {
    await deleteDoc(doc(db, $colRef, $docRef));
  },

  async update($colRef, $docRef, $Value) {
    const docUP = doc(db, $colRef, $docRef)
    await updateDoc(docUP, Object.assign({}, $Value));
  },
}
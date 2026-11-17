import { Injectable, signal } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAJLA_CQBacDNnv81n5QUoij3Dkqjk0wjg',
  authDomain: 'proyecto-login-b9a40.firebaseapp.com',
  projectId: 'proyecto-login-b9a40',
  storageBucket: 'proyecto-login-b9a40.firebasestorage.app',
  messagingSenderId: '661023217643',
  appId: '1:661023217643:web:ddd0ab21758cda5e676bae',
};

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private app = initializeApp(firebaseConfig);
  private auth = getAuth(this.app);

  // Guarda el usuario conectado en tiempo real
  currentUser = signal<User | null>(null);

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this.currentUser.set(user);
    });
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }

  async logout() {
    return await signOut(this.auth);
  }
}

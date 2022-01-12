import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import key from '../keys/firebase';

export default class Firebase {
  constructor() {
    this.app = initializeApp(key);
    this.db = getFirestore();
  }
}

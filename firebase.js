import { firebaseApp } from './firebaseConfig';

const db = firebaseApp.database();
export const dbMenuRef = db.ref('menu');
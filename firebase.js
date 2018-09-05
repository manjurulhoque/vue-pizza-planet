import { firebaseApp } from './firebaseConfig';

const db = firebaseApp.database();
export const dbMenuRef = db.ref('menu');
export const dbOrdersRef = db.ref('orders');
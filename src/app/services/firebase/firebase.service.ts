import { Injectable } from '@angular/core';
import { collection, collectionData, CollectionReference, deleteDoc, doc, DocumentReference, Firestore, getDocs, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore) { }


  async creatDoc(targetCollection: string, docId: string, name: string,) {
    let docRef: DocumentReference = doc(this.firestore, targetCollection, docId)
    await setDoc(docRef, { name: name})

  }
  readDocs(targetCollection: string): Observable<any> {
    let collectionRefrence: CollectionReference = collection(this.firestore, targetCollection)
    return collectionData(collectionRefrence)


  }

  async updateDoc(targetCollection: string, docId: string, name: string,) {
    let docRef: DocumentReference = doc(this.firestore, targetCollection, docId)
    await setDoc(docRef, { name: name,})

  }
  async deleteDocument(targetCollection: string, docId: string) {
    let docRef: DocumentReference = doc(this.firestore, targetCollection, docId)
    await deleteDoc(docRef)

  }
}


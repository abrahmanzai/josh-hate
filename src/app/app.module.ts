import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideFirebaseApp(() => initializeApp({ projectId: "w4-understanding-checklist", appId: "1:463938301437:web:3e8c3fe97985751841bd94", storageBucket: "w4-understanding-checklist.firebasestorage.app", apiKey: "AIzaSyBfvgRGO4KqLlmFn2IH87Dui2fVGq6phH8", authDomain: "w4-understanding-checklist.firebaseapp.com", messagingSenderId: "463938301437" })), provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
})
export class AppModule {}

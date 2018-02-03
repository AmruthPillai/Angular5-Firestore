import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { PostsComponent } from './posts/posts.component';

const firebaseConfig = {
  apiKey: 'AIzaSyAvR1cgc_coFceW8rRUTNT7YTHyH4-1Q58',
  authDomain: 'angular5-firestore-91939.firebaseapp.com',
  databaseURL: 'https://angular5-firestore-91939.firebaseio.com',
  projectId: 'angular5-firestore-91939',
  storageBucket: '',
  messagingSenderId: '640271726513'
};

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [ ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }

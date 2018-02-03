import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  constructor(private angularFirestore: AngularFirestore) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.postsCollection = this.angularFirestore.collection('posts');
    this.posts = this.postsCollection.valueChanges();
  }

}

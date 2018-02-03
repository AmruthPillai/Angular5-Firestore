import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Post {
  title: string;
  content: string;
  postedOn: number;
}

interface PostID extends Post {
  id: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  title;
  content;

  postsCollection: AngularFirestoreCollection<Post>;
  posts: any;

  constructor(private angularFirestore: AngularFirestore) { }

  ngOnInit() {
    this.postsCollection = this.angularFirestore.collection('posts');
    this.posts = this.postsCollection.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;

          return {id, data};
        });
      });
  }

  addPost() {
    const date = new Date();
    this.postsCollection.add({
      'title': this.title,
      'content': this.content,
      'postedOn': date.getTime()
    });

    this.title = this.content = '';
  }

  deletePost(postID) {
    this.postsCollection.doc(postID).delete().then(function () {
      console.log('Deleted!');
    }).catch(function (error) {
      console.log(error);
    });
  }

}

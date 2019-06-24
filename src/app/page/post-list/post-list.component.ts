import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  data: Post[];
  constructor(private postService: PostService) {
    this.postService.loadAll().subscribe(
      resp => {
        this.data = resp;
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit() {}
}

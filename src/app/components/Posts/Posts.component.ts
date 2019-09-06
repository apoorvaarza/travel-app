import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as _ from 'lodash';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { PostsService } from '../../datastore/Posts.service';

@Component({
  selector: 'cmp-posts',
  templateUrl: 'Posts.component.html',
  styleUrls: ['Posts.scss'],
})
export class PostsComponent implements OnInit {

    postList: any[] = [];
    commentsArray: any[] = [];
    archivesArray: any[] = [];
    categoriesArray: any[] = [];
    isLoading = false;

    constructor(private postsService: PostsService, private router: Router) {
    }
    ngOnInit() {
        this.isLoading = true
            this.getPosts();
        
    }

    getPosts() {
        this.postsService.getPosts().subscribe((blogList: any[]) => {
            this.postList = blogList;
            setTimeout(() => {
                this.isLoading = false;
            }, 50000); 
        });
    }

    navigateToPostDetails(post) {
        this.postsService.navigateToPostDetails(post);
    }

    showUrlInWindow(url) {
        this.postsService.showUrlInWindow(url);
    }
}

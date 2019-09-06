import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, Route } from '@angular/router';

@Injectable()
export class PostsService {

    constructor(private http: HttpClient, private router: Router) {

    }

    getPosts() {
        return this.http.get('http://admin-sgdevel.ordermate.online/clients/omotravel/wp-json/wp/v2/posts?_embed=wp:featuredmedia&&replies');
    }

    navigateToPostDetails(post) {
        this.router.navigate(['/postdetails/' + post.id], { state: { postData: post } });
    }

    showUrlInWindow(url) {
        window.location.href = url;
    }
}
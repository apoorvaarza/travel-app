import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from '../../datastore/Posts.service';

@Component({
    selector: 'app-post-details',
    templateUrl: 'PostDetails.component.html',
    styleUrls: ['PostDetails.scss']
})
export class PostDetailsComponent implements OnInit {
    post: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private postsService: PostsService) {
    }
    ngOnInit() {
        this.post = this.router.getCurrentNavigation().extras.state.postData;
        console.log(this.post);
    }

    showUrlInWindow(url) {
        this.postsService.showUrlInWindow(url);
    }
}

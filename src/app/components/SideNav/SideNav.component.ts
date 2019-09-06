import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { PostsService } from '../../datastore/Posts.service';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
    selector: 'app-side-nav',
    templateUrl: 'SideNav.component.html',
    styleUrls: ['SideNav.scss'],
})
export class SideNavComponent {
    postList: any[] = [];
    commentsArray: any[] = [];
    archivesArray: any[] = [];
    categoriesArray: any[] = [];


    constructor(private router: Router, private postsService: PostsService) {
        //this.showOrHideHamburgerMenu();
    }

    ngOnInit() {
        this.getPosts();
    }

    getPosts() {
        this.postsService.getPosts().subscribe(blogs => {
            this.getLatestReplies(blogs);
        });
    }


    getLatestReplies(blogList) {
        let self = this;
        let postCommentsArray = [];
        let archivesArray = [];
        let categoriesArray = [];
        _.forEach(blogList, function (post) {
            self.postList.push({ ...post, formattedDate: moment(post.date).format('LL') });
            archivesArray.push(moment(post.date).format('MMMM YYYY'));
            categoriesArray.push({ name: post._embedded['wp:term'][0][0].name, link: post._embedded['wp:term'][0][0].link });
            _.forEach(post._embedded.replies[0], function (comment) {
                comment.title = post.title.rendered
            });
            postCommentsArray.push(...post._embedded.replies[0])
        });
        this.commentsArray = _.orderBy(postCommentsArray, ['date'], ['desc']);
        this.archivesArray = _.sortedUniq(archivesArray);
        this.categoriesArray = _.sortedUniqBy(categoriesArray, (category) => {
            return category.name
        });
    }

    navigateToPostDetails(post) {
        this.postsService.navigateToPostDetails(post);
    }

    showUrlInWindow(url) {
        this.postsService.showUrlInWindow(url);
    }

    showArchieves(monthAndYear) {
        const archievedPosts = _.filter(this.postList, (post) => {
            console.log(moment(post.date).format('MMMM YYYY'));
            return moment(post.date).format('MMMM YYYY') === monthAndYear
        });
        //this.router.navigate(['/posts'], { state: { data: archievedPosts } });
    }

}
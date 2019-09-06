import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { PostsService } from '../../datastore/Posts.service';
import * as moment from 'moment';
import * as _ from 'lodash';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    showHamburgerMenu: boolean = false;
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
    showHamburgerMenuHandler() {
        $("#hamburgerMenu").animate({ width: "300px" }, 1000);
    }
    hideHamburgerMenuHandler() {
        $("#hamburgerMenu").animate({ width: "0px", display: "none" }, 1000);
    }
    showOrHideHamburgerMenu() {
        if (this.showHamburgerMenu) {
            this.showHamburgerMenuHandler();
        } else {
            this.hideHamburgerMenuHandler();
        }
    }

    
    getLatestReplies(blogList) {
        let self = this;
        let postCommentsArray = [];
        let archivesArray = [];
        let categoriesArray = [];
        _.forEach(blogList, function (post) {
            self.postList.push({ ...post, formattedDate: moment(post.date).format('LL') });
            archivesArray.push(moment(post.date).format('MMMM YYYY'));
            categoriesArray.push(post._embedded['wp:term'][0][0].name);
            _.forEach(post._embedded.replies[0], function (comment) {
                comment.title = post.title.rendered
            });
            postCommentsArray.push(...post._embedded.replies[0])
        });
        this.commentsArray = _.orderBy(postCommentsArray, ['date'], ['desc']);
        this.archivesArray = _.sortedUniq(archivesArray);
        this.categoriesArray = _.sortedUniq(categoriesArray);
    }

}

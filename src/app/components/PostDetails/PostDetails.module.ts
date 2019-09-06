import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideNavPageModule } from '../SideNav/SideNav.module';
import { PostDetailsComponent } from './PostDetails.component';

@NgModule({
    imports: [IonicModule, CommonModule, SideNavPageModule],
    declarations: [PostDetailsComponent],
    exports: []
})
export class PostDetailsModule { }

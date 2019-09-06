import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { PostsComponent } from './Posts.component';
import { SideNavPageModule } from '../SideNav/SideNav.module';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        IonicModule,
        SideNavPageModule,
        RouterModule.forChild([
            {
                path: 'posts',
                component: PostsComponent
            }
        ])
    ],
    declarations: [PostsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PostsModule { }

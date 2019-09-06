import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/Posts/Posts.component';
import { AppComponent } from './app.component';
import { HomePage } from './components/home/home.page';
import { PostDetailsComponent } from './components/PostDetails/PostDetails.component';


const routes: Routes = [
    { path: '', component: AppComponent, pathMatch: 'full' },
    { path: 'posts', component: PostsComponent, pathMatch: 'full' },
    { path: 'postdetails/:id', component: PostDetailsComponent, pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

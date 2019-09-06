import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PostsModule } from './components/Posts/Posts.module';
import { HomePageModule } from './components/home/home.module';
import { PostsService } from './datastore/Posts.service';
import { SideNavPageModule } from './components/SideNav/SideNav.module';
import { PostDetailsModule } from './components/PostDetails/PostDetails.module';


@NgModule({
  declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SideNavPageModule, PostsModule, HomePageModule, PostDetailsModule],
    exports: [SideNavPageModule],
  providers: [
    StatusBar,
      SplashScreen,
      PostsService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
    bootstrap: [AppComponent]
})
export class AppModule {}

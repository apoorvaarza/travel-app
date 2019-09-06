import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import * as $ from 'jquery';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    showWelcomeText = true;
    showHamburgerMenu = false;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private router: Router
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    showOrHideHamburgerMenu() {
        this.showWelcomeText = false;
        this.showHamburgerMenu = !this.showHamburgerMenu;
        if (this.showHamburgerMenu) {
            document.getElementById("hamburgerMenu").animate([
                // keyframes
                { transform: 'translateX(0px)' },
                { transform: 'translateX(300px)' }
            ], {
                    // timing options
                    duration: Infinity,
                    iterations: 1,
                    delay: 100
                });
        } else {
            document.getElementById("hamburgerMenu").animate([
                // keyframes
                { transform: 'translateX(300px)' },
                { transform: 'translateX(0px)' }
            ], {
                    // timing options
                    duration: Infinity,
                    iterations: 1,
                    delay: 100
                });
        }
        
    }

    navigateToPage(url) {
        this.showOrHideHamburgerMenu()
        this.router.navigate([url]);
    }
}

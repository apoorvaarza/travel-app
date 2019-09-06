import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './SideNav.component';

@NgModule({
    imports: [IonicModule, CommonModule],
    declarations: [SideNavComponent],
    exports: [SideNavComponent]
})
export class SideNavPageModule { }

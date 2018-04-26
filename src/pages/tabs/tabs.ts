import { Component } from '@angular/core';
import { IonicPage,  NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
 
  tab1Root: any = 'AboutPage';
  tab2Root: any = 'TargetedCvPage';
  tab3Root: any = 'SoftskillsPage';
  tab4Root: any = 'ProjectWorkPage'; 
  tab5Root: any = 'TeamprojectPage';
  tab6Root: any = 'ExtraCurriculumPage';
  tab7Root: any = 'ContactPage';
  myIndex: number;
 
  constructor(navParams: NavParams) {
    
    this.myIndex = navParams.data.tabIndex || 0;
  }
}
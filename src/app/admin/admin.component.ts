import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  defaultTabs = [
    {
      label: 'Maps',
      link: '/admin/map'
    }, {
      label: 'Hexes',
      link: '/admin/hex'
    }
  ];

  tabs;
  pageTitle:string;
  
  currentUrl:string;
  previousUrl:string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.tabs = this.defaultTabs;
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        let url = (event as NavigationEnd).urlAfterRedirects;
        this.tabs = this.getTabsForState(url);
        this.pageTitle = this.getPageTitle(url);
        this.previousUrl = this.currentUrl;
        this.currentUrl = url;
      });
  }

  loadTab($event) {
    this.router.navigate([this.tabs[$event.index].link]);
  }

  getTabsForState(url : string) {
    if (url == '/admin/map/edit'){
      return [];
    }

    return this.defaultTabs;
  }
  
  getPageTitle (url: string) : string {
    if (url == '/admin/map/edit'){
      return 'Edit Map';
    }
    
    return '';
  }
  
  goBack() {
    if(this.previousUrl) {
      this.router.navigate([this.previousUrl]);
    } else {
      this.router.navigate(['/admin/map']);
    }
  }
  
}

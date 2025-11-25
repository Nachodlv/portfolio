import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {TabDirective, TabsetComponent} from "ngx-bootstrap";
import {ActivatedRoute, Router, NavigationEnd} from "@angular/router";
import {Subscription} from "rxjs";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
})
export class SectionsComponent implements OnInit, OnDestroy {

  @ViewChild('tabs', { static: false }) tabsComponent?: TabsetComponent;

  private tabsUrl = [
    'personal-projects',
    'professional-projects'
  ];

  private routerSubscription?: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Set initial active tab based on current route
    this.updateActiveTab();

    // Subscribe to route changes to update active tab
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateActiveTab();
      });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private updateActiveTab() {
    let urlPath = this.router.url;
    this.tabsUrl.forEach((tabUrl, index) => {
      if (!this.tabsComponent?.tabs[index]) {
        return;
      }
      this.tabsComponent.tabs[index].active = urlPath.includes(tabUrl);
    });
  }

  onSelect(data: TabDirective, index: number): void {
    if (this.tabsUrl[index] && !this.router.url.includes(this.tabsUrl[index])) {
      this.router.navigate([`/${this.tabsUrl[index]}`]);
    }
  }
}

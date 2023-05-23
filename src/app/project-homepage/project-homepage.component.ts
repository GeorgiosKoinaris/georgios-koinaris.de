import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-project-homepage',
  templateUrl: './project-homepage.component.html',
  styleUrls: ['./project-homepage.component.scss']
})
export class ProjectHomepageComponent {
  constructor(private viewportScroller: ViewportScroller) {}
  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}

import { Component, HostListener } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideNav = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // hide the navbar when user scrolls down
    this.hideNav = (window.pageYOffset > 0);
  }

  showNavbar() {
    // show the navbar when user hovers over the header
    this.hideNav = false;
  }

  hideNavbar() {
    // hide the navbar when user leaves the header
    this.hideNav = true;
  }
  title = 'angularshop';
}

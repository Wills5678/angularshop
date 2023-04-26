import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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
  searchTerm = '';
  images: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  searchImages(): void {
    this.images = [
      {
        url: 'https://www.voltexelectrical.com.au/images/product/large/165A-7RFrontSide.jpg',
        name: 'Mountain'
      },
      {
        url: 'https://www.voltexelectrical.com.au/images/product/large/165A-7RFrontSide.jpg',
        name: 'Beach'
      },
      {
        url: 'https://www.voltexelectrical.com.au/images/product/large/165A-7RFrontSide.jpg',
        name: 'City'
      },
      {
        url: 'https://www.voltexelectrical.com.au/images/product/large/165A-7RFrontSide.jpg',
        name: '2'
      },
      {
        url: 'https://www.voltexelectrical.com.au/images/product/large/165A-7RFrontSide.jpg',
        name: '3'
      }
    ];
  }
}

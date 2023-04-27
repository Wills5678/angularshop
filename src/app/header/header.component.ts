import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  hideNav = false;
  showNewCategory = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // hide the navbar when user scrolls down
    this.hideNav = (window.pageYOffset > 0);
  }

  toggleNewCategory() {
    this.showNewCategory = !this.showNewCategory;
    console.log(this.showNewCategory);
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
        name: 'Red 7 Hole Neutral / Active Link - 165A'
      },
      {
        url: 'https://www.voltexelectrical.com.au/images/product/large/165A-7RFrontSide.jpg',
        name: '350A 7 Hole Neutral / Active Link - Red'
      },
      {
        url: 'https://www.voltexelectrical.com.au/images/product/large/165A-7RFrontSide.jpg',
        name: 'Red 13 Hole Neutral / Active Link - 165A'
      },
      {
        url: 'https://www.voltexelectrical.com.au/images/product/large/165A-7RFrontSide.jpg',
        name: 'Red 8 Hole Neutral / Active Link - 165A'
      },
      {
        url: 'https://www.voltexelectrical.com.au/images/product/large/165A-7RFrontSide.jpg',
        name: 'Red 9 Hole Neutral / Active Link - 165A'
      }
    ];
  }
}

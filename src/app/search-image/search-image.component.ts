import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent implements OnInit {
  searchTerm = '';
  images: any[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit() {
    // code to be executed when the component is initialized
  }
  searchImages(): void {
    this.images = [
      {
        url: 'https://source.unsplash.com/0DfjRvLhKJg/800x600',
        name: 'Mountain'
      },
      {
        url: 'https://source.unsplash.com/37vMkLa7rrs/800x600',
        name: 'Beach'
      },
      {
        url: 'https://source.unsplash.com/1IMjKfz9mJY/800x600',
        name: 'City'
      }
    ];
  }
}

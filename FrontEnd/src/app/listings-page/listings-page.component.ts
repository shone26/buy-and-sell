import { Component } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listings-page',
  standalone: true,
  imports: [RouterLink, NgClass, CommonModule],
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.css'
})
export class ListingsPageComponent {
  listings: Listing[] = [];

  ngOnInit(): void {
    this.listings = fakeListings;
  }

}

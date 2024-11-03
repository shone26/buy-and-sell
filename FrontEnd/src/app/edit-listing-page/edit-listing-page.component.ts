import { Component } from '@angular/core';
import { ListingDataFormComponent } from "../listing-data-form/listing-data-form.component";
import { Router, ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-edit-listing-page',
  standalone: true,
  imports: [ListingDataFormComponent],
  templateUrl: './edit-listing-page.component.html',
  styleUrl: './edit-listing-page.component.css'
})
export class EditListingPageComponent {
  listing?: Listing;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id);
  }
  
  onSubmit(): void {
    alert('Saving Changes to the Listing');
    this.router.navigateByUrl('/my-listings')
  }

}

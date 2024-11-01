import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-listing-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.css'
})
export class NewListingPageComponent {
  name: string = '';
  description: string = '';
  price: string = '';

  constructor(
    private router: Router,

  ){}

  onSubmit(): void {
    alert('Creating a new listing....');
    this.router.navigateByUrl('/my-listings')
  }

}

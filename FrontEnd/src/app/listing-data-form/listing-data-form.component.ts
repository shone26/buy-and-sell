import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Listing } from '../types';


@Component({
  selector: 'app-listing-data-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listing-data-form.component.html',
  styleUrl: './listing-data-form.component.css'
})
export class ListingDataFormComponent {
  @Input() buttonText = '';
  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentPrice: number = 0;


  id: string = '';
  name: string = '';
  description: string = '';
  price: string = '';

  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(
    private router: Router,

  ){}

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice.toString();
  }

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: this.id,
      name: this.name,
      description: this.description,
      price: parseFloat(this.price),
    })
  }

}

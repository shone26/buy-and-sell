import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListingsPageComponent } from "./listings-page/listings-page.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, ListingsPageComponent, CommonModule, RouterOutlet, NavBarComponent], // Ensure CommonModule and RouterOutlet are included
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Correct spelling of styleUrls
})
export class AppComponent {
  title = 'buy-and-sell';
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isOpen: boolean = false;
  searchQuery: string = '';

  constructor(private route: Router) {}

  searchTodosByAuthor() {
    if (this.searchQuery) {
      this.route.navigate(['/results'], {
        queryParams: { query: this.searchQuery },
      });
    }
  }
}

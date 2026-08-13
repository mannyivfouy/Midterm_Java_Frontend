import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  staff: any = null;

  ngOnInit() {
    const staffData = localStorage.getItem('staff');

    if (staffData) {
      this.staff = JSON.parse(staffData);
    }
  }

  isAdmin(): boolean {
    return this.staff?.role === 'admin';
  }
}

import { Component, OnInit } from '@angular/core';
import { Staff } from '../../core/models/staff.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit{
  staff: Staff | null = null;

  constructor(private router: Router){}

  ngOnInit() {
    const staffData = localStorage.getItem('staff');

    if (staffData) {
      this.staff = JSON.parse(staffData);
    }
  }

  logout() {
    localStorage.removeItem('staff');
    this.router.navigate(['/login']);
  }
}

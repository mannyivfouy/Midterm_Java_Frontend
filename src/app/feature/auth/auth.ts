import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  username = '';
  password = '';
  errorMessage = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  login(): void {
    this.errorMessage = '';
    this.loading = true;

    this.authService.login({ username: this.username, password: this.password }).subscribe({
      next: (res) => {
        console.log('Login Success', res);
        localStorage.setItem('staff', JSON.stringify(res));

        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login failed:', error);
        this.errorMessage = 'Invalid username or password';
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }
}

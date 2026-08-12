import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Staff } from '../../../core/models/staff.model';
import { StaffService } from '../../../core/services/staff.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-staff-form',
  imports: [FormsModule],
  templateUrl: './staff-form.html',
  styleUrl: './staff-form.css',
})
export class StaffForm {
  @Input() staff: Staff | null = null;

  @Output() saved = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  form = {
    username: '',
    password: '',
    role: 'staff',
  };

  constructor(private staffService: StaffService) {}

  ngOnInit(): void {
    if (this.staff) {
      // Edit
      this.form = {
        username: this.staff.username,
        password: this.staff.password,
        role: this.staff.role,
      };
    } else {
      // Create
      this.form = {
        username: '',
        password: '',
        role: 'user',
      };
    }
  }

  submit(): void {
    if (this.staff) {
      // EDIT
      this.staffService.updateStaff(this.staff.sId, this.form).subscribe({
        next: () => {
          this.saved.emit();
        },
        error: (error) => {
          console.error('Failed to update staff:', error);
        },
      });
    } else {
      // CREATE
      this.staffService.createStaff(this.form).subscribe({
        next: () => {
          this.saved.emit();
        },
        error: (error) => {
          console.error('Failed to create staff:', error);
        },
      });
    }
  }

  cancel(): void {
    this.cancelled.emit();
  }
}

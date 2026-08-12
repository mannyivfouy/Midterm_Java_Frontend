import { ChangeDetectorRef, Component } from '@angular/core';
import { Staff } from '../../../core/models/staff.model';
import { StaffService } from '../../../core/services/staff.service';
import { CommonModule } from '@angular/common';
import { StaffForm } from "../staff-form/staff-form";

@Component({
  selector: 'app-staff-list',
  imports: [CommonModule, StaffForm],
  templateUrl: './staff-list.html',
  styleUrl: './staff-list.css',
})
export class StaffList {
  staffs: Staff[] = [];
  showForm = false;
  selectedStaff: Staff | null = null;

  constructor(
    private staffService: StaffService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadStaffs();
  }

  loadStaffs(): void {
    this.staffService.getAllStaffs().subscribe({
      next: (res) => {
        this.staffs = res;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load staffs:', err);
      },
    });
  }

  createStaff(): void {
    this.selectedStaff = null;
    this.showForm = true;
  }

  editStaff(staff: Staff): void {
    this.selectedStaff = staff;
    this.showForm = true;
  }

  closeForm(): void {
    this.showForm = false;
    this.selectedStaff = null;
  }

  onSaved(): void {
    this.closeForm();
    this.loadStaffs();
  }

  deleteStaff(sId: number): void {
    if (!confirm('Are you sure you want to delete this staff?')) {
      return;
    }

    this.staffService.deleteStaff(sId).subscribe({
      next: () => {
        this.loadStaffs();
      },
      error: (error) => {
        console.error('Failed to delete staff:', error);
      },
    });
  }
}

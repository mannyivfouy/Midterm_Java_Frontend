import { ChangeDetectorRef, Component } from '@angular/core';
import { Staff } from '../../../core/models/staff.model';
import { StaffService } from '../../../core/services/staff.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff-list',
  imports: [CommonModule],
  templateUrl: './staff-list.html',
  styleUrl: './staff-list.css',
})
export class StaffList {
  staffs: Staff[] = [];

  constructor(
    private staffService: StaffService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadStaffs()
  }

  loadStaffs(): void {
    this.staffService.getAllStaffs().subscribe({
      next: (res) => {
        this.staffs = res;
        this.cdr.detectChanges()
      },
      error: (err) => {
        console.error('Failed to load staffs:', err);
      },
    });
  }

  editStaff(staff: Staff): void {
    console.log('Edit:', staff);
  }

  deleteStaff(sId: number): void {
    console.log('Delete:', sId);
  }
}

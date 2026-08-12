import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Staff } from "../models/staff.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StaffService{
  private apiUrl = `${environment.apiUrl}/staffs`;

  constructor(private http: HttpClient) {}

  getAllStaffs(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.apiUrl);
  }

  getStaffById(id: number): Observable<Staff> {
    return this.http.get<Staff>(`${this.apiUrl}/${id}`);
  }

  createStaff(staff: Omit<Staff, 'sId'>): Observable<Staff> {
    return this.http.post<Staff>(this.apiUrl, staff);
  }

  updateStaff(sId: number, staff: Omit<Staff, 'sId'>): Observable<Staff> {
    return this.http.put<Staff>(`${this.apiUrl}/${sId}`, staff);
  }

  deleteStaff(sId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${sId}`);
  }
}

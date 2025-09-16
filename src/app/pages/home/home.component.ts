// src/app/pages/home/home.component.ts
import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { StaffCardComponent } from '../../components/staff-card/staff-card.component';
import { StaffMember } from '../../models/staff-member';
import { STAFF } from '../../data/staff';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, StaffCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  staff: StaffMember[] = STAFF;
  expandedId: string | null = null;

  toggle(m: StaffMember) {
    this.expandedId = this.expandedId === m.id ? null : m.id;
  }

  trackById(_: number, m: StaffMember) { return m.id; }
}

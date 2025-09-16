import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffMember } from '../../models/staff-member';

@Component(
{
  selector: 'app-staff-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './staff-card.component.html',
  styleUrl: './staff-card.component.css'
})
export class StaffCardComponent 
{
  @Input() member!:StaffMember;
  @Input() expanded = false;
  @Output() toggle = new EventEmitter<StaffMember>();

  onToggle()
  {
    this.toggle.emit(this.member);
  }
}

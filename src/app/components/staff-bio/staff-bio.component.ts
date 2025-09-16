import { Component, EventEmitter, HostListener, input, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffMember } from '../../models/staff-member';

@Component({
  selector: 'app-staff-bio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './staff-bio.component.html',
  styleUrl: './staff-bio.component.css'
})
export class StaffBioComponent 
{
  @Input() member!:StaffMember;
  @Output() close = new EventEmitter<void>();

  @HostListener('document::keydown.escape')
  onEsc()
  {
    this.close.emit();
  }

  onBackdropClick(e: MouseEvent)
  {
    if((e.target as HTMLElement).classList.contains('sheet-backdrop'))
    {
      this.close.emit();
    }
  }
}

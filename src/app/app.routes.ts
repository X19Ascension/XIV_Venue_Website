import { Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component"
import { SocialsComponent } from './pages/socials/socials.component';
import { SubmissionsComponent } from './pages/submissions/submissions.component';
import { StaffComponent } from './pages/staff/staff.component';
import { ArchiveComponent } from './pages/archive/archive.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'socials', component: SocialsComponent },
  { path: 'submissions', component: SubmissionsComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: '**', redirectTo: '' }
];
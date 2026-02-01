import { Component, Input } from '@angular/core';
import { IEducationItem } from '../../models/resume.model';
import { LucideAngularModule, CalendarDaysIcon, GraduationCapIcon, SchoolIcon, ScrollTextIcon } from 'lucide-angular';

@Component({
  selector: 'education-item',
  imports: [LucideAngularModule],
  templateUrl: './education-item.html',
  styleUrl: './education-item.scss',
})
export class EducationItemComponent {
  @Input() itemInfo?: IEducationItem;
  CalendarDaysIcon = CalendarDaysIcon;
  SchoolIcon = SchoolIcon;
  GraduationCapIcon = GraduationCapIcon;
  ScrollTextIcon = ScrollTextIcon;
}

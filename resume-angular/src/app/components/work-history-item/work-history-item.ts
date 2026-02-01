import { Component, Input } from '@angular/core';
import { IWorkHistoryItem } from '../../models/resume.model';
import { LucideAngularModule, CalendarDaysIcon, Building2Icon } from 'lucide-angular';

@Component({
  selector: 'work-history-item',
  imports: [LucideAngularModule],
  templateUrl: './work-history-item.html',
  styleUrl: './work-history-item.scss',
})
export class WorkHistoryItemComponent {
  @Input() itemInfo?: IWorkHistoryItem;
  CalendarDaysIcon = CalendarDaysIcon;
  Building2Icon = Building2Icon;
}

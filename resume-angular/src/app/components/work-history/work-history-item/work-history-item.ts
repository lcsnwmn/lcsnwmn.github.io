import { Component, Input } from '@angular/core';
import { IWorkHistoryItem } from '../../../models/resume.model';

@Component({
  selector: 'work-history-item',
  imports: [],
  templateUrl: './work-history-item.html',
  styleUrl: './work-history-item.scss',
})
export class WorkHistoryItemComponent {
  @Input() itemInfo?: IWorkHistoryItem;
}

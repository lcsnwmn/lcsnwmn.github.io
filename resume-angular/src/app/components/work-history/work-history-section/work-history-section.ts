import { Component, Input } from '@angular/core';
import { IWorkHistorySection } from '../../../models/resume.model';
import { WorkHistoryItemComponent } from '../work-history-item/work-history-item';

@Component({
  selector: 'work-history-section',
  imports: [WorkHistoryItemComponent],
  templateUrl: './work-history-section.html',
  styleUrl: './work-history-section.scss',
})
export class WorkHistorySectionComponent {
  @Input() sectionInfo?: IWorkHistorySection;
}

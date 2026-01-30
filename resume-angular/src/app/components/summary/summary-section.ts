import { Component, Input } from '@angular/core';
import { ISummarySection } from '../../models/resume.model';

@Component({
  selector: 'summary-section',
  imports: [],
  templateUrl: './summary-section.html',
  styleUrl: './summary-section.scss',
})
export class SummarySectionComponent {
  @Input() sectionInfo?: ISummarySection;
}

import { Component, Input } from '@angular/core';
import { IEducationSection } from '../../../models/resume.model';
import { EducationItem } from "../education-item/education-item";

@Component({
  selector: 'education-section',
  imports: [EducationItem],
  templateUrl: './education-section.html',
  styleUrl: './education-section.scss',
})
export class EducationSectionComponent {
  @Input() sectionInfo?: IEducationSection;
}

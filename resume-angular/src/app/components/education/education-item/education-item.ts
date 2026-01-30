import { Component, Input } from '@angular/core';
import { IEducationItem } from '../../../models/resume.model';

@Component({
  selector: 'education-item',
  imports: [],
  templateUrl: './education-item.html',
  styleUrl: './education-item.scss',
})
export class EducationItem {
  @Input() itemInfo?: IEducationItem;
}

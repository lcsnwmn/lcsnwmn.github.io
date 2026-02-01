import { Component, Input } from '@angular/core';
import { ISkillsCategory } from '../../models/resume.model';

@Component({
  selector: 'skills-category',
  imports: [],
  templateUrl: './skills-category.html',
  styleUrl: './skills-category.scss',
})
export class SkillsCategoryComponent {
  @Input() categoryInfo?: ISkillsCategory;
}

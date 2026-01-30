import { Component, Input } from '@angular/core';
import { ISkillsSection } from '../../../models/resume.model';
import { SkillsCategoryComponent } from '../skills-category/skills-category';

@Component({
  selector: 'skills-section',
  imports: [SkillsCategoryComponent],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSectionComponent {
  @Input() sectionInfo?: ISkillsSection;
}

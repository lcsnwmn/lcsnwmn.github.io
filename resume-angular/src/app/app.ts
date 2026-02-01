import { Component, inject, signal } from '@angular/core';
import { ResumeService } from './services/resume.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { IResume } from './models/resume.model';
import { ContactItemComponent } from './components/contact-item/contact-item';
import { EducationItemComponent } from './components/education-item/education-item';
import { WorkHistoryItemComponent } from './components/work-history-item/work-history-item';
import { SkillsCategoryComponent } from "./components/skills-category/skills-category";

@Component({
  selector: 'app-root',
  imports: [
    AsyncPipe,
    ContactItemComponent,
    WorkHistoryItemComponent,
    EducationItemComponent,
    SkillsCategoryComponent
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Lucas Newman Resume 2026');
  protected resumeService = inject(ResumeService);
  protected data$?: Observable<IResume>;

  constructor() {
    this.data$ = this.resumeService.resumeData$;
  }
}

import { Component, inject, signal } from '@angular/core';
import { ContactSectionComponent } from "./components/contact/contact-section/contact-section";
import { ResumeService } from './services/resume.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { WorkHistorySectionComponent } from "./components/work-history/work-history-section/work-history-section";
import { IResume } from './models/resume.model';
import { SummarySectionComponent } from "./components/summary/summary-section";
import { SkillsSectionComponent } from './components/skills/skills-section/skills-section';
import { EducationSectionComponent } from './components/education/education-section/education-section';

@Component({
  selector: 'app-root',
  imports: [
    AsyncPipe,
    ContactSectionComponent,
    SummarySectionComponent,
    WorkHistorySectionComponent,
    SkillsSectionComponent,
    EducationSectionComponent
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

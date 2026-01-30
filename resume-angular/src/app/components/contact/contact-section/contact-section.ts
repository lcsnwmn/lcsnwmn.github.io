import { Component, Input } from '@angular/core';
import { IContactSection } from '../../../models/resume.model';
import { ContactItemComponent } from '../contact-item/contact-item';

@Component({
  selector: 'contact-section',
  imports: [ContactItemComponent],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSectionComponent {
  @Input() sectionInfo?: IContactSection;
}

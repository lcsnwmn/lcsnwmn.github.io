import { Component, Input } from '@angular/core';
import { LucideAngularModule, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-angular';
import { IContactItem } from '../../models/resume.model';
import { GithubIcon } from 'lucide-angular/src/icons';

@Component({
  selector: 'contact-item',
  imports: [LucideAngularModule],
  templateUrl: './contact-item.html',
  styleUrl: './contact-item.scss',
})
export class ContactItemComponent {
  @Input() itemInfo!: IContactItem;

  constructor() { }

  getIcon(iconName: string | undefined) {
    switch (iconName) {
      case 'mail':
        return MailIcon;
      case 'phone':
        return PhoneIcon;
      case 'github':
        return GithubIcon;
      case 'map-pin':
        return MapPinIcon;
      default:
        return undefined;
    }
  }
}

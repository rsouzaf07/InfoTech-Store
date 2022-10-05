import { Component, OnInit } from '@angular/core';
import {faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  mail = faEnvelope;
  phone = faPhone;
  linkedin = faLinkedin;
  whatsapp = faWhatsapp; 
}

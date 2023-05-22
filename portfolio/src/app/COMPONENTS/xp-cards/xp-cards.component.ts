import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-xp-cards',
  templateUrl: './xp-cards.component.html',
  styleUrls: ['./xp-cards.component.scss']
})
export class XpCardsComponent {
  @Input() entreprise:string=""
  @Input() poste:string=""
}

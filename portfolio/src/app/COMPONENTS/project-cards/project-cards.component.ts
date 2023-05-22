import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.scss']
})
export class ProjectCardsComponent {
  @Input() title:string=""
  @Input() description:string=""
  @Input() date:string=""
  @Input() image:string=""
}

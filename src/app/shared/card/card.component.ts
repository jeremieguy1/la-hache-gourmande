import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string;

  @Input() icon: string;

  @Input() animation?: string;

  @Input() color?: string;

  cardClass: string;

  iconClass: string;

  constructor() { }

  ngOnInit(): void {
    this.animation ?
      this.cardClass = "card animate__animated " + this.animation:
      this.cardClass = "card";

    this.color ?
      this.iconClass = "is-size-1 " + this.color:
      this.iconClass = "is-size-1";
  }

}

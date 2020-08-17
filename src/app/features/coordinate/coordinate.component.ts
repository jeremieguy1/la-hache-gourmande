import { PagesNameEnum } from './../../shared/enums/pages-name.enum';
import { Component, OnInit } from '@angular/core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

@Component({
  templateUrl: './coordinate.component.html',
  styleUrls: ['./coordinate.component.scss']
})
export class CoordinateComponent implements OnInit {

  faEnvelope = faEnvelope;
  faPhone = faPhone;

  pageName: string = PagesNameEnum.COORDINATE;

  constructor() { }

  ngOnInit(): void {
    
  }

}

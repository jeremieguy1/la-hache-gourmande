import { Component, OnInit } from '@angular/core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

@Component({
  templateUrl: './coordinate.component.html',
  styleUrls: ['./coordinate.component.scss']
})
export class CoordinateComponent implements OnInit {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  constructor() { }

  ngOnInit(): void {
    
  }

}

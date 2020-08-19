
import {
  Component, OnInit
} from '@angular/core';
  
import {
    PagesNameEnum
} from './../../shared/enums/pages-name.enum';
  
import {
  Steps
} from './../../shared/steps/steps';

import {
  VisitService
} from './visit.service';

@Component({
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent implements OnInit {

  pageName: string = PagesNameEnum.VISIT;


  stepsContent: Steps;

  constructor(private visitService: VisitService) {}

  ngOnInit(): void {
    this.stepsContent = this.visitService.getContent();
  }
}

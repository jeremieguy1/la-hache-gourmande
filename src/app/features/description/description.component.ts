import {
  Component,
  OnInit
} from '@angular/core';

import {
  PagesNameEnum
} from './../../config/enums/pages-name.enum';

import {
  DescriptionService
} from './description.service';

import {
  Description
} from './description';

@Component({
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  pageName: PagesNameEnum = PagesNameEnum.DESCRIPTION;

  descriptionContent: Description[];

  constructor(private descriptionService: DescriptionService) { }

  ngOnInit(): void {
    this.descriptionContent = [];
    this.descriptionContent.push(this.descriptionService.getContent('inside'));
    this.descriptionContent.push(this.descriptionService.getContent('outside'));
  }

  isNotLast(description: Description, index: number): boolean {
    return description.part.length !== (index + 1);
  }
}

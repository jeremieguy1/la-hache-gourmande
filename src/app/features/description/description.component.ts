import {
  Component,
  OnInit
} from '@angular/core';

import {
  TitleService
} from './../title.service';

import {
  PagesNameEnum,
  PagesNameTitleEnum
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

  constructor(private descriptionService: DescriptionService,
    private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setPageTitle(PagesNameTitleEnum.DESCRIPTION);
    this.descriptionContent = [];
    this.descriptionContent.push(this.descriptionService.getContent('inside'));
    this.descriptionContent.push(this.descriptionService.getContent('outside'));
  }

  /**
   * Tells if the description part is the last
   * @param description  The description to check
   * @param index Index of the description
   */
  isNotLast(description: Description, index: number): boolean {
    return description.part.length !== (index + 1);
  }
}

import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import {
  Router
} from '@angular/router';

import {
  StepsService
} from './steps.service';

import {
  Steps
} from './steps';

import {
  TitleService
} from './../../features/title.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  @Input() id: string;
  
  stepsContent: Steps;

  lastClickIndex: number;

  constructor(private router: Router,
    private stepsService: StepsService,
    private titleService: TitleService) {}

  ngOnInit(): void {
    this.lastClickIndex = 0;
    this.stepsContent = this.stepsService.getContent(this.id);
  }

  /**
   * Navigate to the view indicated by the target
   * @param event Click event
   */
  navigateTo(event: any, title: string): void {
    const li = event.target.parentNode;
    const index = this._index(li.parentNode, li);
    this.lastClickIndex = index;
    this.titleService.setTitle(title);
    this.router.navigate([this.stepsContent.targetRoute, { id:`${event.target.id}` }]);
  }

  /**
   * Says if the current li is activated or not
   * @param index index of the li
   */
  isActive(index: number): boolean {
    return this.lastClickIndex === index;
  }

  /**
   * Retrieves index of clicked li
   * @param ul The direct parent of li
   * @param li The parent of button clicked
   */
  _index(ul: HTMLElement, li: HTMLElement): number {
    for (let i = 0; i < ul.children.length; i++) {
      if (ul.children.item(i) === li) {
        return i;
      }
    }
    return 0;
  }

}

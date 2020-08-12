import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-visite',
  templateUrl: './visite.component.html',
  styleUrls: ['./visite.component.scss']
})
export class VisiteComponent implements OnInit {

  lastClickIndex: number;

  constructor() {}

  ngOnInit(): void {
    this.lastClickIndex = 0;
  }

  /**
   * Navigate to the view indicated by the target
   * @param event Click event
   */
  navigateTo(event: any): void {
    let li = event.target.parentNode;
    let index = this._index(li.parentNode, li);
    this.lastClickIndex = index;
    // Navigate -> event.target.id
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

import {
  Component,
  OnInit,
  Input 
} from '@angular/core';

import {
  Router, 
  UrlTree,
  UrlSegmentGroup,
  PRIMARY_OUTLET,
  ActivatedRoute, 
} from '@angular/router';

import {
  ImagePageContent,
} from './image-content';

import {
  ImagePageContentService
} from './image-page-content.service';

import {
  StepsId
} from '../../config/enums/steps-id.enum';

import {
  PagesNameEnum
} from '../../config/enums/pages-name.enum';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.scss']
})
export class ImagePageComponent implements OnInit {

  @Input() targetImagePage: string;

  imagePageContent: ImagePageContent;

  id: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private imagePageContentService: ImagePageContentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.id = params.get('id');
      } else {
        const tree: UrlTree = this.router.parseUrl(this.router.url);
        const primary: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
        Object.values(PagesNameEnum).forEach(element => {
          if (element === primary.segments[0].toString()) {
            this.id = StepsId[this.computeEnumKey(primary.segments[0].toString())];
            return;
          }
        })
      }
      this.imagePageContent = this.imagePageContentService.getContent(this.id);
    });
  }

  /**
   * Transform a string to an enum key compatible state
   * @param toCompute Raw key
   */
  computeEnumKey(toCompute: string): string {
    return toCompute.split("-").join('').toUpperCase();
  }

}

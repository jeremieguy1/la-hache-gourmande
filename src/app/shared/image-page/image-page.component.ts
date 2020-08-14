import {
  Component,
  OnInit,
  Input 
} from '@angular/core';

import {
  ActivatedRoute
} from '@angular/router';

import 
  imagePageContentJSON
from './image-page-content.json';

import {
  ImagePageContent,
  ImageContent
} from './image-content';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.scss']
})
export class ImagePageComponent implements OnInit {

  ASSETS_PREFIX: string = '../../assets/visit/';

  @Input() targetImagePage: string;

  imagePageContent: ImagePageContent;

  id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      params.get('id') !== null ? this.id = params.get('id') : this.id = 'visit-outside';
      this.imagePageContent = imagePageContentJSON[this.id], this.id;
    });
  }

}

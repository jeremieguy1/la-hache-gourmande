import {
  Component,
  OnInit,
  Input 
} from '@angular/core';
  
import 
  imagePageContentJSON
from './image-page-content.json';

import {
  ImageContent 
} from './image-content';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.scss']
})
export class ImagePageComponent implements OnInit {

  @Input() targetImagePage: string;

  imagePageContent: ImageContent[];

  constructor() { }

  ngOnInit(): void {
    this.imagePageContent = imagePageContentJSON[this.targetImagePage];
  }

}

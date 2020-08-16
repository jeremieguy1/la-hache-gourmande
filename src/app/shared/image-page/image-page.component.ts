import { ImagePageContentService } from './image-page-content.service';
import {
  Component,
  OnInit,
  Input 
} from '@angular/core';

import {
  ActivatedRoute
} from '@angular/router';

import {
  ImagePageContent,
} from './image-content';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrls: ['./image-page.component.scss']
})
export class ImagePageComponent implements OnInit {

  @Input() targetImagePage: string;

  imagePageContent: ImagePageContent;

  id: string;

  constructor(private route: ActivatedRoute,
    private imagePageContentService: ImagePageContentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      params.get('id') ? this.id = params.get('id') : this.id = 'visit-outside';
      this.imagePageContent = this.imagePageContentService.getContent(this.id);
    });
  }

}

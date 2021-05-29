import { Component, OnInit } from "@angular/core";

import { TitleService } from "./../title.service";

import {
	PagesNameEnum,
	PagesNameTitleEnum,
} from "./../../config/enums/pages-name.enum";

import { CarouselContentService } from "../../shared/carousel/carousel-content.service";

@Component({
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
	/**
	 * Prefix for asset folder
	 */
	ASSETS_PREFIX = "assets/carousel/home/";

	/**
	 * Id for the carousel
	 */
	pageName: PagesNameEnum = PagesNameEnum.HOME;

	/**
	 * Content of the carousel
	 */
	carouselContent: string[];

	constructor(
		private carouselContentService: CarouselContentService,
		private titleService: TitleService
	) {}

	ngOnInit(): void {
		this.titleService.setPageTitle(PagesNameTitleEnum.HOME);
		this.carouselContent = this.computeCarouselContent(
			this.getCarouselContent()
		);
	}

	/**
	 * Call the service which fetch data from carousel service
	 * @return The date fetched from the service
	 */
	getCarouselContent(): string[] {
		return this.carouselContentService.getCarouselContent(this.pageName);
	}

	/**
	 * Compute image names fetched with the prefix
	 * @param carouselContent The data fetched
	 * @return The data fetched with the prefix
	 */
	computeCarouselContent(carouselContent: string[]): string[] {
		const _carouselContent: string[] = [];
		return carouselContent.map(
			(content, _i) =>
				(_carouselContent[_i] = this.ASSETS_PREFIX + content)
		);
	}
}

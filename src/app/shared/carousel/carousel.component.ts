import {
	Component,
	Input,
	AfterViewInit,
	HostListener,
	OnDestroy,
} from "@angular/core";

import bulmaCarousel from "../../../../node_modules/bulma-carousel/src/js/index.js";

import { BreakpointsEnum } from "../../config/breakpoints.enum";

@Component({
	selector: "app-carousel",
	templateUrl: "./carousel.component.html",
	styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
	/**
	 * The name of the carousel id
	 */
	@Input() idCarousel: string;

	/**
	 * The current content
	 */
	@Input() carouselContent: string;

	carouselInstance: any;

	/**
	 * Event handler onClick to reset autoplay
	 * @param eventTarget The target of the event
	 */
	@HostListener("window:click", ["$event"])
	@HostListener("window:keydown", ["$event"])
	onClick(eventTarget: any) {
		// L'évènement est un clic ou un keydown 'Enter' ou 'Space' sur un des deux boutons de navigations
		if (
			(eventTarget.target.classList[0] &&
				eventTarget.target.classList[0] === "slider-navigation-next" &&
				eventTarget.type === "keydown" &&
				(eventTarget.code === "Enter" ||
					eventTarget.code === "Space")) ||
			(eventTarget.type === "click" &&
				eventTarget.target.classList[0] &&
				eventTarget.target.classList[0] === "slider-navigation-next")
		) {
			this.carouselInstance[0].stop();
			this.carouselInstance[0].next();
		} else if (
			(eventTarget.target.classList[0] &&
				eventTarget.target.classList[0] ===
					"slider-navigation-previous" &&
				eventTarget.type === "keydown" &&
				(eventTarget.code === "Enter" ||
					eventTarget.code === "Space")) ||
			(eventTarget.type === "click" &&
				eventTarget.target.classList[0] &&
				eventTarget.target.classList[0] ===
					"slider-navigation-previous")
		) {
			this.carouselInstance[0].stop();
			this.carouselInstance[0].previous();
		}
	}
	constructor() {}

	ngAfterViewInit(): void {
		this.initializeBulmaCarousel();
		this.fixBulmaCarouselAccessibility();
	}

	/**
	 * Set the carousel with settings
	 */
	initializeBulmaCarousel(): void {
		this.carouselInstance = bulmaCarousel.attach(
			`#carousel-${this.idCarousel}`,
			{
				initialSlide: 1,
				slidesToScroll: 1,
				slidesToShow: 1,
				pagination: true,
				loop: true,
				autoplay: true,
				autoplaySpeed: 4000,
				duration: 1000,
				breakpoints: [
					{ changePoint: BreakpointsEnum.SM, slidesToShow: 1 },
					{ changePoint: BreakpointsEnum.MD, slidesToShow: 1 },
				],
			}
		);
	}

	/**
	 * Fix somme accessibility problems with carousel
	 */
	fixBulmaCarouselAccessibility(): void {
		/* NextPrevious button accessibility */
		const buttonNext = document.getElementsByClassName(
			"slider-navigation-next"
		)[0];
		buttonNext.setAttribute("tabindex", "0");
		buttonNext.setAttribute("role", "button");
		buttonNext.setAttribute("title", "next image");
		buttonNext
			.getElementsByTagName("svg")[0]
			.setAttribute("alt", "right arrow");
		buttonNext
			.getElementsByTagName("svg")[0]
			.setAttribute("title", "right arrow");

		/* Previous button accessibility */
		const buttonPrevious = document.getElementsByClassName(
			"slider-navigation-previous"
		)[0];
		buttonPrevious.setAttribute("tabindex", "0");
		buttonPrevious.setAttribute("role", "button");
		buttonPrevious.setAttribute("title", "previous image");
		buttonPrevious
			.getElementsByTagName("svg")[0]
			.setAttribute("alt", "left arrow");
		buttonPrevious
			.getElementsByTagName("svg")[0]
			.setAttribute("title", "left arrow");
	}

	ngOnDestroy(): void {
		window.removeEventListener("click", this.onClick);
		window.removeEventListener("keydown", this.onClick);
	}
}

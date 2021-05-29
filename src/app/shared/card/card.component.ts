import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-card",
	templateUrl: "./card.component.html",
	styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
	/**
	 * The card title
	 */
	@Input() title: string;

	/**
	 * The card icon
	 */
	@Input() icon: string;

	/**
	 * The card animation (optionnal)
	 */
	@Input() animation?: string;

	/**
	 * The card color (optionnal)
	 */
	@Input() color?: string;

	cardClass: string;

	iconClass: string;

	constructor() {}

	ngOnInit(): void {
		this.animation
			? (this.cardClass = "card animate__animated " + this.animation)
			: (this.cardClass = "card");

		this.color
			? (this.iconClass = "is-size-1 " + this.color)
			: (this.iconClass = "is-size-1");
	}
}

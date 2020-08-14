export class ImageContent {
    title: string;
    src: string;

    constructor (title: string, src: string) {
        this.title = title;
        this.src = src;
    }
}

export class ImagePageContent {
    images: ImageContent[];
    alt: string;
}

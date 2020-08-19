export class ImageContent {
    title?: string;
    src: string;
}

export class ImagePageContent {
    images: ImageContent[];
    alt: string;
    explanation?: string[];
}

export class Description {
    title: string;
    part: DescriptionPart[];
}

export class DescriptionContent {
    text: string;
}

export class DescriptionPart {
    title?: string;
    content: DescriptionContent;
}

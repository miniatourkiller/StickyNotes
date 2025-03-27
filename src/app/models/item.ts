export class Card {
    id: number;
    color: string;
    title: string;
    constructor(id: number, color: string, title: string) {
      this.id = id;
      this.color = color;
      this.title = title;
    }
}

export class Text {
    id: number;
    text: string;
    constructor(id: number, text: string) {
      this.id = id;
      this.text = text;
    }
}
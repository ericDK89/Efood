export class Food {
  id: string;
  image: string;
  title: string;
  description: string;

  constructor(id: string, image: string, title: string, description: string) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.description = description;
  }
}

export class Restaurants {
  id: string;
  image: string;
  title: string;
  rating: number;
  description: string;
  tags: string[];
  site: string;

  constructor(
    id: string,
    image: string,
    title: string,
    rating: number,
    description: string,
    tags: string[],
    site: string
  ) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.rating = rating;
    this.description = description;
    this.tags = tags;
    this.site = site;
  }
}

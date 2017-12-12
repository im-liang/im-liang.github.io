export class Project {
  id: number;
  name: string;
  hightlight: string;
  description: string;
  cover: string;
  tag: string[];
  pages: Pages[];
}

export class Pages {
  image: string;
  color: string;
  header: string;
  description: string;
}

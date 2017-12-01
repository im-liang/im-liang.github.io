export class Project {
  id: number;
  name: string;
  hightlight: string;
  description: string;
  cover: string;
  pages: Pages[];
}

export class Pages {
  image: string;
  header: string;
  description: string;
}

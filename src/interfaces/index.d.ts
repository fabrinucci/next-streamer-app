export interface Channel {
  id: number;
  avatar: string;
  username: string;
  title: string;
  category: string;
  viewers: number;
  image: string;
  tags: string[];
}

export interface Category {
  id: number;
  title: string;
  viewers: number;
  image: string;
  tags: string[];
}

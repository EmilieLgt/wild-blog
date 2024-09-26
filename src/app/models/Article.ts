export interface Article {
  id: number;
  title: string;
  author: string;
  description: string;
  content: string;
  image: string;
  isPublished: boolean;
  comment: string;
  likes: number;
  isLiked: boolean;
  isCommented: boolean;
}

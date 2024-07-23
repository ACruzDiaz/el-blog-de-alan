export default interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    slug: string;
    tags:string;
    coverurl:string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
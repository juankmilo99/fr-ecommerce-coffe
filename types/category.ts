export type CategoryType = {
  id: number;
  categoryName: string;
  createdAt: string;
  documentId: string;
  mainImage: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    url: string;
    formats: {
      thumbnail: {
        url: string;
      };
      small: {
        url: string;
      };
    };
  };
  publishedAt: string;
  slug: string;
  updatedAt: string;
};
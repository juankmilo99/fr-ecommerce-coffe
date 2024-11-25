export type ProductType = {
  id: number;
  active: boolean;
  createdAt: string;
  description: string;
  documentId: string;
  images: {
    id: number;    
    url: string;
    formats: {
      thumbnail: {
        url: string;
      };
    };
  }[];
  isFeatured: boolean;
  origin: string;
  price: number;
  productName: string;
  publishedAt: string;
  slug: string;
  taste: string;
  updatedAt: string;
};

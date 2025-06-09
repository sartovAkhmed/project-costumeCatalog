export interface Costume {
  id: string;
  name: string;
  country: string;
  region: string;
  description: string;
  history: string;
  materials: string[];
  colors: string[];
  occasions: string[];
  imageUrl: string;
  price?: number;
  available: boolean;
}

export interface FilterOptions {
  region: string;
  country: string;
  searchTerm: string;
}
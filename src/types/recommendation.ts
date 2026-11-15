// Definisi tipe data dasar untuk sistem rekomendasi / Collaborative Filtering

export interface User {
  id: string;
  name: string;
}

export interface Item {
  id: string;
  title: string;
  category?: string;
}

export interface Rating {
  userId: string;
  itemId: string;
  score: number;
}

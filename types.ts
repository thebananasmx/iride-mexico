export enum TourCategory {
  ADVENTURE = 'Adventure Mountain',
  SIGHTSEEING = 'Urban Sightseeing',
  FAMILY = 'Family-Friendly',
}

export interface Tour {
  id: number;
  name: string;
  location: string;
  description: string;
  usp: string[]; // Unique Selling Points
  image: string;
  category: TourCategory;
  duration: string;
  skillLevel: 'Easy' | 'Moderate' | 'Challenging';
  included: string[];
  spotsLeft?: number;
  maxRiders?: number;
  meetingPointMap: string; // URL for iframe
  faqs: { question: string; answer: string }[];
}
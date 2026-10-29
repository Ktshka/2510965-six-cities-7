export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: string;
  location: Location;
};

export type OfferType = 'apartment' | 'room' | 'house' | 'hotel';

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Offer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  // поля для страницы с полным описанием (/offer/:id)
  images: string[];
  description: string[];
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  host: Host;
};

export interface ItineraryItemProps {
  image: string;
  name: string;
  time: string;
  estimatedCost: number;
  rating: number;
  reviews: number;
  type: string;
  directions: {
    byCar: string;
    byTrain: string;
    byWalk: string;
    byBike: string;
    byPlane: string;
  };
}

export interface ItineraryProps {
  date: string;
  list: ItineraryItem[];
}

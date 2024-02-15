export interface LocationProps {
  id: string;
  place: string;
  desc: string;
  address: string;
  geometry: {
    location: {
      lat?: string;
      long?: string;
    };
  };
}

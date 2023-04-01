
export type Cars = {
  id: number;
  name: string;
  year: number;
  model: string;
  color: string;
  price: number;
  latitude: number;
  longitude: number;
}

export type Location = Pick<Cars, 'latitude' | 'longitude'>;

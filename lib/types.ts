export type Role = 'owner' | 'adopter' | 'shelter' | 'admin';

export interface Pet {
  id: string;
  name: string;
  species: 'Dog' | 'Cat' | 'Bird' | 'Other';
  breed: string;
  age: string;
  emirate: string;
  temperament: string[];
  images: string[];
  vaccinated: boolean;
  microchipped: boolean;
  neutered: boolean;
  reasonForRehoming: string;
  compatibilityChildren: boolean;
  compatibilityPets: boolean;
  size: 'Small' | 'Medium' | 'Large';
}

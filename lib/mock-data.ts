import { Pet } from '@/lib/types';

export const featuredPets: Pet[] = [
  {
    id: '1',
    name: 'Luna',
    species: 'Dog',
    breed: 'Saluki Mix',
    age: '2 years',
    emirate: 'Dubai',
    temperament: ['Gentle', 'Playful', 'House-trained'],
    images: ['https://images.unsplash.com/photo-1548199973-03cce0bbc87b'],
    vaccinated: true,
    microchipped: true,
    neutered: true,
    reasonForRehoming: 'Owner relocating internationally and cannot bring Luna.',
    compatibilityChildren: true,
    compatibilityPets: true,
    size: 'Medium'
  },
  {
    id: '2',
    name: 'Milo',
    species: 'Cat',
    breed: 'Arabian Mau',
    age: '1 year',
    emirate: 'Abu Dhabi',
    temperament: ['Calm', 'Affectionate'],
    images: ['https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba'],
    vaccinated: true,
    microchipped: false,
    neutered: true,
    reasonForRehoming: 'Rescued kitten now ready for a permanent home.',
    compatibilityChildren: true,
    compatibilityPets: false,
    size: 'Small'
  },
  {
    id: '3',
    name: 'Coco',
    species: 'Bird',
    breed: 'Cockatiel',
    age: '3 years',
    emirate: 'Sharjah',
    temperament: ['Social', 'Vocal'],
    images: ['https://images.unsplash.com/photo-1444464666168-49d633b86797'],
    vaccinated: false,
    microchipped: false,
    neutered: false,
    reasonForRehoming: 'Family schedule no longer supports daily enrichment.',
    compatibilityChildren: true,
    compatibilityPets: true,
    size: 'Small'
  }
];

export const shelters = ['K9 Friends', 'Stray Dogs Center UAE', 'Animals and Us Fujairah'];

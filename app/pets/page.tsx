import { FilterBar } from '@/components/filter-bar';
import { PetCard } from '@/components/pet-card';
import { featuredPets } from '@/lib/mock-data';

export default function PetsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Adopt a Pet</h1>
      <FilterBar />
      <div className="grid gap-5 md:grid-cols-3">
        {featuredPets.map((pet) => <PetCard key={pet.id} pet={pet} />)}
      </div>
    </div>
  );
}

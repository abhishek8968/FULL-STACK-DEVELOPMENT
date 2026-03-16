import Image from 'next/image';
import Link from 'next/link';
import { Pet } from '@/lib/types';

export function PetCard({ pet }: { pet: Pet }) {
  return (
    <article className="card overflow-hidden">
      <Image src={pet.images[0]} alt={pet.name} width={600} height={400} className="h-52 w-full object-cover" />
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">{pet.name}</h3>
          <span className="rounded-full bg-haven-100 px-3 py-1 text-xs text-haven-600">{pet.species}</span>
        </div>
        <p className="text-sm text-slate-600">{pet.breed} • {pet.age} • {pet.emirate}</p>
        <div className="flex flex-wrap gap-2">
          {pet.temperament.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-2 py-1 text-xs">{tag}</span>
          ))}
        </div>
        <Link href={`/pets/${pet.id}`} className="inline-block rounded-xl bg-sun-500 px-4 py-2 text-sm font-semibold text-white">
          Request Adoption
        </Link>
      </div>
    </article>
  );
}

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { featuredPets } from '@/lib/mock-data';

export default function PetProfilePage({ params }: { params: { id: string } }) {
  const pet = featuredPets.find((item) => item.id === params.id);
  if (!pet) return notFound();

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Image src={pet.images[0]} alt={pet.name} width={900} height={800} className="h-full w-full rounded-2xl object-cover" />
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">{pet.name}</h1>
        <p className="text-slate-600">{pet.breed} • {pet.age} • {pet.emirate}</p>
        <div className="flex gap-2">
          {pet.temperament.map((tag) => <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-sm">{tag}</span>)}
        </div>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Vaccinated: {pet.vaccinated ? 'Yes' : 'No'}</li>
          <li>Microchipped: {pet.microchipped ? 'Yes' : 'No'}</li>
          <li>Neutered/Spayed: {pet.neutered ? 'Yes' : 'No'}</li>
          <li>Good with children: {pet.compatibilityChildren ? 'Yes' : 'No'}</li>
          <li>Good with other pets: {pet.compatibilityPets ? 'Yes' : 'No'}</li>
        </ul>
        <p><strong>Reason for rehoming:</strong> {pet.reasonForRehoming}</p>
        <button className="rounded-xl bg-haven-600 px-6 py-3 font-semibold text-white">Request Adoption</button>
      </section>
    </div>
  );
}

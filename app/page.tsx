import Link from 'next/link';
import { featuredPets, shelters } from '@/lib/mock-data';
import { PetCard } from '@/components/pet-card';

export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="rounded-3xl bg-gradient-to-br from-haven-100 via-white to-sun-100 p-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-haven-600">Pet Haven UAE</p>
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">Give Pets a Second Chance at Home.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">Connect with loving families across the UAE looking to adopt instead of shop.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/pets" className="rounded-xl bg-haven-600 px-6 py-3 font-semibold text-white">Adopt a Pet</Link>
          <Link href="/rehome" className="rounded-xl bg-sun-500 px-6 py-3 font-semibold text-white">Rehome Your Pet</Link>
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-2xl font-bold">Featured Pets</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredPets.map((pet) => <PetCard key={pet.id} pet={pet} />)}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          'Browse verified pets and shelters in your emirate.',
          'Submit thoughtful adoption requests and connect safely.',
          'Arrange meet-and-greets and complete responsible adoptions.'
        ].map((step, i) => (
          <div key={step} className="card p-6"><p className="text-sm font-semibold text-haven-600">Step {i + 1}</p><p className="mt-2">{step}</p></div>
        ))}
      </section>

      <section className="card p-8">
        <h2 className="text-2xl font-bold">Partner Shelters</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          {shelters.map((shelter) => <li key={shelter}>{shelter}</li>)}
        </ul>
      </section>

      <section className="card p-8">
        <h2 className="text-2xl font-bold">Responsible Adoption Promise</h2>
        <p className="mt-3 text-slate-700">Selling pets on this platform is strictly prohibited. Every listing is reviewed for welfare compliance aligned with UAE regulations and ethical rehoming standards.</p>
      </section>
    </div>
  );
}

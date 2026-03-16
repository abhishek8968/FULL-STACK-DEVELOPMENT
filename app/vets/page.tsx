const clinics = [
  ['Dubai', 'Modern Vet Jumeirah'],
  ['Abu Dhabi', 'Cloud9 Pet Hotel & Care'],
  ['Sharjah', 'Eurovets Veterinary Centre']
];

export default function VetsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Veterinary Directory</h1>
      <p className="mt-2 text-slate-600">Filter clinics by emirate (MVP placeholder).</p>
      <ul className="mt-6 space-y-3">
        {clinics.map(([emirate, name]) => <li key={name} className="card p-4"><p className="font-semibold">{name}</p><p className="text-sm text-slate-600">{emirate}</p></li>)}
      </ul>
    </div>
  );
}

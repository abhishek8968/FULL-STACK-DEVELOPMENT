const topics = ['Responsible pet ownership', 'Pet nutrition', 'Training guides', 'Veterinary care', 'Pet relocation tips'];

export default function ResourcesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Pet Care Resource Hub</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {topics.map((topic) => <article key={topic} className="card p-5"><h2 className="font-semibold">{topic}</h2><p className="mt-2 text-sm text-slate-600">Educational guidance for adopters and owners in the UAE.</p></article>)}
      </div>
    </div>
  );
}

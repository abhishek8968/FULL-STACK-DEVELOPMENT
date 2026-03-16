export default function RehomePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold">Rehome Your Pet Responsibly</h1>
      <p className="text-slate-600">For pet owners and rescue organizations. Listings are reviewed by moderators before they go live.</p>
      <form className="card grid gap-4 p-6">
        <input className="rounded-lg border p-2" placeholder="Pet name" />
        <select className="rounded-lg border p-2"><option>Species</option><option>Dog</option><option>Cat</option><option>Bird</option><option>Other</option></select>
        <input className="rounded-lg border p-2" placeholder="Breed" />
        <input className="rounded-lg border p-2" placeholder="Age" />
        <input className="rounded-lg border p-2" placeholder="Location (Emirate)" />
        <textarea className="rounded-lg border p-2" placeholder="Reason for rehoming" />
        <button className="rounded-xl bg-haven-600 px-6 py-3 font-semibold text-white">Submit Listing for Review</button>
      </form>
    </div>
  );
}

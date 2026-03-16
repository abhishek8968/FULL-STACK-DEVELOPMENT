const moderationQueue = [
  { pet: 'Luna', status: 'Pending listing approval' },
  { pet: 'Milo', status: 'User verification required' }
];

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin & Moderation Panel</h1>
      <p className="text-slate-600">Review listings, verify users, and remove suspicious content. Pet sales are prohibited.</p>
      <section className="card p-6">
        <h2 className="text-xl font-semibold">Review Queue</h2>
        <ul className="mt-4 space-y-2">
          {moderationQueue.map((item) => (
            <li key={item.pet} className="flex items-center justify-between rounded-lg border p-3">
              <span>{item.pet}</span>
              <span className="text-sm text-slate-600">{item.status}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

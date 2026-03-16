const filters = {
  emirate: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah'],
  species: ['Dog', 'Cat', 'Bird', 'Other'],
  size: ['Small', 'Medium', 'Large']
};

export function FilterBar() {
  return (
    <section className="card p-4">
      <h2 className="mb-4 text-lg font-semibold">Find your perfect companion</h2>
      <div className="grid gap-3 md:grid-cols-3">
        {Object.entries(filters).map(([key, values]) => (
          <label key={key} className="text-sm font-medium text-slate-600">
            {key.toUpperCase()}
            <select className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2">
              <option>Any</option>
              {values.map((value) => <option key={value}>{value}</option>)}
            </select>
          </label>
        ))}
      </div>
    </section>
  );
}

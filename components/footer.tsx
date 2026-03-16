import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm md:grid-cols-5">
        <p className="md:col-span-2 text-slate-600">Pet Haven UAE is a community-first adoption marketplace helping families adopt ethically across the UAE.</p>
        {['About', 'Resources', 'Contact', 'Privacy', 'Terms'].map((item) => (
          <Link key={item} href={item === 'Resources' ? '/resources' : '#'} className="text-slate-700 hover:text-haven-600">
            {item}
          </Link>
        ))}
      </div>
    </footer>
  );
}

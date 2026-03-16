import Link from 'next/link';

const links = [
  { href: '/pets', label: 'Adopt' },
  { href: '/rehome', label: 'Rehome' },
  { href: '/resources', label: 'Resources' },
  { href: '/vets', label: 'Vet Directory' },
  { href: '/admin', label: 'Admin' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold text-haven-600">Pet Haven UAE</Link>
        <div className="flex gap-4 text-sm font-medium text-slate-700">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-haven-600">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

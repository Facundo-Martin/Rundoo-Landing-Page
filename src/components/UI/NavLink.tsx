import Link, { LinkProps } from 'next/link';

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
}
export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">
      {children}
    </Link>
  );
}

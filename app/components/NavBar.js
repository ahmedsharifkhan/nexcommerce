import Link from 'next/link';

export default function NavBar() {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

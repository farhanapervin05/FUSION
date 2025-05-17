import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      padding: '1rem 2rem',
      background: '#222',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      boxSizing: 'border-box',
      width: '100%',
      zIndex: 1000,
    }}>
      <div>
        <Link to="/fusion" style={{ color: 'white', textDecoration: 'none' }}>
          Fusion Generator
        </Link>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
      </div>
    </nav>
  );
}

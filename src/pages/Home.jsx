import React from 'react';

const fusions = [
  {
    name: 'Paneer Tikka Pizza',
    desc: 'Classic Indian paneer meets Italian pizza. Crispy, cheesy, and spicy AF.',
    tip: 'Use a thin crust to keep it crispy and light.',
  },
  {
    name: 'Masala Ramen',
    desc: 'Japanese ramen with a fiery Indian masala twist.',
    tip: 'Simmer broth with garam masala for max flavor punch.',
  },
  {
    name: 'Chai Latte Cheesecake',
    desc: 'Dessert fusion with creamy cheesecake and spiced chai notes.',
    tip: 'Add cardamom powder to the batter for that chai kick.',
  },
  {
    name: 'Samosa Quesadilla',
    desc: 'Crunchy Indian samosa filling wrapped in a cheesy Mexican quesadilla.',
    tip: 'Use mint chutney as a dip for the ultimate combo.',
  },
  {
    name: 'Tandoori Tacos',
    desc: 'Soft Mexican tacos loaded with smoky tandoori veggies or chicken.',
    tip: 'Top with raita for that creamy cooling contrast.',
  },
  {
    name: 'Butter Chicken Pasta',
    desc: 'Italian pasta tossed in creamy, buttery Indian chicken gravy.',
    tip: 'Cook pasta al dente and toss quickly with sauce for best taste.',
  },
  {
    name: 'Gulab Jamun Cheesecake',
    desc: 'Classic Indian sweet meets rich, creamy cheesecake base.',
    tip: 'Soak gulab jamuns a little to soften before adding.',
  },
  {
    name: 'Mango Lassi Smoothie Bowl',
    desc: 'Fresh mango lassi flavors blended into a healthy, colorful breakfast bowl.',
    tip: 'Top with nuts and seeds for crunch and texture.',
  },
  {
    name: 'Curry Burrito',
    desc: 'Mexican burrito filled with flavorful Indian curry and rice.',
    tip: 'Wrap tight and grill slightly to seal the deal.',
  },
];

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '2rem 1rem',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",

    }}>
      <div style={{ maxWidth: 1000, width: '100%' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Welcome to Fusion Food Generator</h1>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#555' }}>
          Unleash your culinary creativity with our fusion recipes and tips. Mix, match, and make magic in your kitchen.
        </p>

        <h2 style={{ marginTop: '3rem', marginBottom: '1rem', borderBottom: '2px solid #222', paddingBottom: '0.3rem', textAlign: 'center' }}>
          Popular Fusions
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          justifyContent: 'center',
        }}>
          {fusions.map(({ name, desc, tip }) => (
            <div key={name} style={{
              padding: '1rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              backgroundColor: '#fff'
            }}>
              <h3 style={{ marginBottom: '0.5rem', color: '#222' }}>{name}</h3>
              <p style={{ fontSize: '0.95rem', color: '#444', marginBottom: '0.7rem' }}>{desc}</p>
              <p style={{ fontStyle: 'italic', color: '#666', fontSize: '0.85rem' }}>Tip: {tip}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button
            onClick={() => window.location.href = '/fusion'}
            style={{
              background: '#222',
              color: 'white',
              padding: '0.8rem 1.8rem',
              fontSize: '1rem',
              borderRadius: '25px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => (e.target.style.background = '#444')}
            onMouseLeave={e => (e.target.style.background = '#222')}
          >
            Create Your Fusion
          </button>
        </div>
      </div>
    </div>
  );
}

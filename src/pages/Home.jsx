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
  {
    name: 'Rajma Nachos',
    desc: 'Crunchy nacho chips smothered in spicy North Indian rajma curry and cheese.',
    tip: 'Use cheddar + mozzarella for that pull-worthy cheese action.'
  },
  {
    name: 'Idli Sushi',
    desc: 'South Indian idli meets Japanese sushi. Rolled with chutney and veggies.',
    tip: 'Chill idlis before slicing for clean rolls.'
  },
  {
    name: 'Miso Dal Soup',
    desc: 'Earthy Indian dal gets an umami punch with Japanese miso paste.',
    tip: 'Use red miso for deeper flavor and toss in some scallions.'
  },
  {
    name: 'Pav Bhaji Sliders',
    desc: 'Mumbai street-style bhaji stuffed in soft toasted burger buns.',
    tip: 'Top with a cheese slice and toast the buns in butter. 😮‍💨'
  },
  {
    name: 'Falafel Chaat',
    desc: 'Middle Eastern falafel drizzled with tangy Indian chutneys and topped with sev.',
    tip: 'Serve cold for a refreshing spicy-crunchy combo.'
  },
  {
    name: 'Tandoori Mac & Cheese',
    desc: 'Creamy mac with smoky tandoori masala, because bland cheese ain’t enough.',
    tip: 'Top with breadcrumbs + coriander for that crisp finish.'
  },
  {
    name: 'Biryani Tacos',
    desc: 'Soft taco shells loaded with biryani rice, raita drizzle, and mint chutney.',
    tip: 'Go light on the rice to keep the taco from collapsing like your GPA.'
  },
  {
    name: 'Dosa Wraps',
    desc: 'Crispy dosa used like tortilla wraps filled with spicy paneer or veggies.',
    tip: 'Roll tight and serve with a mini sambar dip cup.'
  },
  {
    name: 'Kimchi Paratha',
    desc: 'Indian paratha stuffed with spicy Korean kimchi and gooey cheese.',
    tip: 'Use ghee instead of oil to toast for that buttery flake factor.'
  },
  {
    name: 'Gajar Halwa Pancakes',
    desc: 'Desi carrot halwa sandwiched between fluffy American pancakes.',
    tip: 'Drizzle with condensed milk for MAXIMUM slutty sweetness.'
  },
  {
    name: 'Biryani Arancini',
    desc: 'Italian rice balls but make it desi — biryani inside, crispy outside.',
    tip: 'Use leftover biryani and a cheesy core for that surprise bite.',
  },
  {
    name: 'Pav Bhaji Sliders',
    desc: 'Indian street food meets American mini burgers. It’s messy, it’s sexy.',
    tip: 'Toast your buns in butter and add melted cheese for the kill shot.',
  }
];

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: '2rem 1rem',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <div >
        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Welcome to Fusion Food Generator</h1>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#555' }}>
          Unleash your culinary creativity with our fusion recipes and tips. Mix, match, and make magic in your kitchen.
        </p>

        <h2 style={{ marginTop: '3rem', marginBottom: '1rem', borderBottom: '2px solid #222', paddingBottom: '0.3rem', textAlign: 'center' }}>
          Popular Fusions
        </h2>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
        }}>
          {fusions.map(({ name, desc, tip }) => (
            <div key={name} style={{
              padding: '1rem',
              border: '1px solid #ccc',
              width: '16%',
              minWidth: '350px',
              height: '200px',
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
            onClick={() => window.location.href = '/FUSION/fusion'}
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

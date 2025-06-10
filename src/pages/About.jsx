export default function About() {
  return (
    <div style={{
      padding: '2.5rem 1rem',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: '1.8',
      color: '#2c2c2c'
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '1.5rem',
        fontSize: '2rem',
        fontWeight: '600',
        borderBottom: '2px solid #222',
        paddingBottom: '0.5rem'
      }}>
        About Fusion Food Generator
      </h1>

      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#444', textAlign: 'center' }}>
        Welcome to the tastiest chaos on the internet 🍽️ — where culinary traditions meet code and give birth to wild, delicious ideas. 
        This isn’t just a recipe site; it’s a creative playground for foodies, chefs, and bored students trying to survive hostel meals.
      </p>

      <h2 style={{ fontSize: '1.3rem', marginTop: '2rem' }}>✨ What is This?</h2>
      <p>
        The Fusion Food Generator is a React-based web app designed to blend global cuisines with a dash of AI-powered randomness. 
        You pick the cuisines, and we’ll whip up some fusion dishes and cooking tips to inspire your next kitchen experiment.
      </p>

      <h2 style={{ fontSize: '1.3rem', marginTop: '2rem' }}>🌍 Why Fusion Food?</h2>
      <p>
        Because food doesn’t have borders, baby. Fusion is about embracing creativity — imagine sushi tacos, butter chicken pizza, or Korean dosa wraps. 
        Mixing cultures is not only fun, it reflects how global we’ve become. This app lets you do that with zero effort.
      </p>

      <h2 style={{ fontSize: '1.3rem', marginTop: '2rem' }}>🛠️ Tech Stack</h2>
      <ul style={{ listStyleType: 'circle', marginLeft: '1.5rem', color: '#555' }}>
        <li>React.js – for building a smooth, component-based UI</li>
        <li>HTML & CSS – because duh</li>
        <li>React Router – for clean page navigation</li>
        <li>External Recipe API – to fetch that delicious inspo</li>
        <li>Vite – for lightning fast development & builds</li>
      </ul>

      <h2 style={{ fontSize: '1.3rem', marginTop: '2rem' }}>👩🏽‍💻 Who Made This?</h2>
      <p>
        Created by a student with equal passion for design, food, and coding (and like... also slightly losing her mind 💀). This is part of a Semester 2 web project — built with late nights, low patience, but high ambition.
      </p>

      <h2 style={{ fontSize: '1.3rem', marginTop: '2rem' }}>💌 Wanna Connect?</h2>
      <p>
        If you're a recruiter, coder, or just a hungry soul—hit me up on 
        <a href="https://github.com/farhanapervin05" target="_blank" rel="noreferrer" style={{ color: '#007bff', marginLeft: '0.3rem' }}>GitHub</a>. 
        Let’s collab or just talk food 🤝
      </p>

      <p style={{ marginTop: '2.5rem', fontStyle: 'italic', color: '#666', textAlign: 'center' }}>
        Built with flavor, curiosity, and way too many console.logs 🍜💻
      </p>
    </div>
  );
}

import React, { useState } from 'react';

export default function FusionGenerator() {
  const [cuisine1, setCuisine1] = useState('');
  const [cuisine2, setCuisine2] = useState('');
  const [fusionResults, setFusionResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!cuisine1 || !cuisine2) {
      setError("Please enter two cuisines to generate a fusion recipe.");
      setFusionResults([]);
      return;
    }

    setLoading(true);
    setError('');
    setFusionResults([]);

    const apiKey = "1a49bac64dc444a6b54d7c9d5f11ef4c";
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${cuisine1},${cuisine2}&number=3&addRecipeInformation=true`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!data.results || data.results.length === 0) {
        setError("No fusion recipes found 😭 Try different cuisines or spellings.");
      } else {
        const results = data.results.map(recipe => ({
          title: recipe.title,
          image: recipe.image,
          summary: recipe.summary.replace(/<[^>]*>?/gm, '').slice(0, 200) + "...",
          link: recipe.sourceUrl,
        }));
        setFusionResults(results);
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div style={{
      background: 'linear-gradient(to bottom right, #fff8f0, #f0f7ff)',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Quicksand, sans-serif',
    }}
    >
      <div style={{
        height: '100%',
        minHeight: '100vh',
        display: 'flex',
        marginLeft: '340px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '20px',
        boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
        textAlign: 'center',
        transition: 'transform 0.3s ease',

      }}>
        <div style={{
          padding: '2rem',
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
          width: '700px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>✨ Build Your Fusion Fantasy ✨</h2>

          <input
            type="text"
            placeholder="Enter first cuisine (e.g. Thai)"
            value={cuisine1}
            onChange={e => setCuisine1(e.target.value)}
            style={{
              padding: '0.7rem',
              width: '80%',
              marginBottom: '1rem',
              borderRadius: '10px',
              border: '1px solid #ccc'
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Enter second cuisine (e.g. Lebanese)"
            value={cuisine2}
            onChange={e => setCuisine2(e.target.value)}
            style={{
              padding: '0.7rem',
              width: '80%',
              marginBottom: '1.5rem',
              borderRadius: '10px',
              border: '1px solid #ccc'
            }}
          />
          <br />
          <p style={{ marginTop: '20px' }}>Enter your two cuisines and discover magical fusion dishes!</p>
          <button
            onClick={handleGenerate}
            style={{
              marginTop: '30px',
              background: '#222',
              color: 'white',
              padding: '0.8rem 1.6rem',
              fontSize: '1rem',
              borderRadius: '25px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Generate Fusion 💥
          </button>

          {loading && (
            <p style={{ marginTop: '2rem', fontSize: '1.2rem', color: '#777' }}>Loading your fusion feast... 🍴</p>
          )}

          {error && (
            <p style={{ marginTop: '2rem', fontSize: '1.2rem', color: 'crimson' }}>{error}</p>
          )}

          {fusionResults.length > 0 && (
            <div style={{ marginTop: '2rem' }}>
              {fusionResults.map((recipe, index) => (
                <div key={index} style={{
                  marginBottom: '2rem',
                  padding: '1rem',
                  border: '1px solid #ddd',
                  borderRadius: '12px',
                  backgroundColor: '#fafafa',
                  textAlign: 'left',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                }}>
                  <img src={recipe.image} alt={recipe.title} style={{ width: '100%', borderRadius: '10px', marginBottom: '1rem' }} />
                  <h3 style={{ marginBottom: '0.5rem', color: '#222' }}>{recipe.title}</h3>
                  <p style={{ color: '#555', marginBottom: '1rem' }}>{recipe.summary}</p>
                  <a href={recipe.link} target="_blank" rel="noopener noreferrer" style={{
                    color: '#007bff',
                    textDecoration: 'none',
                    fontWeight: 'bold'
                  }}>View Full Recipe ↗</a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

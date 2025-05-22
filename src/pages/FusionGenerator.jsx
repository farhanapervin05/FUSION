import React, { useState } from 'react';

export default function FusionGenerator() {
  const [cuisine1, setCuisine1] = useState('');
  const [cuisine2, setCuisine2] = useState('');
  const [fusionResult, setFusionResult] = useState('');

  const handleGenerate = () => {
    if (!cuisine1 || !cuisine2) {
      setFusionResult("Umm babe? You gotta enter two cuisines first 😤");
      return;
    }

    const fusionDish = `${cuisine1} × ${cuisine2} Fusion Bomb 💣`;
    setFusionResult(`Introducing: ${fusionDish}! Bet your tastebuds just screamed 🥵`);
  };

  return (
    <div style={{alignItems: 'center'}}>
    <div style={{
      // height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
     
    }}>
      <div style={{
        padding: '2rem',
        backgroundColor: '#fff',
        borderRadius: '16px',
        boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
        maxWidth: '600px',
        width: '90%',
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
        <button
          onClick={handleGenerate}
          style={{
            background: '#222',
            color: 'white',
            padding: '0.8rem 1.6rem',
            fontSize: '1rem',
            borderRadius: '25px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background 0.3s',
          }}
          onMouseEnter={e => (e.target.style.background = '#444')}
          onMouseLeave={e => (e.target.style.background = '#222')}
        >
          Generate Fusion 💥
        </button>

        {fusionResult && (
          <div style={{ marginTop: '2rem', fontSize: '1.2rem', color: '#555' }}>
            <p>{fusionResult}</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

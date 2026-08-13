import React from 'react';

function AboutUsPage() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>About Paradise Nursery</h1>
      <p>
        Paradise Nursery is dedicated to bringing greenery and joy into every home.
        We provide a wide range of plants and garden hardware, helping customers
        create beautiful and sustainable living spaces.
      </p>

      <h2>Our Team</h2>
      <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
        <div style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <h3>Khushi</h3>
          <p>Founder & Web Developer — Designs and builds interactive shopping experiences for our customers.</p>
        </div>

        <div style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <h3>Ravi</h3>
          <p>Creative Designer — Crafts stunning visuals and ensures our products look inspiring online.</p>
        </div>

        <div style={{ flex: 1, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <h3>Meera</h3>
          <p>Content Strategist — Curates authentic product descriptions and guides to connect with our customers.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;

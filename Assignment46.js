// src/App.js
import React from 'react';

// Header Component
const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={overlayStyle}>
        <h1 style={headerTitleStyle}>Randy Oliver's Portfolio</h1>
      </div>
    </header>
  );
}

// About Component
const About = () => {
  return (
    <section style={sectionStyle}>
      <h2 style={sectionTitleStyle}>About Me</h2>
      <p style={sectionTextStyle}>
        I am a passionate web developer with a focus on building dynamic, responsive applications.
      </p>
    </section>
  );
}

// Contact Component
const Contact = () => {
  return (
    <section style={sectionStyle}>
      <h2 style={sectionTitleStyle}>Contact Information</h2>
      <p style={sectionTextStyle}>Email: example@example.com</p>
      <p style={sectionTextStyle}>
        LinkedIn: <a href="https://www.linkedin.com" style={linkStyle}>My LinkedIn</a>
      </p>
    </section>
  );
}

// App Component
const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Contact />
    </div>
  );
}

export default App;

// Styling for Header
const headerStyle = {
  backgroundImage: 'url(https://via.placeholder.com/1500x500)', // Replace with your image
  height: '500px',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative'
};

const overlayStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: '20px',
  textAlign: 'center',
};

const headerTitleStyle = {
  color: 'white',
  fontSize: '36px',
};

// Styling for Sections
const sectionStyle = {
  padding: '20px',
  margin: '20px 0',
  backgroundColor: '#f4f4f4',
  borderRadius: '8px',
};

const sectionTitleStyle = {
  color: '#333',
};

const sectionTextStyle = {
  color: '#555',
};

// Styling for Link
const linkStyle = {
  color: '#007bff',
};

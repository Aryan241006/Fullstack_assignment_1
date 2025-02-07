import React from 'react';

const HomePage = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      width: '100%',
      margin: 0,
      padding: 0,
      backgroundColor: '#38354a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    card: {
      width: '90%',
      maxWidth: '600px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '2rem',
      margin: '2rem',
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '0.5rem',
      margin: 0,
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#666',
      margin: '0.5rem 0 0 0',
    },
    contactSection: {
      marginBottom: '2rem',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
    },
    label: {
      fontSize: '0.9rem',
      color: '#666',
      marginBottom: '0.25rem',
      margin: 0,
    },
    value: {
      color: '#333',
      margin: 0,
    },
    bio: {
      borderTop: '1px solid #eee',
      paddingTop: '1.5rem',
      textAlign: 'center',
      color: '#666',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <header style={styles.header}>
          <h1 style={styles.title}>Abdul Rahman Shihabuddin</h1>
          <p style={styles.subtitle}>Student at Kalvium</p>
        </header>
        
        <div style={styles.contactSection}>
          <div style={styles.contactItem}>
            <div>
              <p style={styles.label}>Email</p>
              <p style={styles.value}>abdul.rahman.iv7@gmail.com</p>
            </div>
          </div>

          <div style={styles.contactItem}>
            <div>
              <p style={styles.label}>Phone</p>
              <p style={styles.value}>(+91) 7559999445</p>
            </div>
          </div>

          <div style={styles.contactItem}>
            <div>
              <p style={styles.label}>Location</p>
              <p style={styles.value}>Kerala, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
import React from 'react';
import { useHistory } from 'react-router-dom';

function Footer() {
  const history = useHistory();
  return (
    <div style={styles.container} className="footer-background">
      <div style={styles.earlyAccessDiv}>
        <p style={styles.text}>Get Early Access</p>{' '}
        <button style={styles.button}
        onClick={() => history.push('/Register')} 
        className="button-color-hover">
          Sign Up
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100vw',
    height: '30rem',
    display: 'flex',
    padding: '3em 0em',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  earlyAccessDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { color: '#fff', fontSize: '1.5em', margin: '0 1em' },
  button: {
    fontSize: '1em',
    padding: '1em 2em',
    color: '#fff',
    backgroundColor: '#00FAAD',
    borderRadius: '10em',
    border: '1px solid #00FAAD',
    cursor: 'pointer',
  },
};

export default Footer;

import React from 'react';
import logo from '../../assets/logo.png';
import burger from '../../assets/burger.png';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
    const history = useHistory();
  return (
    <div style={styles.container} className="banner-background">
      <div style={styles.sidebarContainer}>
        <img src={burger} style={{ padding: '0.5em 0' }} />
       
      </div>
      <div style={styles.contentContainer}>
        <div style={styles.headerContainer}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
              <button style={{backgroundColor: 'transparent', border: '0px',}} onClick={() => history.push('/')} >
              <img src={logo} style={{ width: '70px', height: '60px' }} />
            </button>
            
            <span
              style={{ fontSize: '1.5em', color: '#fff', paddingLeft: '1em' }}
            >
              {' '}
              Neuro X Technology Baby
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <button
              style={{ ...styles.button, marginRight: '1em' }}
              onClick={() => history.push('/Login')}
              className="green-border-hover"
            >
              Login
            </button>
            
            <button style={styles.button} onClick={() => history.push('/Register')} className="green-border-hover">
            Sign Up
            </button>
          </div>
        </div>
       
      </div>
     
    </div>
  );
}

const styles = {
  container: {
    height: '12vh',
    display: 'flex',
    flexDirection: 'row',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 'calc(100vw - 10rem)',
    justifyContent: 'space-between',
    margin: '2rem 2rem',
  },
  sidebarContainer: {
    backgroundColor: '#3335',
    width: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3em 1em 1em',
  },
 
  button: {
    fontSize: '1em',
    padding: '0 3.5em',
    height: '3em',
    width: '25em',
    color: '#fff',
    backgroundColor: 'transparent',
    borderRadius: '10em',
    border: '1px solid #fff',
    cursor: 'pointer',
  },
  heading: {
    fontSize: '5rem',
    color: '#fff',
    fontWeight: '600',
  },
};

export default Header;

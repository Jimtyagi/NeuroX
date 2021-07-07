import React from 'react';
import logo from '../../assets/logo.png';
import burger from '../../assets/burger.png';
import slide from '../../assets/Rotating_Brain.gif';
import { useHistory } from 'react-router-dom';

function Banner() {
  const history = useHistory();
  return (
    <div style={styles.container} className="banner-background">
      <div style={styles.sidebarContainer}>
        <img src={burger} style={{ padding: '0.5em 0' }} />
        <div style={{ color: '#fff' }}>
          <p className="sideway-text">EXPLORE MORE</p>
          <div style={styles.vl}></div>
        </div>
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
            <img src={logo} style={{ width: '70px', height: '60px' }} />
            <span
              style={{ fontSize: '1.5em', color: '#fff', paddingLeft: '1em' }}
            >
              {' '}
              Neuro X Technology
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
            <button style={styles.button} onClick={() => history.push('/Register')}  className="green-border-hover">
            Sign up
            </button>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '25vh',
            justifyContent: 'flex-start',
            marginLeft: '10vh'
          }}
        >
          <span style={{ ...styles.heading, lineHeight: '1em' }}>NUERO X </span>
          <span style={styles.heading}>ANALYTICS </span>

          <p
            style={{
              fontSize: '2em',
              color: '#fff',
              width: '20em',
              textAlign: 'left',
            }}
          >
            We at NeuroX ait to provide you with top tier mental health services
            using our novel AI
          </p>
          <button
            style={{ ...styles.button, marginTop: '5em' }}
            className="green-border-hover"
          >
            Discover Now
          </button>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '30vh',
          left:'65em',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img src={slide} style={{ height: '40%', width: '40%' }} />

      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
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
  contentContainer: { display: 'flex', flexDirection: 'column' },
  sidebarContainer: {
    backgroundColor: '#3335',
    width: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3em 1em 1em',
  },
  vl: {
    borderLeft: '2px solid #fff',
    height: '5em',
    margin: '0.5em 0.5em 0.5em 1.65em',
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

export default Banner;

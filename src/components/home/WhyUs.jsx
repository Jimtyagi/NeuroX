import React from 'react';
import WhyBox from './WhyBox';
import brain from '../../assets/JPFn.gif';


function WhyUs() {
  return (
    <div style={styles.container}>
      <span style={styles.title}>Why neuroX ?</span>
      <div style={{justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',}}>
        <div style={styles.innerContainer}>

        <WhyBox title="Novel AI Technology " />
        <WhyBox title="Patented Invention " />
        <WhyBox title="Affordable and cost effective packages" />
        </div>
        <div style={styles.innerContainer}>
        <WhyBox title="Successful beta testing on prototype" />
        <WhyBox title="Wide range of diagnostic, prognostic and predictory services"/ >
        <WhyBox title="Governement and University certified"/ >
        </div>
        <div style={styles.innerContainer}>
        <WhyBox title="Nationally recognized"/ >
        <WhyBox title="Pre investments, grants and incentives"/ >
        <WhyBox title="Professional team of engineers and clinicians"/ >
        </div>
        </div>
      <div style={{ ...styles.bottomContainer, position: 'relative' }}>
        <div style={{ marginRight: '2em', position: 'relative' }}>
          <div style={styles.absoluteGreenborder}></div>
          <img
            src={brain}
            style={styles.image}
          />
        </div>
        <div style={styles.imageSide}>
          <span style={styles.subTitle}>About our Anxiety Predictor
 </span>
          <span style={styles.subTitle2}>Predicts your anxiety with upto 85% accuracy</span>

          <div>
            <div style={styles.absoluteGreenBox}></div>
            <p style={styles.sideText}>
              <ul className="ul">
                <li>Successfully tested </li>
                <li>500+ dataset </li>
                <li>AI generated anxiety analysis report </li>
              </ul>
              <button
            style={styles.button}
            className="green-border-hover"
          >
            Sign up to get personalized & custom dataset @Rs.499/month
          </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    padding: '10em 0',
    
  },
  innerContainer: {
    width: '80vw',
    display: 'flex',
    flexDirection: 'row',
    padding: '0 10em',
    
  },
  title: {
    fontSize: '4em',
    color: '#1A4770',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom:'1em'
  },
  mainText: {
    padding: '2em 7em',
    color: '#455976',
    fontWeight: '400',
    textAlign: 'center',
    alignItems:'center'
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10em',
  },
  absoluteGreenborder: {
    position: 'absolute',
    border: '2px solid #01FAAA',
    left: '3em',
    right: '3em',
    marginTop: '3em',
    height: '28em',
    
  },
  image: {
    width: '60vw',
    height: '65vh',
    maxWidth: '50em',
    maxHeight: '35em',
  },
  imageSide: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '85em',
  },
  subTitle: {
    fontSize: '4em',
    color: '#1A4770',
    fontWeight: '500',
    textAlign: 'left',
    paddingLeft: '2rem',
  },
  subTitle2: {
    fontSize: '2em',
    color: '#1A4770',
    fontWeight: '500',
    textAlign: 'left',
    paddingLeft: '2rem',
  },
  absoluteGreenBox: {
    position: 'absolute',
    backgroundColor: '#01FAAA55',
    maxWidth: '65vw',
    minWidth: '45vw',
    width: '100%',
    height: '7em',
    bottom: 0,
    margin: 0,
    marginTop: '2em',
    transform: 'translateX(-13em)',
    overflowY: 'hidden',
  },
  sideText: {
    padding: '2em',
    color: '#455976',
    fontWeight: '400',
    textAlign: 'center',
  },
  button: {
    fontSize: '1em',
    padding: '0 3.5em',
    height: '3em',
    width: '25em',
    color: '#000000',
    backgroundColor: 'transparent',
    borderRadius: '10em',
    border: '1px solid #000000',
    cursor: 'pointer',
    marginTop:'1em',
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
};
export default WhyUs;

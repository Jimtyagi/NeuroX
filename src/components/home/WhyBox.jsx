import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import '../../App.css';

function WhyBox({ title }) {
  return (
    <div style={styles.container} className="green-border-hover">
      <p style={styles.title} className="lufga-font">
        {title}
      </p>
     
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    border: '2px solid #000',
    borderRightWidth: '2px',
    padding: '0.3em 1em',
    margin: '1em 1em',
    width: '100vw',
    height:'15vh',
    
  },
  title: {
    fontSize: '0.8em',
    color: '#000',
    margin: 0,
  },
  horizontalLine: {
    width: '10em',
    margin: '1em',
  },
  icon: {
    width: '2em',
    height: '2em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #01C2C7',
    borderRadius: '50%',
  },
};

export default WhyBox;

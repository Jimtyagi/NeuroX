import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import '../../App.css';

function ServiceBox({ title }) {
  return (
    <div style={styles.container} className="green-border-hover">
      <p style={styles.title} className="lufga-font">
        {title}
      </p>
      <hr style={styles.horizontalLine} />
      <span style={styles.icon}>
        {' '}
        <FaAngleDoubleRight style={{ color: '#fff' }} />{' '}
      </span>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    border: '2px solid #fff',
    borderRightWidth: '0px',
    padding: '3em 1em',
    margin: '1em 0',
    width: '40vw',
  },
  title: {
    fontSize: '2em',
    color: '#fff',
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

export default ServiceBox;

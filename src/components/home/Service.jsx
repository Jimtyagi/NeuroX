import React from 'react';
import ServiceBox from './ServiceBox';

function Service() {
  return (
    <div style={styles.container} className="service-background">
      <div style={styles.leftSection}>
        <p style={{ ...styles.heading, lineHeight: '0.5em' }}>Our</p>
        <p style={styles.heading}>Services</p>

        <p style={{ textAlign: 'left', color: '#fff' }}>
          Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet, Lorem Ipsum
          dolor sit amet, Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit
          amet, Lorem Ipsum dolor sit amet, Lorem Ipsum dolor sit amet, Lorem
          Ipsum dolor sit amet,
        </p>
      </div>
      <div style={styles.rightSection}>
        <ServiceBox title="Diagnostic" />
        <ServiceBox title="Predictory" />
        <ServiceBox title="Prognostic" />
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '10em 0',
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxWidth: '30em',
    marginLeft: '5em',
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  heading: {
    fontSize: '4em',
    textAlign: 'left',
    fontWeight: 'bold',
    margin: 0,
    color: '#00FAAD',
  },
};
export default Service;

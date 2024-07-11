import React from 'react';
import ReactDOM from 'react-dom';

const Box = () => {
  const boxStyle = {
    backgroundColor: '#333',
    color: '#0f0',
    padding: '20px',
    textAlign: 'center',
    position: 'relative',
    border: '2px solid #0f0',
    display: 'inline-block'
  };

  const arrowStyle = {
    content: '',
    position: 'absolute',
    left: '50%',
    bottom: '-10px',
    transform: 'translateX(-50%)',
    width: '0',
    height: '0',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: '10px solid #0f0'
  };

  return (
    <div style={boxStyle}>
      Safety
      <div style={arrowStyle}></div>
    </div>
  );
};


export default Box;

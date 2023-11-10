import React from 'react';
import ColorPicker from './Components/colorPicker';
import './Components/style.css'

const App = () => {
  const colors = [
    '#fe0100', '#03ff00', '#0000fe', '#ffff00', '#ff00fe',
    '#03ffff', '#fea500', '#81017f', '#ffc1cb', '#008001', '#fe6346',
    '#00ced1', '#8b4512', '#ff8b00', '#4682b4', '#fed703'
  ];

  return (
    <div className="app-container">
      <h1 className="app-heading">Color Picker</h1>
      <div className="color-picker-container">
        <ColorPicker colors={colors} />
      </div>
    </div>
  );
};

export default App;
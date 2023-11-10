import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div>
      <div style={{ backgroundColor: '#ffc1cb', padding: '10px', borderRadius: '5px', marginTop: '10px'}}>
        <button
          style={{
            backgroundColor: 'seagreen',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            fontWeight:'bold',
            cursor: 'pointer',
          }}
          onClick={handleButtonClick}
        >
          Pick a color
        </button>
        {showColorList && (
          <div>
            {colors.map((color, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: color,
                  width: '45px', 
                  height: '45px',
                  display: 'inline-block',
                  margin: '5px',
                  cursor: 'pointer',
                  border: '1px solid black',
                  boxShadow: '2px 2px',
                }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}
        {selectedColor && <div>Selected color: {selectedColor}</div>}
      </div>
    </div>
  );
};

export default ColorPicker;
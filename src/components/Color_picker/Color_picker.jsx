import React, { useEffect, useState } from 'react';
import { HexColorPicker } from 'react-colorful';



function ColorPickerComponent({toChangeColor}) {
    const [color, setColor] = useState("#aabbcc");
    useEffect(( ) =>{
        toChangeColor(color)
    },[color])
    
    return (
        <div>
            <HexColorPicker color={color} onChange={setColor} style={{height:'7em' , width:'7em'}}/>
            <p>Selected Color: {color}</p>
        </div>
    );
}

export default ColorPickerComponent;

import axios from 'axios';
import { useEffect, useState } from 'react';
import ColorPickerComponent from '../Color_picker/Color_picker';
import "./manipulation_.css"
import "@fontsource/open-sans";
import loadFonts from '../fontFile/fontFile'

loadFonts();
function Manipulate({colorChanger,size,Change_family}){
   
    
    const [listFonts,setListFonts] = useState([]);

    async function fonts(){
        const dummyList = [];
        const response = await axios.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDbUQ4d1YuKAGfIPhxESIC_KibF4Ybxklc');
            response.data.items.map((item) => dummyList.push({ family:item.family,
                                                               files:item.files.regular
                                                             })
                                    );
        setListFonts(dummyList);
        
    }
   
    useEffect(() => {
        fonts();
         // Call fonts only on initial render
      }, []);
   
    return(
            <div className='EditingOptions'>
                    <div className="siblings">
                            <p>Fonts</p><br />
                            <select name="font" id="" >
                                {listFonts.map((item,index) =><option key={index} 
                                                                      style={{fontFamily:item.family}} 
                                                                      onClick={()=>{
                                                                        Change_family(item.family)
                                                                      }} >{item.family}</option>
                                                                )}
                            </select>
                    </div>
                    <div className="siblings">
                                <p>Color Selector</p>
                                <ColorPickerComponent toChangeColor={colorChanger}/>
                    </div>
                    <div style={{marginRight:"20px"}}>
                        <label htmlFor="number">Size:</label>
                        <input type="number" onChange={(event) => {
                            if(event.target.value>=0)
                                size(event.target.value)}}/>
                    </div>
            </div>
)
}
export default Manipulate
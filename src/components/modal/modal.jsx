import "./modal.css"
import { useState } from "react";
function Modal({finished,textAdder}){
    const [text,setText] = useState("");

    return(
        <div className="modal_overlay">
            <div className="actual_text">
                <form action="">
                    <label htmlFor="text">Enter the text</label><br />
                    <textarea name="" id="text" onChange={(e)=>{
                            if(e.target.value!='')
                                setText(e.target.value);
                    }}></textarea>
                </form>
                <button onClick={()=>{
                    finished(false);
                    if(text!='')
                       textAdder(text);
                    console.log("hello")
                }}>SUBMIT</button>
            </div>
        </div>
    )
}
export default Modal
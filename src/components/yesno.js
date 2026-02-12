import { useState, useRef } from "react";
import "./yesno.css";

function Yesno({ onYes }){
    const [noPosition, setNoPosition] = useState({top: 0, left: 0});
    const [hasMoved, setHasMoved] = useState(false);
    const containerRef = useRef(null);

    const moveNoButton = () => {
        const container = containerRef.current;
        const buttonWidth = 130;
        const buttonHeight = 50;

        const maxX= container.clientWidth- buttonWidth;
        const maxY= container.clientHeight- buttonHeight;
        
        const randomX = Math.random()* maxX;
        const randomY = Math.random()* maxY; 

        setHasMoved(true);
        setNoPosition({
            left: randomX, top: randomY
        });
    };

    return(
        
        <div className="yesno-wrapper">
            <div className="dark-container" ref={containerRef}>
            <h1 className="yesno-question">
            Will you be my Valentine baby?
            </h1>
            
                <div className="button-row">
                <button className="yes-btn" onClick={onYes}>YES </button>
                <button
                className={`no-btn ${hasMoved ? "absolute": ""}`}
                onMouseEnter={moveNoButton}
                style={hasMoved ?{
                    position:"absolute",
                    left: noPosition.left,
                    top: noPosition.top} : {}
                }
                    > NO </button>
                </div>
            </div>
        </div>
            
 
    );
}

export default Yesno;
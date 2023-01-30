import React, { useEffect } from "react"
import Button from "./common/Button"
import svg from "./common/svgs"
import "./ColorControl.css"

function ColorControl() {
  let input, inputWrapper, body
  const colorThreshold = 65

  function hexToHSL(hex, set) {
    if (hex.length === 3) {
      hex = hex.charAt(0) + hex.charAt(0) + hex.charAt(1) + hex.charAt(1) + hex.charAt(2) + hex.charAt(2)
    }

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    s = s*100;
    s = Math.round(s);
    l = l*100;
    l = Math.round(l);
    h = Math.round(360*h);

    if (set === "true") {
      document.querySelector('body').style.setProperty('--main-color', h + ', ' + s + '%')
      document.querySelector('body').style.setProperty('--l', l + '%')

      if (l > colorThreshold ) {
        body.classList.add('light');
      }
      else {
        body.classList.remove('light');
      }
    }

    return l;
  }

  function testColor(input) {
    const hexColor = /([0-9a-f]{3}){1,2}$/i;

    if (hexColor.test(input) && (input.length === 3 || input.length === 6)) {
      return true;
    }
  }

  function checkColor(set) {
    let value = input.value

    if (testColor(value)) {
      inputWrapper.classList.add('custom')
      inputWrapper.style.setProperty('--color-input-background', '#' + value);
      (set === "true") ? hexToHSL(value, "true") : hexToHSL(value);
      (hexToHSL(value) > colorThreshold) ? inputWrapper.classList.remove('light') : inputWrapper.classList.add('light');
    }
    else {
      inputWrapper.classList.remove('custom')
      inputWrapper.style.removeProperty('--color-input-background')
    }
  }

  function modeClick() {

    body.classList.toggle('night-mode')

    removeCustomColor()
      
    if (parseFloat(window.getComputedStyle(body).getPropertyValue('--l')) > colorThreshold ) {
      body.classList.add('light');
    }
    else {
      body.classList.remove('light');
    }

    checkColor();
  }

  function removeCustomColor() {
    body.style.removeProperty('--main-color');
    body.style.removeProperty('--l');
  }

  useEffect(() => {
    inputWrapper = document.querySelector('.color-input')
    input = document.querySelector('#color')
    body = document.querySelector("body")
    
    input.addEventListener('keyup', checkColor)
    input.addEventListener("keyup", ({key}) => {
      if (key === "Enter") {
        checkColor("true")
      }
    })
  }, []);
  
  return(
    <>
      <div className="mode-toggle">
        <Button char="Mode" display={svg.sunMoon} onClick={modeClick}/>
      </div>
      <div className="color-input">
          <label>HEX: #</label>
          <input id="color" type="text" className="input-box" placeholder="123456" pattern="[a-fA-F\d]+" maxLength="6" spellCheck="false" />
      </div>
    </>
  )
}
export default ColorControl;
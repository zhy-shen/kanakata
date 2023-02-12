import React, { useEffect } from "react"
import Button from "./common/Button"
import svg from "./common/svgs"
import "./ColorControl.css"

let input, inputWrapper, body;

function ColorControl() {
  const colorThreshold = 65;
  const [originalColor, setOriginalColor] = React.useState(123456);
  const [color, setColor] = React.useState('');

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

    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    s = s * 100;
    s = Math.round(s);
    l = l * 100;
    l = Math.round(l);
    h = Math.round(360 * h);

    if (set === "true") {
      document.querySelector('body').style.setProperty('--main-color', h + ', ' + s + '%')
      document.querySelector('body').style.setProperty('--l', l + '%')
      setColor('');

      if (l > colorThreshold) {
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

  function checkColor(set, setColor) {
    let value = setColor || color;

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

    setOriginalColor(hslToHex(window.getComputedStyle(body).getPropertyValue('--button-color')));
  }

  function modeClick() {
    body.classList.toggle('night-mode');
    setOriginalColor(hslToHex(window.getComputedStyle(body).getPropertyValue('--button-color')));
    removeCustomColor();

    if (parseFloat(window.getComputedStyle(body).getPropertyValue('--l')) > colorThreshold) {
      body.classList.add('light');
    }
    else {
      body.classList.remove('light');
    }

    checkColor("false");
  }

  function removeCustomColor() {
    body.style.removeProperty('--main-color');
    body.style.removeProperty('--l');
  }

  function hslToHex(color) {
    const regexp = /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/g;
    const res = regexp.exec(color).slice(1);

    let h = res[0];
    let s = res[1].slice(0, -1);
    let l = res[2].slice(0, -1);

    l /= 100;

    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const calcColor = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * calcColor).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `${f(0)}${f(8)}${f(4)}`;
  }

  function reselect() {
    inputWrapper = document.querySelector('.color-input');
    input = document.querySelector('#color');
    body = document.querySelector("body");
  }

  function handleColor(e) {
    setColor(e.target.value);
    
    if(e.nativeEvent.inputType === "insertLineBreak" || e.key === "Enter") {
      checkColor("true");
      return
    };

    checkColor("false", e.target.value);
  }

  useEffect(() => {
    reselect();
    setOriginalColor(hslToHex(window.getComputedStyle(body).getPropertyValue('--button-color')));
  }, []);

  return (
    <div className="color-control">
      <div className="mode-toggle">
        <Button char="Mode" display={svg.sunMoon} onClick={modeClick} />
      </div>
      <div className="color-input">
        <label>HEX: #</label>
        <input
          id="color"
          type="text"
          enterKeyHint="done"
          className="input-box"
          autocomplete="off"
          placeholder={originalColor}
          value={color}
          onChange={e => handleColor(e)}
          onKeyDown={e => handleColor(e)}
          pattern="[a-fA-F\d]+"
          maxLength="6"
          spellCheck="false" />
      </div>
    </div>
  )
}
export default ColorControl;
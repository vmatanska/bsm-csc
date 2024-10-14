/*export function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }*/

  export function hexToRgba(hex, dimRatio) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")

    console.log('function hexToRgba: hex = ', hex);
    console.log('function hexToRgba: dimRatio = ', dimRatio);

    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    console.log('function hexToRgba: hex AFTER= ', hex);

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    console.log(
      "(parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16), (dimRatio/100))===", 
      "rgba(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + "," + (dimRatio/100) + ")"
      );

    return result ? "rgba(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + "," + (dimRatio/100) + ")" : null;
  }

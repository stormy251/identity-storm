import React from 'react';

/*
  The use of dangerouslySetInnerHTML is because when setting the font-family
  the quote will be escaped in the render function and will result in the
  fonts not being correctly loaded in.
*/
export const GLOBAL_STYLES = (
  <style dangerouslySetInnerHTML={{__html: `
    /* Import Fonts */
    @font-face {
      font-family: 'Proxima Nova';
      font-style: normal;
      font-weight: normal;
      src: url('static/fonts/proxima-nova-regular.woff') format('woff');
    }
  
    @font-face {
      font-family: 'Proxima Nova';
      font-weight: bold;
      src: url('static/fonts/proxima-nova-semibold.woff') format('woff');
    }
    
    html {
      font-size: 16px; /* This is setting the main value for 1rem */
    }
  
    body {
      font-family: 'Proxima Nova', Helvetica, sans-serif;
      margin: 0;
    }
  `}}/>
);

import React from 'react';

/*
  The use of dangerouslySetInnerHTML is because when setting the font-family
  the quote will be escaped in the render function and will result in the
  fonts not being correctly loaded in.
*/
export const GLOBAL_STYLES = (
  <style dangerouslySetInnerHTML={{__html: `
    @font-face {
      font-family: 'Roboto';
      font-weight: normal;
      src: url('/static/fonts/Roboto-Regular.ttf') format('ttf');
    }
    
    @font-face {
      font-family: 'Roboto';
      font-weight: lighter;
      src: url('/static/fonts/Roboto-Light.ttf') format('ttf');
    }
    
    @font-face {
      font-family: 'Roboto';
      font-weight: bold;
      src: url('/static/fonts/Roboto-Bold.ttf') format('ttf');
    }
    
    html {
      font-size: 16px
    }
    
    body {
      margin: 0;
      font-family: 'Roboto', Helvetica, sans-serif;
      line-height: 1.3;
    }
  `}}/>
);

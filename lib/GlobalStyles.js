import React from 'react';

export const GLOBAL_STYLES = (
  <style jsx global>{`
    @font-face {
      font-family: 'Roboto';
      font-weight: normal;
      src: url('/static/fonts/Roboto-Regular.ttf');
    }
    
    @font-face {
      font-family: 'Roboto';
      font-weight: lighter;
      src: url('/static/fonts/Roboto-Light.ttf');
    }
    
    @font-face {
      font-family: 'Roboto';
      font-weight: bold;
      src: url('/static/fonts/Roboto-Bold.ttf');
    }
    
    html {
      font-size: 16px;
    }
    
    body {
      font-family: 'Roboto';
      margin: 0;
    }
  `}</style>
);

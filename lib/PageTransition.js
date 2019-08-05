import React from 'react';

export const ROUTE_TRANSITION_DURATION = 300;

export const PAGE_TRANSITION = (
  <style>{`
    .page {
      height: 100vh;
    }
    .page-transition-enter {
      opacity: 0;
      transform: scale(0.95);
    }
    .page-transition-enter-active {
      opacity: 1;
      transform: scale(1);
      transition: opacity ${ROUTE_TRANSITION_DURATION}ms, transform ${ROUTE_TRANSITION_DURATION}ms;
    }
    .page-transition-exit {
      opacity: 1;
      transform: scale(1);
    }
    .page-transition-exit-active {
      opacity: 0;
      transform: scale(0.95);
      transition: opacity ${ROUTE_TRANSITION_DURATION}ms, transform ${ROUTE_TRANSITION_DURATION}ms;
    }
    .loading-indicator-appear,
    .loading-indicator-enter {
      opacity: 0;
    }
    .loading-indicator-appear-active,
    .loading-indicator-enter-active {
      opacity: 1;
      transition: opacity ${ROUTE_TRANSITION_DURATION}ms;
    }
  `}</style>
);

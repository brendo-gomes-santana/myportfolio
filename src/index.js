import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Page';
import BaseProvider from './Contexts';
import GlobalStyle from './globalStyled';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <BaseProvider>
      <GlobalStyle />
      <Home />
    </BaseProvider>
  </>

);


import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { AllDiv, 
         HeaderDiv,
         ButtonDiv } from './styled';

let login = false;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AllDiv>
      <HeaderDiv>
        <ButtonDiv $buttonWidth={60} $buttonHeight={30}>LOGIN</ButtonDiv>
        <h1>Land of Adventures</h1>
        <ButtonDiv $buttonWidth={104} $buttonHeight={40}>CHARACTER MANAGER</ButtonDiv>
      </HeaderDiv>
    </AllDiv>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

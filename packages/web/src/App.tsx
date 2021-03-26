import React from 'react';
import { Button } from './components/Button';
import { RiSendPlaneFill } from 'react-icons/ri';

import { AppContainer, GlobalStyle } from './styles/global';

function App() {
  return (
    <AppContainer>
      <Button>
        <RiSendPlaneFill size={24} />
      </Button>
      <GlobalStyle />
    </AppContainer>
  );
}

export default App;

import React, { useState } from 'react';
import AppContext from './ContextAPI';

function Provider({ children }) {
  const [language, setLanguage] = useState('english');

  const context = {
    language, setLanguage,
  };
  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  );
};

export default Provider;
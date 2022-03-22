import React, { useState } from 'react';
import AppContext from './ContextAPI';

function Provider({ children }) {
  const languages = ['english', 'portuguese'];
  const [language, setLanguage] = useState(languages[0]);

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
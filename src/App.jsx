import ThemeProvider from 'context';
import Home from './pages/Home';
import React from 'react';

function App() {
  return (
   <React.Fragment>
    <ThemeProvider>
    <Home/>
    </ThemeProvider>

   </React.Fragment>
  );
}

export default App;

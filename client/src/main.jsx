// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter as Router } from 'react-router-dom'
// import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
// import App from "./App"
// import './index.css'
// import { StateContextProvider } from './context'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//     <ThirdwebProvider  desiredChainId={Sepolia} activeChain={Sepolia} >
//         <Router>
//          <StateContextProvider>            {/*wrap app in this to be able to use our contracts and all of its functions */}
//             <App/>
//           </StateContextProvider> 
//         </Router>
//     </ThirdwebProvider>
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { Sepolia } from "@thirdweb-dev/chains";

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider 
  desiredChainId={Sepolia}
  activeChain={Sepolia}
  // for the next version of thirdweb we have to register an API through: https://thirdweb.com/dashboard/settings/api-keys
  // clientId="your-client-id"
  > 
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NeonTransferApp from './neon-transfer-app';
import reportWebVitals from './reportWebVitals';
import { ErrorBoundary } from "react-error-boundary";

import { WalletProvider } from '@solana/wallet-adapter-react';
import { useSolanaWallet } from './useSolanaWallet';

import App from './App';

/*const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const { wallets } = useSolanaWallet();

root.render(
  <React.StrictMode>
    <WalletProvider wallets={wallets}>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
        <NeonTransferApp />
      </ErrorBoundary>
    </WalletProvider>
  </React.StrictMode>
);*/
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode><App /></React.StrictMode>);

reportWebVitals();

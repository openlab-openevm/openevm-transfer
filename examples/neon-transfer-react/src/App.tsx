import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { useSolanaWallet } from './useSolanaWallet'; // 替换为你自己的路径
import NeonTransferApp from './neon-transfer-app';
const ErrorFallback = () => (
  <div role="alert">
    <h2>Something went wrong.</h2>
    <p>Please refresh the page or try again later.</p>
  </div>
);

const handleError = (error: Error, info: React.ErrorInfo) => {
  console.error("Error caught by boundary:", error, info.componentStack ?? "No stack trace available");
};


const App: React.FC = () => {
  const { wallets } = useSolanaWallet(); // ✅ 正确：在组件内使用 Hook

  return (
    <WalletProvider wallets={wallets} autoConnect>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
        <NeonTransferApp />
      </ErrorBoundary>
    </WalletProvider>
  );
};

export default App;
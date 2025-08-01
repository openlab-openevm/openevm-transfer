import { useMemo } from 'react';
//import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { OpenWalletWalletAdapter } from "./OpenWalletWalletAdapter"

const useSolanaWallet = () => {
  const wallets = useMemo(() => [new OpenWalletWalletAdapter()], []);
  return { wallets };
};

export { useSolanaWallet };

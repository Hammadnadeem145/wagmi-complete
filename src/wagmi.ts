import { bsc } from "viem/chains";
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

const { publicClient, webSocketPublicClient } = configureChains(
  [bsc],
  [
    publicProvider(),
    jsonRpcProvider({
      rpc: () => ({
        http: `https://bsc-dataseed1.binance.org/`,
      }),
    }),
  ]
);

export const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [
    new InjectedConnector(),
    new WalletConnectConnector({
      options: {
        projectId: "25727eee09560ceaebd6ed8bc629aaa1",
      },
    }),
    new CoinbaseWalletConnector({
      options: {
        appName: 'wagmi.sh',
        jsonRpcUrl: 'https://bsc-dataseed1.binance.org/',
      },
    }),
    new MetaMaskConnector()
  ],
});

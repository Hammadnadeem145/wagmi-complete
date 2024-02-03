import { useAccount, useConnect, useDisconnect } from 'wagmi'

export default function Home() {
  const { address, isConnected, } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  // console.log(connectors)
  return (
    <>
      <div>
        <button onClick={() => connect(
          { connector: connectors && connectors[0] }
        )}>Connect</button>
        <button onClick={() => connect(
          { connector: connectors && connectors[1] }
        )}>Connect wallet connect</button>
        <button onClick={() => connect(
          { connector: connectors && connectors[2] }
        )}>Connect coinbase</button>
        <button onClick={() => connect(
          { connector: connectors && connectors[3] }
        )}>Connect Metamask</button>
        <button onClick={() => disconnect()}>Disconnect</button>
        <p>{isConnected && address}</p>
      </div>
    </>
  );
}

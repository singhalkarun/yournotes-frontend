import { useWallet } from '@context/wallet.context'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'

const ConnectWalletButton = () => {
  const {
    connectMetamask,
    connectWalletconnect,
    isWalletConnected,
    walletAddress,
    killSession,
  } = useWallet()

  const copyWalletAddress = async () => {
    await navigator.clipboard.writeText(walletAddress ? walletAddress : '')
    toast('Copied', { position: 'bottom-right', duration: 1000 })
  }

  return (
    <div>
      <label
        htmlFor='connect-wallet-modal'
        className='btn btn-outline btn-primary'
      >
        {isWalletConnected === false ? (
          <>Connect Wallet</>
        ) : (
          <div>{`${walletAddress?.slice(0, 5)}...${walletAddress?.slice(
            -5
          )}`}</div>
        )}
      </label>
      <input
        type='checkbox'
        id='connect-wallet-modal'
        className='modal-toggle'
      />
      <label htmlFor='connect-wallet-modal' className='cursor-pointer modal'>
        <label className='modal-box w-fit' htmlFor=''>
          {isWalletConnected === false ? (
            <>
              {' '}
              <h1 className='mb-4 text-2xl font-bold'>Connect Using</h1>
              <div>
                <button
                  className='w-full p-4 m-1 btn btn-primary'
                  onClick={() => connectMetamask()}
                >
                  Metamask
                </button>
              </div>
              <div>
                <button
                  className='w-full p-4 m-1 btn btn-primary'
                  onClick={() => connectWalletconnect()}
                >
                  WalletConnect
                </button>
              </div>
            </>
          ) : (
            <>
              <div>
                <h1 className='mb-4 text-lg font-bold'>Connected Wallet</h1>
              </div>
              <div className='mb-2'>
                Wallet Address: <br />
              </div>
              <button
                className='mb-8 btn btn-info'
                onClick={() => copyWalletAddress()}
              >
                <p className='hidden md:inline'>{walletAddress}</p>
                <p className='md:hidden'>{`${walletAddress?.slice(
                  0,
                  10
                )}...${walletAddress?.slice(-10)}`}</p>
              </button>
              <div className='flex justify-end'>
                <button
                  className='btn btn-outline btn-error'
                  onClick={() => killSession()}
                >
                  Disconnect
                </button>
              </div>
            </>
          )}
        </label>
      </label>
    </div>
  )
}

export default ConnectWalletButton

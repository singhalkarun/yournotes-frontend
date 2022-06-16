import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WalletProvider } from '../src/context/wallet.context'
import { NotesProvider } from '@modules/notes/hooks/notes.context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletProvider>
      <NotesProvider>
        <Component {...pageProps} />
      </NotesProvider>
    </WalletProvider>
  )
}

export default MyApp

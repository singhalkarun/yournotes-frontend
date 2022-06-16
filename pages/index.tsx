import Navbar from '@common/components/Navbar'
import { useWallet } from '@context/wallet.context'
import AddNoteWidget from '@modules/notes/components/AddNoteWidget'
import ViewNotesWidget from '@modules/notes/components/ViewNotesWidget'
import useNotes from '@modules/notes/hooks/notes.context'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

const Home: NextPage = () => {
  const { isWalletConnected } = useWallet()

  return (
    <div>
      <Navbar />
      <Toaster />
      {isWalletConnected ? (
        <>
          <AddNoteWidget />
          <ViewNotesWidget />
        </>
      ) : null}
    </div>
  )
}

export default Home

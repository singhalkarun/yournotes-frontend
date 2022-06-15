import Navbar from '@common/components/Navbar'
import { useWallet } from '@context/wallet.context'
import useNotes from '@modules/notes/hooks/useNotes'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Toaster />
    </>
  )
}

export default Home

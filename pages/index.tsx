import Navbar from '@common/components/Navbar'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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

import ConnectWalletButton from "@modules/auth/components/ConnectWalletButton"
import Image from 'next/image'

import Notepad from '@public/images/notepad.svg'

const Hero = () => {
    return (<div className="min-h-screen hero bg-base-200">
    <div className="flex-col hero-content lg:flex-row-reverse">
      <Image className="max-w-sm rounded-lg shadow-2xl" src={Notepad} />
      <div>
        <h1 className="text-5xl font-bold">Save Your Notes!</h1>
        <p className="py-6 text-2xl">An application that allows you to save your notes on chain which you can access anytime anywhere just by connecting your wallet.</p>
        
          <ConnectWalletButton />
      </div>
    </div>
  </div>)
}

export default Hero
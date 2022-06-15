import { useState } from 'react'
import YourNotesContract from '@contracts/YourNotes.json'
import { useWallet } from '@context/wallet.context'
import { ethers } from 'ethers'

const useNotes = () => {
  const { provider } = useWallet()

  const YourNotesContractAbi = YourNotesContract.abi
  const contractAddress = '0x70f0203CD7f4c8B42Acc55033Ccd3aCCb47A87E3'

  const [notes, setNotes] = useState([])

  const getContract = () => {
    const signer = provider?.getSigner()
    // try to figure out the expected parameters
    const contract = new ethers.Contract(
      contractAddress,
      YourNotesContractAbi,
      signer
    )
    return contract
  }

  const addNote = async (note: string) => {
    try {
      const contract = getContract()
      // try to figure out the expected method
      const tx = await contract.addNote(note)

      const response = await tx.wait()

      getNotes()
    } catch (error) {
      console.log(error)
    }
  }

  const deleteNote = async (id: number) => {
    const contract = getContract()

    const tx = await contract.deleteNote(id)

    const response = await tx.wait()

    getNotes()

    try {
    } catch (error) {}
  }

  const getNotes = async () => {
    const contract = getContract()

    const existingNotes = await contract.getNotes()

    if (notes) {
      setNotes(existingNotes)
    }
  }

  return {
    addNote,
    deleteNote,
    getNotes,
    notes,
  }
}

export default useNotes

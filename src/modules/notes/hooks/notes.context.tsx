import { Context, createContext, useContext, useEffect, useState } from 'react'
import YourNotesContract from '@contracts/YourNotes.json'
import { useWallet } from '@context/wallet.context'
import { ethers } from 'ethers'
import toast from 'react-hot-toast'

interface NotesContextInterface {
  addNote: Function
  deleteNote: Function
  getNotes: Function
  notes: Array<any>
}

interface Props {
  children: any
}

const NotesContext: Context<NotesContextInterface | null> =
  createContext<NotesContextInterface | null>(null)

export const NotesProvider = ({ children }: Props) => {
  const { provider, isWalletConnected } = useWallet()

  const YourNotesContractAbi = YourNotesContract.abi
  const contractAddress = '0x70f0203CD7f4c8B42Acc55033Ccd3aCCb47A87E3'

  const [notes, setNotes] = useState<any[]>([])

  useEffect(() => {
    getNotes()
  }, [])

  useEffect(() => {
    setNotes([])
    getNotes()
  }, [isWalletConnected])

  const getContract = () => {
    const signer = provider?.getSigner()

    console.log('Signer: ', signer)
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
      if (note === '') {
        throw new Error("Note can't be empty")
      }

      const contract = getContract()

      console.log(contract)
      // try to figure out the expected method
      const tx = await contract.addNote(note)

      console.log(tx)

      const response = await tx.wait()

      toast.success('Note added', {
        position: 'bottom-right',
        duration: 1000,
      })

      getNotes()
    } catch (error: any) {
      toast.error(error?.message ? error?.message : 'Something went wrong', {
        position: 'bottom-right',
        duration: 1000,
      })
    }
  }

  const deleteNote = async (id: number) => {
    const contract = getContract()

    const tx = await contract.deleteNote(id)

    const response = await tx.wait()

    getNotes()

    toast.success('Note deleted', {
      position: 'bottom-right',
      duration: 1000,
    })

    try {
    } catch (error) {}
  }

  const getNotes = async () => {
    const contract = getContract()

    const existingNotes = await contract.getNotes()

    const newNotesArr = [...existingNotes]

    console.log(newNotesArr)

    setNotes((notes) => [...newNotesArr])
  }

  return (
    <NotesContext.Provider
      value={{
        addNote,
        deleteNote,
        getNotes,
        notes,
      }}
    >
      {children}
    </NotesContext.Provider>
  )
}

const useNotes = () => {
  const notes = useContext(NotesContext)

  if (!notes) {
    throw new Error(
      'Component must be enclosed by NotesProvider to be able to use NotesContext'
    )
  }

  return notes
}

export default useNotes

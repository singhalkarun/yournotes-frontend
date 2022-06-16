import { useState } from 'react'
import useNotes from '../hooks/notes.context'

const AddNoteWidget = () => {
  const [note, setNote] = useState('')

  const { addNote } = useNotes()

  return (
    <div className='flex justify-center w-full'>
      <input
        type='text'
        placeholder='Enter your note here'
        className='w-4/6 m-2 input input-bordered'
        value={note}
        onChange={(e: any) => {
          setNote(e.target.value)
        }}
      />

      <button
        className='w-1/6 m-2 btn btn-outline'
        onClick={() => addNote(note)}
      >
        Add Note
      </button>
    </div>
  )
}

export default AddNoteWidget

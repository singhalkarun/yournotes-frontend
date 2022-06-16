import { useEffect } from 'react'
import useNotes from '../hooks/notes.context'

const ViewNotesWidget = ({}) => {
  const { notes, deleteNote } = useNotes()

  return (
    notes && (
      <div className='w-full'>
        {notes &&
          notes.map((note: any) => {
            if (note.isDeleted !== true) {
              return (
                <div className='flex justify-center' key={note.id}>
                  <button className='w-4/6 m-2 btn btn-info'>
                    {note.note}
                  </button>
                  <button
                    className='w-1/6 m-2 btn btn-outline btn-error'
                    onClick={() => deleteNote(note.id.toNumber() - 1)}
                  >
                    Delete Note
                  </button>
                </div>
              )
            }
          })}
      </div>
    )
  )
}

export default ViewNotesWidget

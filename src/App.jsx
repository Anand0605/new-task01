import React from 'react'
import './App.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


const App = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [allnote, setAllNote] = useState([])

  // console.log(title)
  // console.log(discription)
  const addNote = () => {

    const newNote = {
      id: uuidv4(),
      title: title,
      description: description,
      isCompleted: false
    }
    setTitle('')
    setDescription('')
    setAllNote([newNote, ...allnote])
  }
  // console.log(allnote)



  return (
    <>

      <form  >
        <input type="text"
          required
          placeholder='Add title'
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
        />
        <textarea
          required
          placeholder='Add Discription'
          value={description}
          onChange={(e) => { setDescription(e.target.value) }}
        />
        <button onClick={addNote} >save</button>
      </form>
      <h1>All Note</h1>

      {
        allnote.map((note) => {
          return <div className="note-card" key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
          </div>
        })
      }
    </>

  )
}

export default App
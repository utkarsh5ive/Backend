import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [notes, setNotes] = useState([])

  function fetchNotes() {
    axios.get('https://backend-pseo.onrender.com/api/notes')
      .then((res) => {
        setNotes(res.data.note)
      })
  }

  useEffect(() => {

    fetchNotes()

  }, [])

  function HandledeleteNotes(noteId) {

    axios.delete('https://backend-pseo.onrender.com/api/notes/' + noteId)
      .then((res) => {
        console.log(res.data)
        fetchNotes()
      })
  }

  //Update

  // function UpdateHandler(noteId){
  //   axios.patch('http://localhost:3000/api/notes/' + noteId)
  //   .then((res)=>{
  //     console.log(res.data)
  //   })
  // }

  function handleSubmit(e) {
    // e.preventDefault();

    const { title, description } = e.target.elements

    console.log(title.value, description.value)

    axios.post('https://backend-pseo.onrender.com/api/notes', {
      title: title.value,
      description: description.value
    })
      .then(res => {
        console.log(res.data)
      })

  }






  return (
    <>

      <form className='note-create-form' onSubmit={handleSubmit} >
        <input name='title' type="text" placeholder='Enter title' />
        <input name='description' type="text" placeholder='Enter decription' />
        <button>Create Note</button>
      </form>


      <div className="notes">
        {
          notes.map((note, index) => (
            <div className="note" key={index}>
              <h1>{note.title}</h1>
              <p>{note.description}</p>
              <button onClick={() => HandledeleteNotes(note._id)}>Delete</button>
              {/* <button onClick={()=> UpdateHandler(note._id)}>Edit</button> */}
            </div>
          ))
        }
      </div>



    </>
  )
}

export default App

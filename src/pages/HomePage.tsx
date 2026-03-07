import { useState } from "react";
import { type Note } from "../components/atoms/StickyNote"
import NavBar from "../components/molecules/NavBar"
import NotesSection from "../components/molecules/NotesSection"

const HomePage = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    
    console.log(notes)

    function handleOnAddNotes(id: string) {
        const newNote: Note = { id: id, note: "" };
        setNotes(prev => [...prev, newNote]);
    }

    function handleOnChangeNote(updatedNote: Note){
        setNotes(prev => prev.map(note => note.id === updatedNote.id ? {...note, note: updatedNote.note} : note))
    }

    return (
        <div>
            <NavBar onAddNotes={handleOnAddNotes} />
            <NotesSection notes={notes} onChangeNote={handleOnChangeNote}/>
        </div>
    )
}

export default HomePage



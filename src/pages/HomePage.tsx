import { useState } from "react";
import { type Note } from "../components/atoms/StickyNote"
import NavBar, { type ColorsType } from "../components/molecules/NavBar"
import NotesSection from "../components/molecules/NotesSection"

const colorsData = [
    { id: 1, color: "#c4b5fd", selected: false },
    { id: 2, color: "#fde047", selected: true },
    { id: 3, color: "#f0abcf", selected: false },
    { id: 4, color: "#93c5fd", selected: false },
    { id: 5, color: "#86efac", selected: false },
    { id: 6, color: "#fdba74", selected: false }
]

const HomePage = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [colors, setColors] = useState<ColorsType[]>(colorsData);

    const selectedBackgroundColor = colors.find(color => color.selected)?.color;
    
    function handleOnAddNotes(id: string) {
        const newNote: Note = { id: id, note: "", backgroundColor: selectedBackgroundColor };
        setNotes(prev => [...prev, newNote]);
    }

    function handleOnChangeNote(updatedNote: Note) {
        setNotes(prev => prev.map(note => note.id === updatedNote.id ? { ...note, note: updatedNote.note } : note))
    }

    function handleCloseButton(id: string) {
        setNotes(prev => prev.filter(note => note.id !== id))
    }
    function handleSelectedColor(id: number) {
        setColors(prev => prev.map(color => color.id === id ? { ...color, selected: true } : { ...color, selected: false }))

    }

    return (
        <div>
            <NavBar onAddNotes={handleOnAddNotes} colors={colors} onSelectColor={handleSelectedColor} />
            <NotesSection notes={notes}
                onChangeNote={handleOnChangeNote}
                onToggleCloseButton={handleCloseButton} />
        </div>
    )
}

export default HomePage



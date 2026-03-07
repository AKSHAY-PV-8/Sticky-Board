import StickyNote, { type Note } from "../atoms/StickyNote"

type NoteSectionPropType = {
    notes: Note[],
    onChangeNote: (note: Note) => void
}


const NotesSection = ({notes, onChangeNote}: NoteSectionPropType) => {

    function handleOnToggleCloseButton() {

    }

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {notes?.map(note => (
                <StickyNote note={note} 
                onToggleCloseButton={handleOnToggleCloseButton} 
                onChangeNote={onChangeNote}
                key={note.id}/>
            ))}
        </div>
    )
}

export default NotesSection

import StickyNote, { type Note } from "../atoms/StickyNote"

type NoteSectionPropType = {
    notes: Note[],
    onChangeNote: (note: Note) => void
    onToggleCloseButton: (id: string) => void
}


const NotesSection = ({ notes, onChangeNote, onToggleCloseButton }: NoteSectionPropType) => {

    return (
        <div className=" m-5 grid sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-5">
            {notes?.map(note => (
                <StickyNote note={note}
                    onToggleCloseButton={onToggleCloseButton}
                    onChangeNote={onChangeNote}
                    key={note.id} />
            ))}
        </div>
    )
}

export default NotesSection

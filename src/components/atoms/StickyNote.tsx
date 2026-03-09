import { useState } from "react";

export type Note = {
    id: string,
    note: string,
    backgroundColor: string | undefined
}

type StickyNotePropType = {
    note: Note,
    onToggleCloseButton: (id: string) => void,
    onChangeNote: (note: Note) => void
}

const StickyNote = ({ note, onToggleCloseButton, onChangeNote }: StickyNotePropType) => {
    const [isCloseButtonToggled, setCloseButtonToggled] = useState<boolean>(false);

    const currentDate = new Date
    const month = currentDate.toLocaleString("en-US", { month: "short" });
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
    const textCount = note.note.length;

    function handleMouseEnter() {
        setCloseButtonToggled(true);
    }

    function handleMouseLeave() {
        setCloseButtonToggled(false);
    }

    function handleUpdatedNote(e: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>) {
        onChangeNote({ id: note.id, note: e.target.value,backgroundColor:note.backgroundColor })
    }



    return (
        <div className={`h-65 rounded-3xl border flex flex-col  justify-center gap-2 p-6 text-[#9aa3b2] hover:scale-101 relative`}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            style={{backgroundColor: note.backgroundColor}}>
            <div className="font-roboto font-bold">{month} {date}, {year}</div>
            <textarea name="" id="" className="focus: outline-none font-caveat text-2xl h-40 text-black"
                placeholder="Type your note here....."
                onChange={handleUpdatedNote}
            />
            <div className="font-roboto font-bold">{textCount}/300</div>

            {isCloseButtonToggled &&
                <button className="absolute top-2 right-4 hover:scale-120 hover:shadow-2xl"
                    onClick={() => onToggleCloseButton(note.id)}>
                    ❌
                </button>}
        </div>

    )
}

export default StickyNote

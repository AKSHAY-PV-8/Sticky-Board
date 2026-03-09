import ColorPalette from "../atoms/ColorPalette";

export type ColorsType = {
    id: number,
    color: string,
    selected: boolean
}

type AddButtonPropType = {
    colors: ColorsType[],
    onAddNotes: (id: string) => void,
    onSelectColor:(id: number) => void
}

const NavBar = ({onSelectColor, colors, onAddNotes }: AddButtonPropType) => {

    return (
        <nav className="bg-white flex justify-between h-17 shadow-2xl items-center">
            <h1 className="text-2xl mx-3 font-bold font-matemasie">
                Sticky Notes
            </h1>
            <div className="flex items-center gap-3 mx-3">
                <ColorPalette onSelectColor={onSelectColor} colors={colors} />
                <button className="border w-13 h-13 rounded-[50%] flex items-center justify-center hover:scale-110 hover:bg-gray-300"
                    onClick={() => onAddNotes(crypto.randomUUID())}>
                    <span className="text-2xl ">➕</span>
                </button>
            </div>
        </nav>
    )
}

export default NavBar

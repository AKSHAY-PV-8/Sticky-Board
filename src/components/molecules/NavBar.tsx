import AddButton from "../atoms/AddButton"
import ColorPalette from "../atoms/ColorPalette"

const NavBar = () => {
    return (
        <nav className="bg-white flex justify-between h-17 shadow-2xl items-center">
            <h1 className="text-2xl mx-3 font-bold font-matemasie">
                Sticky Notes
            </h1>
            <div className="flex items-center gap-3 mx-3">
                <ColorPalette />
                <AddButton />
            </div>
        </nav>
    )
}

export default NavBar

import type { ColorsType } from "../molecules/NavBar"

type ColorPalettePropType = {
  colors: ColorsType[],
  onSelectColor: (id: number) => void
}

const ColorPalette = ({colors, onSelectColor}:ColorPalettePropType) => {
  
  return (
    <div className="bg-[#f4f5f7] rounded-4xl flex items-center gap-2 p-2 h-10 w-fit border-[#e0e3e8] border">
      {colors?.map(color => (
        <div className={`w-6 h-6 rounded-[50%] hover:scale-120 
          ${color.selected? "border-2": "none"}`}
        style={{backgroundColor: color.color}}
          key={color.id}
          onClick={() => onSelectColor(color.id)}>
      
        </div>
      ))}
    </div>
  )
}

export default ColorPalette

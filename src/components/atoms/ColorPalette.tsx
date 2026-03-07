
const ColorPalette = () => {
  const colors = [
    { id: 1, color: "#c4b5fd", selected: false },
    { id: 2, color: "#fde047", selected: true },
    { id: 3, color: "#f0abcf", selected: false },
    { id: 4, color: "#93c5fd", selected: false },
    { id: 5, color: "#86efac", selected: false },
    { id: 6, color: "#fdba74", selected: false }
  ]
  return (
    <div className="bg-[#f4f5f7] rounded-4xl flex items-center gap-2 p-2 h-10 w-fit border-[#e0e3e8] border">
      {colors.map(color => (
        <div className={`w-6 h-6 rounded-[50%] hover:scale-120 
          ${color.selected? "border-2": "none"}`}
        style={{backgroundColor: color.color}}
          key={color.id}>
        </div>
      ))}
    </div>
  )
}

export default ColorPalette

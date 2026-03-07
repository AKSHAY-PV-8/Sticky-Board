import { useState } from "react";

const StickyNote = () => {
    const [isCloseButtonToggled, setCloseButtonToggled] = useState<boolean>(false);
    const currentDate = new Date
    const month = currentDate.toLocaleString("en-US", { month: "short" });
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();

    function handleMouseEnter() {
        setCloseButtonToggled(true)
    }
    function handleMouseLeave() {
        setCloseButtonToggled(false)
    }

    return (
        <div className={`h-65 bg-amber-200 rounded-3xl border flex flex-col  justify-center gap-2 p-6 text-[#9aa3b2] hover:scale-101 `}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="font-roboto font-bold">{month} {date}, {year}</div>
                <textarea name="" id="" className="focus: outline-none font-caveat text-2xl h-40 text-black"
                    placeholder="Type your note here....."></textarea>
                <div className="font-roboto font-bold">0/300</div>

                {isCloseButtonToggled && <button className="absolute top-2 right-4 hover:scale-120 hover:shadow-2xl">❌</button>}
        </div>
        
    )
}

export default StickyNote

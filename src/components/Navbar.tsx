"use client"
import GradualSpacing from "./Magicui/gradualSpacing"

export const Navbar = () => {
    return (
        <>
        <nav className="flex justify-between py-8 px-8 text-[32px] w-full">
            <div className="flex items-center">
                <h1>{GradualSpacing({ text: "EVM Gas Report", duration: 0.5, delayMultiple: 0.04, className: "text-white" })}</h1>
            </div>
            <div className="flex items-center">
                <h4 className="text-sm"> Under Development</h4>
            </div>
        </nav>
        </>
    )
}
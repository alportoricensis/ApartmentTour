// app/Components/Navbar.js
import Link from 'next/link'

export default function Navbar() {
    return (
        <div>
            <div className="flex justify-between h-32 shadow-md p-7 bg-[#1e201e]">
                <h2 className="font-bold text-4xl">3D Apartment Tour</h2>
                <div className="">
                    <Link href="/">Home </Link>
                    |
                    <Link href="/3D_Tour"> 3D Apartment Tour </Link>
                    |
                    <Link href="/360_Photo_Tour"> 360 Photo Tour</Link>
                </div>
            </div>
            <div className="h-4 bg-[#697565] w-full" />
        </div>
    )
}
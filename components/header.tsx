import React from "react"

export default function HeaderComponent() {
	return(
    <div className="w-full p-8 flex justify-between shadow-md fixed">
        <div className="logo">BookStore</div>
        <nav>
            <ul className="flex justify-between gap-8">
                <li>Home</li>
                <li>Categories</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div>
            <ul className="flex justify-between gap-8">
                <li>profile</li>
                <li>cart</li>
            </ul>
        </div>
    </div>
    )
}

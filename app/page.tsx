"use client"
import HeaderComponent from "@/components/header"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Home() {

	return (
		<main className="">
			<HeaderComponent></HeaderComponent>
			{/* <Link href={'/categories'}>Category</Link> */}
		</main>
	)
}

"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HamburgerIcon, HashIcon, SparkleIcon } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { useState } from "react"

export default function Home() {
	const [waitlistEmail, setWaitlistEmail] = useState("")

	const handleSubmit = async () => {
		await fetch(`/api/waitlist?email=${waitlistEmail}`, {
			method: "POST",
		})

	}

	return (
		<main className="flex flex-col space-y-16 py-12 px-6 md:px-12 bg-zinc-50 text-zinc-900">
			{/* Navbar */}
			<nav className="flex justify-between items-center">
				<p className="text-xl font-semibold text-emerald-600">
					Calorie Tracker
				</p>
				<p className="text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer">
					Menu
				</p>
			</nav>

			{/* Hero Section */}
			<section className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">
				<div className="flex flex-col space-y-6 max-w-xl">
					<header className="text-4xl md:text-5xl font-semibold leading-tight">
						Know what you eat, <br />
						<span className="text-emerald-600">love how you feel.</span>
					</header>

					<h3 className="text-zinc-600 text-lg">
						Track your calories, stay on top of your goals, and see real progress.
					</h3>

					<form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
						<Input
							type="email"
							placeholder="Enter your email"
							className="bg-white border-zinc-200"
							required
							value={waitlistEmail}
							onChange={(e) => setWaitlistEmail(e.target.value)}
						/>
						<Button
							className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium"
						>
							Join Waitlist
						</Button>
					</form>
				</div>

				<Image
					className="rounded-2xl shadow-lg"
					src="/pasta.jpg"
					alt="pasta"
					width={500}
					height={500}
				/>
			</section>

			{/* Features */}
			<section className="grid md:grid-cols-3 gap-8">
				{[
					{
						title: "Track Calories",
						desc: "Lorem ipsum dolor sit amet",
						icon: <HamburgerIcon size={28} className="text-emerald-500" />,
						content: ""
					},
					{
						title: "Streak Counter",
						desc: "Lorem ipsum dolor sit amet",
						icon: <HashIcon size={32} className="text-emerald-500" />,
						content: ""
					},
					{
						title: "Get Help from AI",
						desc: "Lorem ipsum dolor sit amet",
						icon: <SparkleIcon size={32} className="text-emerald-500" />,
						content: ""
					},
				].map((item, i) => (
					<Card key={i} className="bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
						<CardHeader>
							<CardTitle className="flex flex-row items-center gap-4">
								{item.icon}
								{item.title}
							</CardTitle>
							<CardDescription className="text-zinc-600">
								{item.desc}
							</CardDescription>
						</CardHeader>
						<CardContent className="text-zinc-500">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							viverra ipsum et dui iaculis, quis lacinia augue gravida.
						</CardContent>
					</Card>
				))}
			</section>
		</main>
	)
}


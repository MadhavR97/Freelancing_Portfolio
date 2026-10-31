import React, { useEffect, useState } from 'react'
import Headline from '../component/Headline'
import About from '../component/About'
import Education from '../component/Education'
import Skills from '../component/Skills'
import Project from '../component/Project'
import Contact from '../component/Contact'
import Footer from '../component/Footer'

function SectionProgress() {
	const [progress, setProgress] = useState(0)
	useEffect(() => {
		const onScroll = () => {
			const scrollTop = window.scrollY
			const docHeight = document.documentElement.scrollHeight - window.innerHeight
			const p = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
			setProgress(p)
		}
		onScroll()
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])
	return (
		<div className='fixed right-6 top-24 bottom-24 hidden md:flex flex-col items-center z-40'>
			<div className='relative h-full w-1 rounded-full bg-white/10 overflow-hidden'>
				<div className='absolute bottom-0 left-0 right-0 bg-[#14b8a6] transition-all duration-200' style={{ height: `${progress}%` }} />
			</div>
		</div>
	)
}

function Luxe() {
	return (
		<div className='min-h-screen bg-[#0a0b0d] text-white'>
			<header className='sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0a0b0d]/60 bg-[#0a0b0d]/80 border-b border-white/5'>
				<div className='max-w-6xl mx-auto px-4 h-14 flex items-center justify-between'>
					<a href='/' className='font-extrabold tracking-tight'>MR.</a>
					<nav className='hidden md:flex items-center gap-6 text-sm text-gray-300'>
						<a href='#home' className='hover:text-white'>Home</a>
						<a href='#about' className='hover:text-white'>About</a>
						<a href='#education' className='hover:text-white'>Education</a>
						<a href='#skills' className='hover:text-white'>Skills</a>
						<a href='#projects' className='hover:text-white'>Projects</a>
						<a href='#contact' className='hover:text-white'>Contact</a>
					</nav>
					<a href='/Madhav_Resume.pdf' className='inline-flex items-center rounded-md bg-[#14b8a6] hover:bg-[#119c8d] focus:ring-4 focus:ring-[#14b8a6]/30 px-3 py-1.5 text-sm font-semibold'>Resume</a>
				</div>
			</header>

			<SectionProgress />

			<section id='home' className='relative'>
				<div className='absolute inset-0 -z-10 overflow-hidden'>
					<div className='pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#14b8a6]/15 blur-3xl'></div>
					<div className='pointer-events-none absolute -bottom-24 right-1/4 h-[420px] w-[640px] rounded-full bg-white/5 blur-3xl'></div>
				</div>
				<div className='max-w-6xl mx-auto px-4 pt-16 pb-10 md:pt-24 md:pb-16 grid md:grid-cols-12 gap-10 items-center'>
					<div className='md:col-span-7'>
						<p className='text-sm text-gray-400'>Portfolio — 2025</p>
						<h1 className='mt-3 text-4xl md:text-6xl font-extrabold tracking-tight'>Building fast, accessible products with a craftsman mindset.</h1>
						<p className='mt-4 text-gray-400 max-w-2xl'>I craft robust, scalable web applications with modern stacks — obsessed with performance, accessibility, and pixel-perfect experiences.</p>
						<div className='mt-6 flex gap-3'>
							<a href='#projects' className='px-4 py-2 text-sm font-semibold rounded-md bg-[#14b8a6] hover:bg-[#119c8d] focus:ring-4 focus:ring-[#14b8a6]/30 text-white'>View Projects</a>
							<a href='mailto:madhavrathod019@gmail.com' className='px-4 py-2 text-sm font-semibold rounded-md border border-white/10 hover:border-white/20'>Contact</a>
						</div>
					</div>
					<div className='md:col-span-5'>
						<Headline />
					</div>
				</div>
			</section>

			<section id='about' className='scroll-mt-16'><About /></section>
			<section id='education' className='scroll-mt-16'><Education /></section>
			<section id='skills' className='scroll-mt-16'><Skills /></section>
			<section id='projects' className='scroll-mt-16'><Project /></section>
			<section id='contact' className='scroll-mt-16'><Contact /></section>
			<Footer />
		</div>
	)
}

export default Luxe

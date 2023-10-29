import Card from '@/components/Card'

export default function Home() {
	return (
		<main
			className='w-full max-w-screen-xl pb-8
		mx-auto grid gap-4 pt-8 md:px-14 lg:px-14
		grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen'
		>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</main>
	)
}

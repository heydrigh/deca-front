import Button from '@/components/Button'
import Card from '@/components/Card'
import { mockPosts } from '@/mocks/home'

export default function Home() {
	return (
		<main className='w-full max-w-screen-xl mx-auto pt-8 md:px-14 lg:px-14'>
			<article
				className='w-full max-w-screen-xl pb-8
		mx-auto grid gap-4 
		grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen'
			>
				{mockPosts.map((post) => (
					<Card key={post.title} {...post} />
				))}
			</article>
			<div className='w-full flex pt-6 border-t justify-end border-zinc-300 mt-2 mb-12'>
				<Button size='large'>Próximo</Button>
			</div>
		</main>
	)
}

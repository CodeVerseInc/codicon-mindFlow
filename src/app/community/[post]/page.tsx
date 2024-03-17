'use client'
import { usePathname } from 'next/navigation'
import { Data } from './Data'

function PostPage() {
	const path = usePathname() //comunnity/{$user}
	const segments = path.split('/')
	const postId = segments[segments.length - 1]

	return (
		<div>
			<Data user={postId} />
		</div>
	)
}

export default PostPage

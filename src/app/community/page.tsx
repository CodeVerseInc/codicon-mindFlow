import { Card } from '@/components'
import { ButtonAddPost } from '@/components'
import { getData } from '@/services'

async function Community() {
  // Fetch posts
  const postsJSON = await getData('https://dummyjson.com/posts')
  const posts = postsJSON.posts // Assuming postsJSON contains an array of posts

  // Fetch user profiles
  const userProfileJSON = await getData('https://dummyjson.com/users')
  const userProfile = userProfileJSON.users // Assuming userProfileJSON contains an array of user profiles

  return (
    <article className=''>
      <h1 className='text-tom-thumb-500 text-center text-3xl font-semibold'>
        Historias
      </h1>
      <p className='text-center'>Historias y relatos de nuestra comunidad</p>

      <section className='flex flex-wrap gap-5 items-center justify-center p-2'>
        {posts.map((post: any) => {
          // Find user profile associated with the post
          const user = userProfile.find((user: any) => user.id === post.userId)

          // Extract firstName and lastName from user profile
          const firstName = user ? user.firstName : ''
          const lastName = user ? user.lastName : ''

          return (
            <Card
              key={post.id}
              title={firstName + ' ' + lastName}
              body={post.body.slice(0, 100) + '...'}
              profilePhoto={
                user ? user.image : 'https://robohash.org/default.png'
              } // Use user's image if available, otherwise use a default image
              url={post.id}
            />
          )
        })}
      </section>
      <ButtonAddPost />
    </article>
  )
}

export default Community

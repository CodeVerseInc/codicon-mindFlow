import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

// Configuration for next-auth
const handler = NextAuth({
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!
		})
	],
	// Custom page login
	pages: {
		signIn: '/auth/signin'
	}
})

export { handler as GET, handler as POST }

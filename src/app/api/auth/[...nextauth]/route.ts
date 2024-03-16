import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

const handler = NextAuth({
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID as String,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as String
		})
	]
})

export { handler as GET, handler as POST }

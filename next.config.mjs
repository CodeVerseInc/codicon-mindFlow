/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			'res.cloudinary.com',
			'lh3.googleusercontent.com',
			'via.placeholder.com',
			'robohash.org'
		]
	}
}

export default nextConfig

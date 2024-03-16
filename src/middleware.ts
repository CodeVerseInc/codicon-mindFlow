// Protect routes that require logging
export { default } from 'next-auth/middleware'

export const config = { matcher: ['/dashboard'] }

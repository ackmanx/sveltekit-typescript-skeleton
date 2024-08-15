import { redirect } from '@sveltejs/kit'

export const load = async function ({ params, cookies }) {
  const username = params.username

  cookies.set('username', username, {
    path: '/',
    sameSite: 'strict',
    maxAge: 31536000,
  })

  redirect(302, '/')
}

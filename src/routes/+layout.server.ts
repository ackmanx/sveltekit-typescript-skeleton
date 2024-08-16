interface ResponseBody {
  error?: string
}

export const load = async ({ cookies }): Promise<ResponseBody> => {
  const username = cookies.get('username')

  if (!username) {
    return {
      error: 'not-logged-in',
    }
  }

  return {}
}

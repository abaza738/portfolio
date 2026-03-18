export default defineEventHandler(async (event) => {
  const { url } = getQuery(event)

  const upstream = await fetch(url as string, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  })

  if (!upstream.ok) {
    throw createError({ statusCode: upstream.status, message: 'Failed to fetch image' })
  }

  const contentType = upstream.headers.get('content-type') || 'image/jpeg'
  setResponseHeader(event, 'Content-Type', contentType)
  setResponseHeader(event, 'Cache-Control', 'public, max-age=86400')

  return sendStream(event, upstream.body!)
})

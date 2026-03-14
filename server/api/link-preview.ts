export default defineEventHandler(async (event) => {
  const { url } = getQuery(event)
  const html = await $fetch<string>(url as string)

  const getMeta = (property: string) => {
    // Matches both attribute orders:
    // <meta property="og:x" content="value">
    // <meta content="value" property="og:x">
    const regex = new RegExp(
      `<meta[^>]+property=["']og:${property}["'][^>]+content=["']([^"']+)["']|` +
        `<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:${property}["']`,
      'i'
    )
    const match = html.match(regex)
    return (
      match?.[1]?.replace(/\?.*$/gi, '') ??
      match?.[2]?.replace(/\?.*$/gi, '') ??
      ''
    )
  }

  return {
    title: getMeta('title'),
    description: getMeta('description'),
    image: getMeta('image')
  }
})

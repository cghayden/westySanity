const localUrl = `http://localhost:3000`
const remoteUrl = `https://westy-remix.vercel.app/`
const baseUrl = window?.location?.hostname === 'localhost' ? localUrl : remoteUrl

export function resolvePageUrl(doc) {
  console.log('doc', doc)
  const urlMap = {
    landingPage: '',
    post: 'blog',
    coffeePage: 'coffee',
    eventsPage: 'events',
    aboutPage: 'about',
    contactPage: 'contact',
  }
  const docType = doc._type

  const url = new URL(baseUrl)
  console.log('url', url)

  url.pathname = urlMap[docType]
  // console.log(url.pathname)

  url.searchParams.set(`preview`, `draft`)

  return url.toString()
}

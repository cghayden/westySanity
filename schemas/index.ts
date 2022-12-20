// document schemas
import coffee from './documents/coffee'
import post from './documents/post'
import event from './documents/event'
import landingPage from './documents/landingPage'
import coffeePage from './documents/coffeePage'
import eventsPage from './documents/eventsPage'
import aboutPage from './documents/aboutPage'
import contactPage from './documents/contactPage'
import order from './documents/order'
import siteSettings from './documents/siteSettings'

// object types
import bodyPortableText from './objects/bodyPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import backgroundImage from './objects/backgroundImage'
import coffeeOrderItem from './objects/coffeeOrderItem'

// Then we give our schema to the builder and provide the result to Sanity

export const schemaTypes = [
  coffee,
  post,
  event,
  landingPage,
  backgroundImage,
  mainImage,
  coffeeOrderItem,
  bodyPortableText,
  excerptPortableText,
  siteSettings,
  coffeePage,
  eventsPage,
  aboutPage,
  contactPage,
  order,
]

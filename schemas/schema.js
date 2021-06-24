// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// document schemas
import coffee from './documents/coffee';
import post from './documents/post';
import event from './documents/event';
import landingPage from './documents/landingPage';
import coffeePage from './documents/coffeePage';
import eventsPage from './documents/eventsPage';
import aboutPage from './documents/aboutPage';
import contactPage from './documents/contactPage';
import order from './documents/order';

// object types
import bodyPortableText from './objects/bodyPortableText';
import excerptPortableText from './objects/excerptPortableText';
import mainImage from './objects/mainImage';
import backgroundImage from './objects/backgroundImage';
import siteSettings from './documents/siteSettings';
import coffeeOrderItem from './objects/coffeeOrderItem';

// Then we give our schema to the builder and provide the result to Sanity

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
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
  ]),
});

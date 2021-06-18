import S from '@sanity/base/structure-builder';

const hiddenIds = [
  'siteSettings',
  'landingPage',
  'coffeePage',
  'eventsPage',
  'aboutPage',
  'contactPage',
];

export default [...S.defaultInitialValueTemplateItems()].filter(
  (item) => !hiddenIds.includes(item.spec.id)
);

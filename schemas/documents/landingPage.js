export default {
  name: 'landingPage',
  type: 'document',
  title: 'Landing Page',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Page Name',
    },
    {
      name: 'bgImage1',
      type: 'backgroundImage',
      title: 'Main image (Optional)',
      description: 'An optional background image at of the top of the page',
    },
    {
      name: 'overlayText1',
      type: 'bodyPortableText',
      title: 'Main Image Overlay Text (optional)',
      description:
        'Optional Text that will overlay the main landing page background image',
    },
    {
      name: 'transitionText1',
      type: 'bodyPortableText',
      title: 'Transition Text Block 1 (optional)',
      description:
        'Optional Text that will separate the main image from the coffee listing section',
    },
    {
      name: 'coffeeSectionHeading',
      title: 'Optional Heading for the coffee section',
      type: 'string',
    },
    {
      name: 'coffeeText',
      type: 'bodyPortableText',
      title: 'Optional Text for the coffee section',
    },

    {
      name: 'closingContent',
      type: 'bodyPortableText',
      title: 'Content for the bottom of the home page',
      description: 'Optional Content at the bottom of the home page',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};

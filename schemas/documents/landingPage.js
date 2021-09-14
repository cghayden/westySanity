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
      name: 'bgImage2',
      type: 'backgroundImage',
      title: 'Background Image of Featured Coffees displayed on home Page',
    },
    {
      name: 'coffeeBackgroundColor',
      title: 'Background Color of coffee section, if no image is uploaded ',
      type: 'color',
    },
    {
      name: 'transitionText2',
      type: 'bodyPortableText',
      title: 'Transition Text Block 2',
      description:
        'Optional Text between background image 2 and background image 3',
    },
    {
      name: 'bgImage3',
      type: 'backgroundImage',
      title: 'Optional Third Background Image',
    },
    {
      name: 'transitionText3',
      type: 'bodyPortableText',
      title: 'Transition Text Block 3',
      description:
        'Optional Text between background image 3 and background image 4',
    },
    {
      name: 'bgImage4',
      type: 'backgroundImage',
      title: 'Optional Background Image at the bottom of the page',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bottomBackgroundColor',
      title: 'Background Color of bottom of homePage, if no image is uploaded ',
      type: 'color',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};

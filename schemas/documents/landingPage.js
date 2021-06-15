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
      title: 'Main image',
    },
    {
      name: 'overlayText1',
      type: 'bodyPortableText',
      title: 'Main Image Overlay Text',
      description:
        'Optional Text that will overlay the main landing page image',
    },
    {
      name: 'text1',
      type: 'bodyPortableText',
      title: 'Text Block 1',
      description:
        'Optional Text that will separate the main image from the coffee listing section',
    },
    {
      name: 'bgImage2',
      type: 'backgroundImage',
      title: 'Background Image after coffee listing',
    },
    {
      name: 'text2',
      type: 'bodyPortableText',
      title: 'Text Block 2',
      description:
        'Optional Text between background image 2 and background image 3',
    },
    {
      name: 'bgImage3',
      type: 'backgroundImage',
      title: 'Optional Third Background Image',
    },
    {
      name: 'text3',
      type: 'bodyPortableText',
      title: 'Text Block 3',
      description:
        'Optional Text between background image 3 and background image 4',
    },
    {
      name: 'bgImage4',
      type: 'backgroundImage',
      title: 'Optional Fourth Background Image',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};

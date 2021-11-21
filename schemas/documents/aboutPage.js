export default {
  name: 'aboutPage',
  type: 'document',
  title: 'About Page',
  fields: [
    {
      name: 'pageName',
      type: 'string',
      title: 'Page Name',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Page Heading',
      description: 'Optional',
    },

    {
      name: 'text',
      type: 'bodyPortableText',
      title: 'Page Introductory Content',
      description: 'Optional',
    },
  ],
  preview: {
    select: {
      title: 'pageName',
    },
  },
};

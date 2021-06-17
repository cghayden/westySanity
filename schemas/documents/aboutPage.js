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
      title: 'Optional Heading for the events page',
      type: 'string',
      description: '(optional)',
    },

    {
      name: 'text',
      type: 'bodyPortableText',
      title: 'About Page Content',
    },
  ],
  preview: {
    select: {
      title: 'pageName',
    },
  },
};

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
      name: 'content',
      type: 'bodyPortableText',
      title: 'About Page Content',
    },
  ],
  preview: {
    select: {
      title: 'pageName',
    },
  },
}

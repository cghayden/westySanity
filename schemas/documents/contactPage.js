export default {
  name: 'contactPage',
  type: 'document',
  title: 'Contact Page',
  fields: [
    {
      name: 'pageName',
      type: 'string',
      title: 'Page Name',
    },
    {
      name: 'heading',
      title: 'Optional Heading for the contact page',
      type: 'string',
      description: '(optional)',
    },

    {
      name: 'content',
      type: 'bodyPortableText',
      title: 'Contact Page Content',
    },
  ],
  preview: {
    select: {
      title: 'pageName',
    },
  },
}

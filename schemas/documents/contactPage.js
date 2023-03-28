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
    {
      name: 'instagramLink',
      type: 'string',
      title: 'Instagram',
    },
    {
      name: 'facebookLink',
      type: 'string',
      title: 'Facebook',
    },
    {
      name: 'twitterLink',
      type: 'string',
      title: 'Twitter',
    },
  ],
  preview: {
    select: {
      title: 'pageName',
    },
  },
}

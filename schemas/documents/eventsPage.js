export default {
  name: 'eventsPage',
  type: 'document',
  title: 'Events Page',
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
      name: 'topText',
      type: 'bodyPortableText',
      title: 'Events Page top text',
      description: '(optional)',
    },
    {
      name: 'bottomText',
      type: 'bodyPortableText',
      title: 'Events Page bottom text',
      description: '(optional)',
    },
  ],
  preview: {
    select: {
      title: 'pageName',
    },
  },
};

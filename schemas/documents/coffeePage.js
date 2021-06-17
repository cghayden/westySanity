export default {
  name: 'coffeePage',
  type: 'document',
  title: 'Coffee Page',
  fields: [
    {
      name: 'pageName',
      type: 'string',
      title: 'Page Name',
    },
    {
      name: 'heading',
      title: 'Heading for the coffee page (optional)',
      type: 'string',
    },
    {
      name: 'topText',
      type: 'bodyPortableText',
      title: 'Text at the top of the coffee page',
      description: '(optional)',
    },
  ],
  preview: {
    select: {
      title: 'pageName',
    },
  },
};

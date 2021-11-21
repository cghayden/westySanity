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
      type: 'string',
      title: 'Page Heading',
      description: 'Optional',
    },
    {
      name: 'topText',
      type: 'bodyPortableText',
      title: 'Text at the top of the coffee page (optional)',
    },
  ],
  preview: {
    select: {
      title: 'pageName',
    },
  },
};

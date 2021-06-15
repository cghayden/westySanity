export default {
  name: 'textBlock',
  type: 'document',
  title: 'Text Blocks',
  fields: [
    {
      name: 'name',
      title: 'name',
      type: 'string',
      description:
        'descriptive name of the text block, used to query from the front end (this will not change)',
      // readOnly: true,
    },
    {
      name: 'heading',
      title: 'heading',
      type: 'string',
      description: 'Heading for the page',
    },
    {
      name: 'content',
      title: 'content',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'A block of text for the page',
    },
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare: ({ name }) => ({
      title: `${name} `,
    }),
  },
};

export default {
  name: 'textBlock',
  type: 'document',
  title: 'Text Block',
  fields: [
    {
      name: 'name',
      title: 'name',
      type: 'string',
      description: 'descriptive name of the text block',
      // readOnly: true,
    },
    {
      name: 'heading',
      title: 'heading',
      type: 'string',
      description: 'Heading for the block',
    },
    {
      name: 'content',
      title: 'content',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'A block of text to be used in the position of name, above',
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

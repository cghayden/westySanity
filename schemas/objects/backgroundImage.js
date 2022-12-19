export default {
  name: 'backgroundImage',
  type: 'image',
  title: 'Background Image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of the picture, for reference purposes only',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessibility.',
      validation: (Rule) => Rule.error('You have to fill out the alternative text.').required(),
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'name',
    },
  },
}

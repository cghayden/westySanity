export default {
  name: 'mainImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Image Caption (optional)',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text, (a concise description of the image)',
      description: 'Important for SEO and accessibility.',
      validation: (Rule) => Rule.error('You have to fill out the alternative text.').required(),
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
}

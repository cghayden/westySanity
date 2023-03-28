export default {
  name: 'siteSettings',
  type: 'document',
  title: 'settings',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'backgroundColor',
      type: 'color',
      title: `Background color for pages if an image is not used.  \n Type in the Hex Value, or choose a color on the palette`,
      options: {
        disableAlpha: true,
      },
    },
    {
      name: 'pageTextColor',
      type: 'color',
      title:
        'Color for the text on page headings and introductions.  This will need to contrast favorably with your chosen background color.  For example, a near black color on a light background, or a near white color on a dark background',
      options: {
        disableAlpha: true,
      },
    },
    {
      name: 'productTileBackgroundColor',
      type: 'color',
      title: 'PRODUCT CARD COLOR: Color of the background on the card for each coffee',
      options: {
        disableAlpha: true,
      },
    },
    {
      name: 'productTileTextColor',
      type: 'color',
      title: 'PRODUCT CARD TEXT COLOR: Color of the background on the card for each coffee',
      options: {
        disableAlpha: true,
      },
    },
    {
      name: 'backgroundImage',
      type: 'backgroundImage',
      title:
        'Background Image for Pages (optional : this will replace any chosen background color)',
    },
  ],
}

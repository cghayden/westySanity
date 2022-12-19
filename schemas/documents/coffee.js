// import PriceInput from '../../components/PriceInput'

import {GiCoffeeBeans} from 'react-icons/gi'
export default {
  name: 'coffee',
  type: 'document',
  title: 'Coffee',
  icon: GiCoffeeBeans,
  // need to set required on price and slug
  fields: [
    {
      name: 'name',
      title: 'Coffee Name',
      type: 'string',
      description: 'Name of the coffee',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL (slug)',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      initialValue: {current: Date.now().toString()},
      options: {
        source: 'name',
        maxLength: 100,
      },
      description:
        'The slug provides a unique URL on the website for this item.  Choose "Generate" to change the default value from a number to a url based on the name of the item.',
    },
    {
      name: 'stock',
      title: 'Stock',
      type: 'number',
      // custom input component
      description: 'Number of pounds in stock',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'roastLevel',
      title: 'Roast Level',
      type: 'string',
      description: 'Roast Level of the Coffee',
      options: {
        list: [
          {title: 'Light', value: 'light'},
          {title: 'Light-Medium', value: 'light-medium'},
          {title: 'Medium', value: 'medium'},
          {title: 'Medium-Dark', value: 'medium-dark'},
          {title: 'Dark', value: 'dark'},
        ], // <-- predefined values
        layout: 'radio', // <-- defaults to 'dropdown'
      },
    },
    {
      name: 'singleOrigin',
      title: 'Single Origin',
      type: 'boolean',
      description: 'Is this Coffee Single Origin?',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'featured',
      title: 'Featured Item?',
      type: 'boolean',
      description: 'A featured item will be displayed on the home page as well as the coffee page',
      options: {
        layout: 'checkbox',
      },
    },

    {
      name: 'description',
      title: 'Short Description',
      type: 'string',
      description: 'A concise description of the coffee to display on the home page tile',
    },
    {
      name: 'descriptionLong',
      title: 'Longer Description',
      type: 'array',
      of: [{type: 'block'}],
      description:
        'A longer, more detailed story about this roast to show on the specific page for this coffee',
    },
    {
      name: 'flavorProfile',
      title: 'Flavor Profile',
      type: 'string',
      description: 'Flavor Profile of the coffee',
    },
    {
      name: 'region',
      title: 'Region',
      type: 'string',
      description: 'Region of the Coffee',
    },
    {
      name: 'grade',
      title: 'Grade',
      type: 'string',
      description: 'Grade of the Coffee',
    },
    {
      name: 'process',
      title: 'Processing',
      type: 'string',
      description: 'How the Coffee was Processed',
    },
    {
      name: 'cultivar',
      title: 'Cultivar',
      type: 'string',
      description: 'Cultivar',
    },
    {
      name: 'elevation',
      title: 'Elevation',
      type: 'string',
      description: 'Elevation',
    },
    {
      name: 'roastDate',
      title: 'Roast Date',
      type: 'date',
      description: 'Day the Coffee was Roasted',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      // custom input component
      // inputComponent: PriceInput,
      description: 'Price of the coffee in cents',
      validation: (Rule) => Rule.min(1000).required(),
    },

    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  orderings: [
    {
      title: 'In Stock',
      name: 'stock',
      by: [{field: 'stock', direction: 'desc'}],
    },
  ],

  preview: {
    select: {
      name: 'name',
      stock: 'stock',
    },
    prepare: ({name, stock}) => ({
      title: name,
      subtitle: `${stock} in stock`,
    }),
  },
}

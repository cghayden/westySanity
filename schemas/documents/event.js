import { MdEventNote } from 'react-icons/md';

export default {
  name: 'event',
  type: 'document',
  title: 'Events',
  icon: MdEventNote,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Descriptive Title, or Name of Event',
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Date of Event',
    },
    {
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description of the Event',
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Event Main Image',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location of the event',
    },
    {
      name: 'addressLine1',
      type: 'string',
      title: 'Address',
    },
    {
      name: 'addressLine2',
      type: 'string',
      title: 'Address Line 2',
    },
    {
      name: 'city',
      type: 'string',
      title: 'City',
    },
    {
      name: 'state',
      type: 'string',
      title: 'State',
    },
    {
      name: 'zipCode',
      type: 'string',
      title: 'Zip Code',
    },
    //   {
    //     name: 'categories',
    //     type: 'array',
    //     title: 'Categories',
    //     of: [
    //       {
    //         type: 'reference',
    //         to: {
    //           type: 'category',
    //         },
    //       },
    //     ],
    //   },
  ],
  orderings: [
    {
      name: 'eventDateAsc',
      title: 'date new–>old',
      by: [
        {
          field: 'date',
          direction: 'asc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
    },
    prepare({ date, title = 'No title' }) {
      return {
        date,
        title,
      };
    },
  },
};

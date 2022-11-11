export default {
  name: 'coffeeOrderItem',
  title: 'Order Item',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Coffee Ordered',
      type: 'string',
    },
    {
      name: 'grind',
      title: 'Grind',
      type: 'string',
    },
    // {
    //   name: 'size',
    //   title: 'Size',
    //   type: 'string',
    // },
    {
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
    },
    {
      name: 'notes',
      title: 'Notes for this item',
      type: 'string',
    },
  ],
  preview: {
    select: {
      quantity: 'quantity',
      // size: 'size',
      name: 'name',
      grind: 'grind',
    },
    prepare: ({ quantity, name, grind }) => ({
      title: `${quantity}  ${name}, ${grind.toUpperCase()}`,
    }),
  },
};

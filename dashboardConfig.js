export default {
  widgets: [
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'Orders',
            value: 'https://orders.sanity.studio',
            category: 'apps',
          },
          {
            title: 'GitHub frontend repo',
            value: 'https://github.com/cghayden/neighborly-gatsby-sanity',
            category: 'Code',
          },
        ],
      },
    },
    {
      name: 'project-users',
    },
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        description:
          'NOTE: Because the websites are static builds, they need to be re-deployed to see the changes when documents are published.',
        sites: [
          {
            title: 'Website',
            apiId: '610ae948-5060-4115-8278-1688d97a2ced',
            buildHookId: '6070a2287e04e5385bd44635',
            name: 'wonderful-benz-3e8c49',
            url: 'https://www.neighborlycoffee.com',
          },
        ],
      },
    },
    // {
    //   name: 'document-list',
    //   options: {
    //     title: 'Last edited documents',
    //     order: '_updatedAt desc',
    //   },
    // },
  ],
};

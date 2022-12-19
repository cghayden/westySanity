import {GoBrowser as PageIcon, GoHome, GoSettings} from 'react-icons/go'
import {GiCoffeeBeans} from 'react-icons/gi'
import {FaFileInvoiceDollar} from 'react-icons/fa'
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'

// import PreviewIFrame from './components/previewIFrame'
// import ColorsPreview from './components/ColorsPreview'

// import Iframe from 'sanity-plugin-iframe-pane'

// import {resolveProductionUrl} from './resolveProductionUrl'

const hiddenDocTypes = (listItem) =>
  ![
    'siteSettings',
    'landingPage',
    'coffeePage',
    'eventsPage',
    'aboutPage',
    'contactPage',
    'coffee',
    'order',
  ].includes(listItem.getId())

const previewViews = ['coffee']

// Here we declare which view panes show up for which schema types
// export const getDefaultDocumentNode = ({schemaType}) => {
//   if (previewViews.includes(schemaType)) {
//     return S.document().views([
//       S.view.form(),
//       S.view
//         .component(Iframe)
//         .options({
//           url: (doc) => resolveProductionUrl(doc),
//           reload: {
//             button: true,
//           },
//         })
//         .title('Preview'),
//     ])
//   }

//   return S.document()
// }

export default (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Pages')
        .icon(PageIcon)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Sitewide Page Settings')
                .icon(GoSettings)
                .child(
                  S.document().schemaType('siteSettings').documentId('siteSettings').views([
                    S.view.form(),
                    // ColorsPreview()
                  ])
                ),
              S.listItem()
                .title('Home Page')
                .icon(GoHome)
                .child(
                  S.document().schemaType('landingPage').documentId('homePage').views([
                    S.view.form(),
                    // PreviewIFrame()
                  ])
                ),
              S.listItem()
                .title('Coffee Page')
                .icon(PageIcon)
                .child(
                  S.document().schemaType('coffeePage').documentId('coffeePage').views([
                    S.view.form(),
                    // PreviewIFrame()
                  ])
                ),
              S.listItem()
                .title('Events Page')
                .icon(PageIcon)
                .child(
                  S.document().schemaType('eventsPage').documentId('eventsPage').views([
                    S.view.form(),
                    // PreviewIFrame()
                  ])
                ),
              S.listItem()
                .title('About Page')
                .icon(PageIcon)
                .child(
                  S.document().schemaType('aboutPage').documentId('aboutPage').views([
                    S.view.form(),
                    // PreviewIFrame()
                  ])
                ),
              S.listItem()
                .title('Contact Page')
                .icon(PageIcon)
                .child(
                  S.document().schemaType('contactPage').documentId('contactPage').views([
                    S.view.form(),
                    // PreviewIFrame()
                  ])
                ),
            ])
        ),
      S.listItem()
        .title('Coffee')
        .icon(GiCoffeeBeans)
        .child(
          S.documentList()
            .title('Coffee')
            .schemaType('coffee')
            .filter('_type == "coffee"')
            .defaultOrdering([{field: 'stock', direction: 'desc'}])
        ),
      S.listItem()
        .title('Orders')
        .icon(FaFileInvoiceDollar)
        .child(
          S.list()
            .title('Orders')
            .items([
              S.listItem()
                .title('Open Orders')
                .icon(FaFileInvoiceDollar)
                .child(
                  S.documentList()
                    .title('Open Orders')
                    .schemaType('order')
                    .filter('_type == "order" && shipped != true')
                    .defaultOrdering([{field: 'orderDate', direction: 'desc'}])
                ),
              S.listItem()
                .title('Filled Orders')
                .icon(IoIosCheckmarkCircleOutline)
                .child(
                  S.documentList()
                    .title('Filled Orders')
                    .schemaType('order')
                    .filter('_type == "order" && shipped == true')
                    .defaultOrdering([{field: 'orderDate', direction: 'asc'}])
                ),
            ])
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])

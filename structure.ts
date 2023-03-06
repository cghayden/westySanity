import {GoBrowser as PageIcon, GoHome, GoSettings} from 'react-icons/go'
import {GiCoffeeBeans} from 'react-icons/gi'
import {FaFileInvoiceDollar} from 'react-icons/fa'
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'
import Iframe from 'sanity-plugin-iframe-pane'
// import PreviewIFrame from './components/previewIFrame'
// import ColorsPreview from './components/ColorsPreview'

import {resolveDocumentUrl} from './resolveDocumentUrl'
import {resolvePageUrl} from './resolvePageUrl'

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

const documentPreviewViews = ['coffee', 'post']
const pagePreviewViews = ['landingPage']
// Here we declare which view panes show up for which schema types
export const defaultDocumentNode = (S, {schemaType}) => {
  if (documentPreviewViews.includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: (doc) => resolveDocumentUrl(doc),
          reload: {
            button: true,
            revision: true,
          },
          // Optional-- Set the default size (from desktop)
          // defaultSize: `mobile`,
          // Optional-- Pass attributes to the underlying `iframe` element:
          // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
          // attributes: {
          // allow: 'fullscreen' // string, optional
          // referrerPolicy: 'strict-origin-when-cross-origin' // string,optional
          // sandbox: 'allow-same-origin' // string, optional
          // }
        })
        .title('Preview'),
    ])
  }
  // else :
  return S.document()
  // return S.document().views([
  //   S.view.form(),
  //   S.view.component(JsonView).title('JSON')
  //  ])
}

// note: context includes `currentUser` and the client
export const structure = (S, context) =>
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
                  S.document()
                    .schemaType('landingPage')
                    .documentId('homePage')
                    .views([
                      S.view.form(),
                      S.view
                        .component(Iframe)
                        .options({
                          url: (doc) => resolvePageUrl(doc),
                          reload: {
                            button: true,
                            revision: true,
                          },
                        })
                        .title('Preview'),
                    ])
                ),
              S.listItem()
                .title('Coffee Page')
                .icon(PageIcon)
                .child(
                  S.document()
                    .schemaType('coffeePage')
                    .documentId('coffeePage')
                    .views([
                      S.view.form(),
                      S.view
                        .component(Iframe)
                        .options({
                          url: (doc) => resolvePageUrl(doc),
                          reload: {
                            button: true,
                            revision: true,
                          },
                        })
                        .title('Preview'),
                    ])
                ),
              S.listItem()
                .title('Events Page')
                .icon(PageIcon)
                .child(
                  S.document()
                    .schemaType('eventsPage')
                    .documentId('eventsPage')
                    .views([
                      S.view.form(),
                      S.view
                        .component(Iframe)
                        .options({
                          url: (doc) => resolvePageUrl(doc),
                          reload: {
                            button: true,
                            revision: true,
                          },
                        })
                        .title('Preview'),
                    ])
                ),
              S.listItem()
                .title('About Page')
                .icon(PageIcon)
                .child(
                  S.document()
                    .schemaType('aboutPage')
                    .documentId('aboutPage')
                    .views([
                      S.view.form(),
                      S.view
                        .component(Iframe)
                        .options({
                          url: (doc) => resolvePageUrl(doc),
                          reload: {
                            button: true,
                            revision: true,
                          },
                        })
                        .title('Preview'),
                    ])
                ),
              S.listItem()
                .title('Contact Page')
                .icon(PageIcon)
                .child(
                  S.document()
                    .schemaType('contactPage')
                    .documentId('contactPage')
                    .views([
                      S.view.form(),
                      S.view
                        .component(Iframe)
                        .options({
                          url: (doc) => resolvePageUrl(doc),
                          reload: {
                            button: true,
                            revision: true,
                          },
                        })
                        .title('Preview'),
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

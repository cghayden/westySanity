// resolveDocumentActions.js
import defaultResolve, {
  PublishAction,
} from 'part:@sanity/base/document-actions';

const lockedDocs = [
  'siteSettings',
  'landingPage',
  'coffeePage',
  'eventsPage',
  'aboutPage',
  'contactPage',
];

export default function resolveDocumentActions(props) {
  if (lockedDocs.includes(props.type)) {
    // Show default actions on documents not of type project
    return [PublishAction];
  }
  return defaultResolve(props);
}

const env = process.env.NODE_ENV || 'development';

export default function resolvePreviewUrl(document) {
  const baseUrl =
    env === 'development'
      ? 'http://localhost:8000'
      : `https://www.neighborlycoffee.com/`;
  switch (document._type) {
    case 'landingPage':
      return baseUrl;
    case 'coffeePage':
      return `${baseUrl}/coffee`;
    case 'eventsPage':
      return `${baseUrl}/events`;
    case 'aboutPage':
      return `${baseUrl}/about`;
    default:
      return null;
  }
}

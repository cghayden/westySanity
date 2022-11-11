const localUrl = `http://localhost:3000`;
const remoteUrl = `https://westy-remix.vercel.app/`;
const baseUrl =
  window?.location?.hostname === 'localhost' ? localUrl : remoteUrl;

export function resolveProductionUrl(doc) {
  console.log('doc', doc);
  const docType = doc._type;
  const slug = doc?.slug?.current;

  if (!slug) {
    throw new Error(`Document has no slug, cannot preview`);
  }
  const url = new URL(baseUrl);
  console.log('url', url);
  url.pathname = `${docType}/${slug}`;
  url.searchParams.set(`preview`, `draft`);

  return url.toString();
}

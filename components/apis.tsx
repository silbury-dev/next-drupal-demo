import { Configuration, ContentBasicPageApi, FileApi, MediaImageApi, ParagraphHeroApi, ParagraphRelatedSolutionsApi } from '../drupal-api-client';

export function APIs(ssr = false) {
  if(ssr) {

  }
  const configuration = ssr ? new Configuration({
    basePath: "http://silburydemo.staging.sites.dropsolid-sites.com/jsonapi",
  }) : new Configuration({
    basePath: "http://localhost:3000/jsonapi",
  });
  const pageApi: ContentBasicPageApi = new ContentBasicPageApi(configuration);
  const heroApi: ParagraphHeroApi = new ParagraphHeroApi(configuration);
  const apiMedia: MediaImageApi = new MediaImageApi(configuration);
  const apiFile: FileApi = new FileApi(configuration);
  const relApi: ParagraphRelatedSolutionsApi = new ParagraphRelatedSolutionsApi(configuration);
  return { heroApi, apiMedia, apiFile, pageApi, relApi };
}

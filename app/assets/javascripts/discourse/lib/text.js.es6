import { default as PrettyText, buildOptions } from 'pretty-text/pretty-text';

// Use this to easily create a pretty text instance with proper options
export function cook(text) {
  const siteSettings = Discourse.__container__.lookup('site-settings:main');

  const opts = {
    getURL: Discourse.getURLWithCDN,
    siteSettings
  };

  return new Handlebars.SafeString(new PrettyText(buildOptions(opts)).cook(text));
}

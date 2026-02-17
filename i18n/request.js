const { getRequestConfig } = require("next-intl/server");
const { routing } = require("./routing");

module.exports = getRequestConfig(async ({ requestLocale }) => {
  const locale = routing.locales.includes(requestLocale)
    ? requestLocale
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

const { defineRouting } = require("next-intl/routing");

const routing = defineRouting({
  locales: ["ar", "en"],
  defaultLocale: "ar",
  localeDetection: true
});

module.exports = { routing };

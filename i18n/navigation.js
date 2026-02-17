const {createNavigation} = require('next-intl/navigation');
const {routing} = require('./routing');

const {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname
} = createNavigation(routing);

module.exports = {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname
};

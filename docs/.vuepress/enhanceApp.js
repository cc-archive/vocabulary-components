import VocabularyComponents from "../../src/index";
import "@creativecommons/vocabulary-styles";

export default ({ Vue, options, router, siteData }) => {
  // i18n stub
  Vue.prototype.$t = (msg) => msg;
  Vue.use(VocabularyComponents);
};

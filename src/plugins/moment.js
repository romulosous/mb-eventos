import Vue from "vue"

import moment from "moment-timezone";
moment.locale("pt-br");
moment.suppressDeprecationWarnings = true

export default Vue.filter("formattedDate", (date) => {
  if (date) {
    return moment(String(date)).format("LLL");
  }
  return date
})
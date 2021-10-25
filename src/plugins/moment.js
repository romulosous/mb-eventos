import Vue from "vue"

import moment from "moment-timezone";
moment.locale("pt-br");
moment.suppressDeprecationWarnings = true

export default Vue.filter("formatDate", (date) => {
  if (date) {
    return moment(String(date)).format("LLLL");
  }
  return date
})
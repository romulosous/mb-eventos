<template>
  <div class="event-list">
    <EventList />
  </div>
</template>

<script>
import EventList from "../components/EventList.vue";
export default {
  name: "Home",

  components: {
    EventList,
  },
};
</script>

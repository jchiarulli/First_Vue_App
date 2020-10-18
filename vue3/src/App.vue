<template>
  <!-- Use v-show when what you want to hide won't weigh
the DOM done like a h1 tag -->
  <!-- v-show also preserves the state of any data -->
  <!-- Use v-if when you want to remove the html tags, e.g.,
a form that has multiple html tags, functionality, &
styling -->

  <!-- <div v-if="isShowing" v-html="title"></div> -->
  <!-- <h3 v-else-if="isShowing === null">This is v-else-if</h3>
  <h2 v-else>This is v-else part</h2> -->

  <!-- <div v-show="isShowing">{{ count }}</div> -->

  <!-- <h1 v-once><span>Count is: </span>{{ count }}</h1> -->
  <!-- <h1 v-text="count"><span>Count is: </span></h1> -->

  <h1>DC Heros</h1>
  <!-- <ul>
    <li>Super Girl</li>
    <li>Flash</li>
    <li>Arrow</li>
    <li>Batman</li>
    <li>Superman</li>
  </ul> -->
  <ul>
    <li v-for="(hero, index) in dcHeros" v-bind:key="index">
      {{ index }} : {{ hero.name }}
    </li>
  </ul>
  <p>Something else</p>
</template>

<script>
export default {
  data() {
    return {
      title: "<h1>This is title in h1 tag</h1>",
      isShowing: false,
      count: 0,
      // dcHeros: ["Super Girl", "Flash", "Batman", "Arrow", "Superman"],
      dcHeros: [
        { name: "Super Girl" },
        { name: "Flash" },
        { name: "Batman" },
        { name: "Arrow" },
        { name: "Superman" },
      ],
    };
  },

  // mounted() {
  //   setInterval(() => {
  //     this.count++;
  //   }, 1000);
  // },
};
</script>
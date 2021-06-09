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
  <!-- <input type="text" :value="newHero" :disabled="isDisabled"/> -->
  <!-- <input type="text" :[attribute]="newHero" /> -->
  <!-- <input type="text" v-model.trim="newHero" /> -->
  <!-- <input type="text" v-model.lazy="newHero" /> -->
  <!-- <textarea
    name=""
    id=""
    cols="30"
    rows="10"
    v-model.number="newHero"
  ></textarea> -->
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
      attribute: "newHero",
      isDisabled: false,
      newHero: "Robin",
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

<template>
  <!-- <h1>DC Heros {{ herosCount }}</h1>

  <h2>{{ fullname }}</h2>
  <h2>{{ fname }} {{ lname }}</h2>

  <p>{{ randC }}</p>
  <p>{{ randC }}</p>
  <p>{{ randC }}</p>
  <p>{{ randM() }}</p>
  <p>{{ randM() }}</p>
  <p>{{ randM() }}</p>
  <ul>
    <li v-for="(hero, index) in dcHeros" :key="index">
      {{ hero.name }}
    </li>
  </ul>
  <form @submit.prevent="addHero">
    <input type="text" v-model="newHero" placeholder="Type Hero Name Here" />
    <button type="submit">Add Hero</button>
  </form>
  <button @click="setFullName">Set Full Name</button>
  <small>Total Heros in the list is {{ herosCount }}</small> -->
</template>

<script>
// export default {
//   computed: {
//     herosCount() {
//       return this.dcHeros.length;
//     },

//     randC() {
//       return this.dcHeros.length + Math.random();
//     },

//     fullname: {
//       get() {
//         return `Full name is ${this.fname} ${this.lname}`;
//       },
//       set(fullname) {
//         const values = fullname.split(" ");
//         this.fname = values[0];
//         this.lname = values[1];
//       },
//     },
//   },
//   methods: {
//     addHero() {
//       if (this.newHero !== "") {
//         this.dcHeros.unshift({ name: this.newHero });
//         this.newHero = "";
//       }
//     },
//     randM() {
//       return Math.random();
//     },
//     setFullName() {
//       this.fullname = "Bitfumes Tutorial";
//     },
//   },
//   data() {
//     return {
//       newHero: "",
//       fname: "Jason",
//       lname: "Chiarulli",
//       dcHeros: [
//         { name: "Super Girl" },
//         { name: "Flash" },
//         { name: "Batman" },
//         { name: "Arrow" },
//         { name: "Superman" },
//       ],
//     };
//   },
// };
</script>
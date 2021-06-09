// this requires the compiler
const template = `<div>
<h1>{{ title }}</h1>
<h1>{{ name }}</h1>
</div>`;

const data = function data() {
  return {
    title: "Vue3 Tutorial Updated",
    name: "Jason",
  };
};

const App = { data, template };
Vue.createApp(App).mount("#vue-app");

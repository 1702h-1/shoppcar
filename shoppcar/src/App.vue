<template>
  <div id="app">
    <div>
      <input type="text" v-model="shop" />
      <button @click="add()">增加一个物品</button>
    </div>
    <div>
      <div v-for="item in list" :key="item.id">
        <input type="checkbox" @change="check(item.id)" :checked="item.check" />
        <span>{{item.shopItem}}</span>
      </div>
    </div>
    <button @click="del()">购买</button>
    <button @click="clear()">清空</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "App",
  data() {
    return {
      shop: ""
    };
  },
  computed: {
    ...mapState(["list"]),
  },
  methods: {
    add() {
      this.$store.commit('addShop',this.shop);
      this.shop = '';
    },
    check(id){
      this.$store.commit('changeCheck',id);
    },
    del() {
      this.$store.commit('delShop');
    },
    clear(){
      this.$store.commit('clearList');
    }
  }
};
</script>

<style>
  #app {
    margin:0;
    padding:0; 
  }
</style>

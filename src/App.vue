<template>
  <div id="app">
    <a class="menu-button"></a>
    <leftmenu v-if="leftmenuvisible"></leftmenu>
    <img src="./assets/logo.png"><i class="el-icon-edit"></i>
    <i class="el-icon-share" style="font-size:40px"></i>
    <i class="el-icon-menu"></i>
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <carrousel></carrousel>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import leftmenu from '@/components/LeftMenu.vue'
import carrousel from './carrousel.vue'
export default {
  data:()=>({leftmenuvisible:false}),
  name: 'app',
  components: {
    HelloWorld,
    leftmenu,
    carrousel
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  padding: 0px;
  margin: 60px auto 0 auto;
}
.menu-button{
  position: absolute;
  width: 24px;
  height: 24px;
  top: 8px;
  left: 12px;
  background: url(./assets/img/menu.png) center center no-repeat;
  background-size: 24px;
}
</style>

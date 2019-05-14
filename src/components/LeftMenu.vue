<template>
  <div class="leftmenu">
    我是leftmenu
  </div>
</template>

<script>
export default {
  name: 'leftmenu',
  props: {
    leftmenuvisible: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.leftmenu{position:fixed; left:0px; top:0px; bottom:0px; width:100px; background:#f4f4f4; }
</style>

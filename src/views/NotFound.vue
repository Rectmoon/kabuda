<template>
  <div class="col-full">
    <h1 :class="$style.headingLarge">404</h1>
    <p :class="$style.textLarge">
      抱歉, 找不到您要的页面。 不如
      <router-link :to="{name: 'Home'}">回到首页 ?</router-link>
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style module>
.headingLarge {
  font-size: 100px;
}

.textLarge {
  font-size: 50px;
  font-weight: 100;
}
</style>

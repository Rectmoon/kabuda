<template>
  <div class="thread">
    <div>
      <p>
        <router-link :to="`/thread/${thread['.key']}`">{{thread.title}}</router-link>
      </p>

      <p class="text-faded text-xsmall">
        By
        <a href="#">{{user.name}}</a>
        ,
        {{thread.publishedAt}}
      </p>
    </div>

    <div class="activity">
      <p class="replies-count">{{replyCount}} replies</p>
      <!-- <img
        class="avatar-medium"
        src="https://avatars2.githubusercontent.com/u/31433387?s=40&v=4"
        alt
      />-->
    </div>
  </div>
</template>

<script>
import sourceData from '@/mock/data'

export default {
  props: {
    thread: {
      type: Object,
      required: true
    }
  },

  computed: {
    replyCount () {
      return Object.keys(this.thread).length - 1
    },
    user () {
      return sourceData.users[this.thread.userId]
    }
  }
}
</script>

<style>
</style>

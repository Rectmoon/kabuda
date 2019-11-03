
<template>
  <div class="thread-list">
    <h2 class="list-title">Threads</h2>

    <ThreadItem :thread="thread" v-for="thread in threads" :key="thread['.key']" />
  </div>
</template>

<script>
import d from '@/mock/data'
import ThreadItem from '@/components/ThreadItem'

export default {
  name: 'helloworld',

  props: {
    threads: {
      required: true,
      type: Array
    }
  },
  data () {
    const { posts, users } = d
    return {
      posts,
      users
    }
  },
  components: { ThreadItem },
  methods: {}
}
</script>

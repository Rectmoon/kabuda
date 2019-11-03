
<template>
  <div class="col-full">
    <h1>welcome kabuda</h1>
    <ThreadList :threads="threads" />
  </div>
</template>

<script>
import ThreadList from '@/components/ThreadList'
import d from '@/mock/data'

export default {
  name: 'Home',
  data () {
    const { threads, posts, users } = d
    return {
      threads: Object.values(threads),
      posts,
      users
    }
  },
  components: {
    ThreadList
  },
  methods: {}
}
</script>

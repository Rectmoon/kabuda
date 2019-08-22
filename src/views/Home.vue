
<template>
  <div>
    <div
      class="col-large push-top"
      v-for="thread in threads"
      :key="thread['.key']"
      @click="goThreadShow(thread)"
    >
      <h1>{{thread.title}}</h1>

      <div class="post-list">
        <div class="post" v-for="postId in thread.posts" :key="postId">
          <div class="user-info">
            <a href class="user-name">{{users[posts[postId].userId].name}}</a>

            <a href>
              <img class="avatar-large" :src="users[posts[postId].userId].avatar" alt />
            </a>

            <p class="desktop-only">100posts</p>
          </div>

          <div class="post-content">
            <div>
              <p>{{posts[postId].text}}</p>
            </div>
          </div>

          <div class="post-date">{{posts[postId].publishedAt}}</div>
        </div>
      </div>
      <!-- <div v-for="thread in threads" :key="thread['.key']">
      <h2>{{thread.title}}</h2>

      <div v-for="postId in thread.posts" :key="postId">
        <p>{{users[posts[postId].userId].name}}</p>
        <p>{{posts[postId].text}}</p>
      </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import d from '@/mock/data'

export default {
  name: 'helloworld',
  data () {
    const { threads, posts, users } = d
    return {
      threads,
      posts,
      users
    }
  },
  methods: {
    goThreadShow (thread) {
      console.log(thread)
      this.$router.push(`/thread/${thread['.key']}`)
    }
  }
}
</script>

<style></style>

<template>
  <div class="col-large push-top">
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
  </div>
</template>

<script>
import sourceData from '@/mock/data.json'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },

  data () {
    const { threads, posts, users } = sourceData
    return {
      thread: threads[this.id],
      posts,
      users
    }
  }
}
</script>

<style>
</style>

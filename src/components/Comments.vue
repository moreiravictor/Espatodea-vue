<template>
  <div class="md-elevation-1" style="background: white;">
    <md-toolbar class="md-transparent" md-elevation="1">
      <span class="md-title">Comentarios</span>
    </md-toolbar>
    <md-list class="md-triple-line">
      <div v-for="(comment, index) in comments" :key="index" class="comments-padding">
        <md-list-item>
          <md-avatar>
            <img src="https://alhyatt.com/wp-content/uploads/2019/07/anonymous-person-221117.jpg" alt="People">
          </md-avatar>
          <div class="md-list-item-text">
            <span class="md-title">{{comment.comment_author}}</span>
            <span class="md-body-2"  v-html="comment.comment_content"></span>
            <span class="md-body-1">{{prepareDate(comment.comment_date)}}</span>
          </div>
        </md-list-item>
        <md-divider class="md-inset"></md-divider>
      </div>
    </md-list>
  </div>
</template>

<script>
import { prepareDate } from '../utils' 
export default {
  props: ['comments'],
  methods: {
    prepareDate
  }
}
</script>

<style>

</style>
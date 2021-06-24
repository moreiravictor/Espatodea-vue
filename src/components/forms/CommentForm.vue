<template>
    <div>
      <form novalidate class="md-layout" @submit.prevent="validateComment">
        <md-field :class="getValidationClass('comment_author')">
          <label>Autor</label>
          <md-input v-model="new_comment.comment_author" required></md-input>
          <span class="md-error">Quem é você?</span>
        </md-field>

        <md-field :class="getValidationClass('comment_content')">
          <label>Diga-nos o que achou!</label>
          <md-textarea v-model="new_comment.comment_content"></md-textarea>
        </md-field>

        <md-card-actions>
          <md-button type="submit" class="md-raised">Comentar</md-button>
        </md-card-actions>
        </form>
    </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { RepositoryFactory } from './../../api-calls/RepositoryFactory';
const commentCaller = RepositoryFactory.get('comments');

export default {
    data() {
        return {
            new_comment: {
              comment_author:  null,
              comment_content: null
            }
        }
    },
    validations: {
      new_comment: {
        comment_author: {
          required,
        },
        comment_content: {
          required,
        }
      }
    },
    props: ['post'],
    methods: {
        getValidationClass(fieldName) {
          const field = this.$v.new_comment[fieldName]

          if (field) {
            return {
              'md-invalid': field.$invalid && field.$dirty
            }
          }
        },
        clearForm () {
          this.$v.$reset()
          this.new_comment.comment_content = null
          this.new_comment.comment_author = null
        },
        publishComment(model) {
            model.post_id = this.post.data.data.post_id;
            commentCaller.publishComment(model).then(res => {
                this.post.data.data.comments.push(res.data.data);
                this.new_comment = {};
            });
        },
        validateComment() {
          this.$v.$touch();
          if (!this.$v.$invalid)
          this.publishComment(this.new_comment);
        }
    }
}
</script>

<style>
.new-comment-outter {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.new-comment {
    width: 60%;
    display: flex;
    flex-direction: column;
}
.new-comment-title {
    font-weight: bold;
    margin-bottom: 1%;
    margin-top: 2%;
    font-size: 20px;
}
.new-comment-item {
    width: 100%;
    display: flex;
    flex-direction: column;
}
.comment-label {
    margin-bottom: 2%;
}
.comment-area {
    width: 100%;
    height: 300px;
}
.button-comment {
    margin-top: 4%;
    width: 20%;
    height: 30px;
    border: 0.1px solid #000;
    color: #000;
    cursor: pointer;
    background-color: rgba(0,0,0,0);
}
.button-comment:hover {
    color: #fff;
    border: 0.1px solid #fff;
    cursor: pointer;
    background-color: #F3B69B;
}

</style>
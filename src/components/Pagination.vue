<template>
  <div id="pagination-outter">
      <div class="pagination-inner">
            <div @click="getPaginatedData(1)" class="pagination-button"> &lt;&lt;  </div>
            <div @click="getPaginatedData(number)" class="pagination-button" v-for="number in qt_buttons" v-bind:key="number">
              {{number}}
            </div>
            <div @click= "getPaginatedData(qt_buttons)" class="pagination-button"> &gt;&gt; </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['data_array', 'qt_page'],
    data() {
        return {
            qt_buttons: 0,
            new_data_array: {}
        }
    },
    methods: {
        getPaginatedData(number) {
            let start = (number-1)*this.qt_page;
            this.new_data_array = this.data_array.slice(start, number*this.qt_page);
            this.$emit('paginationToParent', this.new_data_array);
        }
    },
    watch: {
        data_array: function() {
                if (this.data_array != {}) {
                this.qt_buttons = Math.ceil(this.data_array.length/this.qt_page);
                this.getPaginatedData(1);
            }
        }
    }
}
</script>

<style>
.pagination-inner {
    display: flex;
}
.pagination-button {
    cursor:pointer;
    margin: 5px;
    color: #000;
    font-size: 18px;
}
</style>
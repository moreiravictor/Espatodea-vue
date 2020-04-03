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
            let start = (number == 0) ? 0 : ((number-1)*this.qt_page);
            this.new_data_array = this.data_array.data.data.slice(start, ((number))*this.qt_page);
            this.$emit('paginationToParent', this.new_data_array);
            window.scrollTo(0,10000);
        },
        verify(att) {
            return (typeof att !== "undefined") ? att.data.data : [];
        },
    },
    watch: {
        data_array: function() {
                if (this.data_array != {}) {
                this.qt_buttons = Math.ceil(this.data_array.data.data.length/this.qt_page);
            }
        },
    }
}
</script>

<style>
.pagination-inner {
    display: flex;
}
.pagination-button {
    cursor:pointer;
    background-color: cornflowerblue;
    margin: 5px;
    color: #fff;
    font-size: 28px;
    border: 2px solid #F3B69B;
}
</style>
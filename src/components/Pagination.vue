<template>
  <div id="pagination-outter">
      <div class="centralized">
            <div @click="getPaginatedData(1)" class="pagination-button"> 
              <md-button class="md-fab md-mini" id="pag-button">
                &lt; 
              </md-button>
            </div>
            <div @click="getPaginatedData(number)" class="pagination-button" v-for="number in qt_buttons" v-bind:key="number">
              <md-button class="md-fab md-mini" id="pag-button">
                {{number}}
                </md-button>
            </div>
            <div @click= "getPaginatedData(qt_buttons)" class="pagination-button">
              <md-button class="md-fab md-mini" id="pag-button">
                &gt; 
              </md-button>
            </div>
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
            if ( Array.isArray(this.data_array) && this.data_array !== {}) {
                this.qt_buttons = Math.ceil(this.data_array.length/this.qt_page);
                this.getPaginatedData(1);
            }
        }
    }
}
</script>

<style>
#pagination-outter {
  margin: 1vw;
}
.pagination-button {
    cursor:pointer;
    margin: 5px;
    color: #000;
    font-size: 18px;
}
.centralized {
  display: flex;
  justify-content:center;
  align-items:center
}
#pag-button {
  color: black;
  background: rgba(238, 237, 237, 0.281);
}
</style>
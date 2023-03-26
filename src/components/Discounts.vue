<template>
  <div class="discounts">
    <div class="discounts-filter">
      <div class="filter-studentsOnly" @click="$event => this.studentsOnlyFilter()">
        <input type="checkbox" name="studentsOnly" id="studentsOnly"  v-model="studentsOnly"> 
        <label for="studentsOnly">Alleen Middelbare Scholier</label>
      </div>
    </div>
    <div class="discounts-list">
      <Discount 
      v-for="discount in data" 
      :key="discount.id" 
      :details="discount" 
      :studentsOnly="studentsOnly"/>
    </div>
  </div>
</template>

<script>
import Discount from "./Discount.vue";

export default {
    name: "DiscountsComponent",
    data() {
      return {
        studentsOnly: false,
        data: this.discounts
      }
    },
    methods: {
      studentsOnlyFilter: function() {
        if (this.studentsOnly === false) {
          for (let i = 0; i < Object.keys(this.data).length; i++) {
            if (this.data[i].studentsOnly) {
              delete this.data[i]
            }
          }
        } else {
          console.log('hi')
          this.data = this.discounts;
        }
      }
    },
    props: {
      discounts: JSON
    },
    components: {
      Discount
    }
}
</script>

<style lang="scss" scoped>
  .discounts {
    width: 400px;
    margin: 0 auto;
    .discounts-list {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%;
      margin: 0 auto;
    }
  }

  @media only screen and (min-width: 600px) {
    .discounts {
      width: 500px;
    }
  }

</style>
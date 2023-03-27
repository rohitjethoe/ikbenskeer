<template>
  <div class="discounts">
    <div class="discounts-filter">
      <div class="filter-studentsOnly" @click="$event => studentsOnly ? this.getData() : this.getPupilData()">
        <input type="checkbox" name="studentsOnly" id="studentsOnly"  v-model="studentsOnly"> 
        <label for="studentsOnly">Alleen Middelbare Scholier</label>
      </div>
    </div>
    <div class="discounts-list">
      <Discount 
      v-for="discount in data" 
      :key="discount.id" 
      :details="discount"/>
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
      getData: async function() {
        const res = await fetch(`${window.location.origin}/api/data.json`);
        const data = await res.json();
        this.data = data;
      },

      getPupilData: async function() {
        let finalData = [];
        const res = await fetch(`${window.location.origin}/api/data.json`);
        const data = await res.json();

        data.forEach(discount => {
          if (discount.data.studentsOnly === false) {
            finalData.push(discount);
          };
        });

        this.data = finalData;
      },
    },
    async mounted() {
      this.getData();
    },
    components: {
      Discount
    }
}
</script>

<style lang="scss" scoped>
  .discounts {
    width: 90%;
    margin: 0 auto;
    .discounts-filter {
      margin: 30px 0px;
      .filter-studentsOnly {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 15px;
        input {
          width: 20px;
          height: 20px;
        }
      }
    }
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
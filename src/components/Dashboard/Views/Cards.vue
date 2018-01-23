<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <!-- flashcard boxes -->
        <div v-for="(box, i) in flashcardBoxes"
          :key="i"
          class="col-xl-2 col-md-3 col-sm-4 col-6 ">
          <stats-card>
            <div slot="header" >
              <i
                class="ico-icon icon-box-filled"
                :class="box.color"></i>
            </div>
            <div slot="content">
              <p class="card-category small">{{box.title}}</p>
              <h4 class="card-title">{{box.amount}}</h4>
            </div>
          </stats-card>
        </div>
        <!-- flashcard boxes -->

        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Striped Table with Hover</h4>
              <p class="card-category">Here is a subtitle for this table</p>
            </template>
            <div class="table-responsive">
              <l-table class="table-hover"
                      :columns="table1.columns"
                      :data="table1.data">
              </l-table>
            </div>
          </card>

        </div>

        <!-- <div class="col-12">
          <card class="card-plain">
            <template slot="header">
              <h4 class="card-title">Table on Plain Background</h4>
              <p class="card-category">Here is a subtitle for this table</p>
            </template>
            <div class="table-responsive">
              <l-table class="table-hover"
                      :columns="table2.columns"
                      :data="table2.data">
              </l-table>
            </div>
          </card>
        </div> -->

      </div>
    </div>
  </div>
</template>
<script type="text/javascript" src='src/data/one.js'></script>
<script>
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import LTable from 'src/components/UIComponents/Table.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import { ONE_THOUSAND } from 'src/data/one.js'

  // import { ONE_THOUSAND } from 'src/data/one'

  export default {
    components: {
      LTable,
      Card,
      StatsCard,
    },
    data () {
      return {
        // thousandCards: ONE_THOUSAND,
        table1: {
          columns: ['Rank', 'Character', 'Pinyin', 'English'],
          // columns: ['Id', 'Name', 'Salary', 'Country', 'City'],
          // columns: [...tableColumns],
          data: [...tableData],
        },
        // columns: ['Id', 'Name', 'Salary', 'Country', 'City'],
        // columns: ['Rank', 'Character', 'Pinyin', 'English'],
        // table2: {
        //   columns: [...tableColumns],
        //   data: [...tableData]
        // },
        flashcardBoxes,
        // length: onlyCharacters.length,
      }
    },
    computed: {
      length(){
        return ONE_THOUSAND;
      }
    }
  }

  const flashcardBoxes = [{
    id: 0,
    title: "Gray Box",
    amount: 3000,
    color: 'pastel-gray'
    },
    {
    id: 1,
    title: "Red Box",
    amount: 0,
    color: 'pastel-red',
    },
    {
    id: 2,
    title: "Orange Box",
    amount: 0,
    color: 'pastel-orange',
    },
    {
    id: 3,
    title: "Yellow Box",
    amount: 0,
    color: 'pastel-yellow',
    },
    {
    id: 4,
    title: "Green Box",
    amount: 0,
    color: 'pastel-green',
    },
    {
    id: 5,
    title: "Blue Box",
    amount: 0,
    color: 'pastel-blue',
  }]

  const tableColumns = ['Id', 'Name', 'Salary', 'Country', 'City']
  const tableData = [
    {
    "rank": 1,
    "character": "的",
    "pinyin": "de",
    "english": "possessive, adjectival suffix",
    "chnEg": null,
    "engEg": null
  },
  {
    "rank": 2,
    "character": "是",
    "pinyin": "shì",
    "english": "yes, right; to be",
    "chnEg": null,
    "engEg": null
  },
  {
    "rank": 3,
    "character": "不",
    "pinyin": "bù",
    "english": "no, not; un-; negative prefix",
    "chnEg": null,
    "engEg": null
  },
  {
    "rank": 4,
    "character": "我",
    "pinyin": "wǒ",
    "english": "our, us, i, me, my, we",
    "chnEg": null,
    "engEg": null
  },
  ]
  // const tableData = [{
  //   id: 1,
  //   name: 'Dakota Rice',
  //   salary: '$36.738',
  //   country: 'Niger',
  //   city: 'Oud-Turnhout',
  //   experiment: 'EXPERIMENT',
  // },
  // {
  //   id: 2,
  //   name: 'Minerva Hooper',
  //   salary: '$23,789',
  //   country: 'Curaçao',
  //   city: 'Sinaai-Waas'
  // },
  // {
  //   id: 3,
  //   name: 'Sage Rodriguez',
  //   salary: '$56,142',
  //   country: 'Netherlands',
  //   city: 'Baileux'
  // },
  // {
  //   id: 4,
  //   name: 'Philip Chaney',
  //   salary: '$38,735',
  //   country: 'Korea, South',
  //   city: 'Overland Park'
  // },
  // {
  //   id: 5,
  //   name: 'Doris Greene',
  //   salary: '$63,542',
  //   country: 'Malawi',
  //   city: 'Feldkirchen in Kärnten'
  // }]
</script>
<style>
  .card-category.small {
    font-size: 12px;
  }
</style>

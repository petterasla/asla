import { createStore } from 'vuex'

const storeObject = {
    state: {
        keyword_result: {
            // Copied from example in keywordtool.io
            // https://docs.keywordtool.io/reference/keyword-suggestions-google
            "results":{
                "":[
                    {
                        "string":"chair",
                        "volume":1500000,
                        "m1":2240000,
                        "m1_month":7,
                        "m1_year":2020,
                        "m2":1830000,
                        "m2_month":6,
                        "m2_year":2020,
                        "m3":2240000,
                        "m3_month":5,
                        "m3_year":2020,
                        "m4":2240000,
                        "m4_month":4,
                        "m4_year":2020,
                        "m5":1500000,
                        "m5_month":3,
                        "m5_year":2020,
                        "m6":1220000,
                        "m6_month":2,
                        "m6_year":2020,
                        "m7":1500000,
                        "m7_month":1,
                        "m7_year":2020,
                        "m8":1220000,
                        "m8_month":12,
                        "m8_year":2019,
                        "m9":1000000,
                        "m9_month":11,
                        "m9_year":2019,
                        "m10":1000000,
                        "m10_month":10,
                        "m10_year":2019,
                        "m11":1000000,
                        "m11_month":9,
                        "m11_year":2019,
                        "m12":1220000,
                        "m12_month":8,
                        "m12_year":2019,
                        "cpc":0.977496,
                        "cmp":1
                    }
                ],
                "chair":[
                    {
                        "string":"chair covers",
                        "volume":110000,
                        "m1":135000,
                        "m1_month":7,
                        "m1_year":2020,
                        "m2":110000,
                        "m2_month":6,
                        "m2_year":2020,
                        "m3":135000,
                        "m3_month":5,
                        "m3_year":2020,
                        "m4":110000,
                        "m4_month":4,
                        "m4_year":2020,
                        "m5":90500,
                        "m5_month":3,
                        "m5_year":2020,
                        "m6":90500,
                        "m6_month":2,
                        "m6_year":2020,
                        "m7":110000,
                        "m7_month":1,
                        "m7_year":2020,
                        "m8":110000,
                        "m8_month":12,
                        "m8_year":2019,
                        "m9":135000,
                        "m9_month":11,
                        "m9_year":2019,
                        "m10":110000,
                        "m10_month":10,
                        "m10_year":2019,
                        "m11":110000,
                        "m11_month":9,
                        "m11_year":2019,
                        "m12":110000,
                        "m12_month":8,
                        "m12_year":2019,
                        "cpc":0.886257,
                        "cmp":1
                    },
                    {
                        "string":"chairish",
                        "volume":60500,
                        "m1":74000,
                        "m1_month":7,
                        "m1_year":2020,
                        "m2":74000,
                        "m2_month":6,
                        "m2_year":2020,
                        "m3":74000,
                        "m3_month":5,
                        "m3_year":2020,
                        "m4":60500,
                        "m4_month":4,
                        "m4_year":2020,
                        "m5":49500,
                        "m5_month":3,
                        "m5_year":2020,
                        "m6":60500,
                        "m6_month":2,
                        "m6_year":2020,
                        "m7":60500,
                        "m7_month":1,
                        "m7_year":2020,
                        "m8":49500,
                        "m8_month":12,
                        "m8_year":2019,
                        "m9":49500,
                        "m9_month":11,
                        "m9_year":2019,
                        "m10":60500,
                        "m10_month":10,
                        "m10_year":2019,
                        "m11":60500,
                        "m11_month":9,
                        "m11_year":2019,
                        "m12":60500,
                        "m12_month":8,
                        "m12_year":2019,
                        "cpc":0.093084,
                        "cmp":0.15641728857361
                    },
                    {
                        "string":"chair cushions",
                        "volume":110000,
                        "m1":165000,
                        "m1_month":7,
                        "m1_year":2020,
                        "m2":165000,
                        "m2_month":6,
                        "m2_year":2020,
                        "m3":201000,
                        "m3_month":5,
                        "m3_year":2020,
                        "m4":165000,
                        "m4_month":4,
                        "m4_year":2020,
                        "m5":90500,
                        "m5_month":3,
                        "m5_year":2020,
                        "m6":74000,
                        "m6_month":2,
                        "m6_year":2020,
                        "m7":60500,
                        "m7_month":1,
                        "m7_year":2020,
                        "m8":60500,
                        "m8_month":12,
                        "m8_year":2019,
                        "m9":74000,
                        "m9_month":11,
                        "m9_year":2019,
                        "m10":60500,
                        "m10_month":10,
                        "m10_year":2019,
                        "m11":60500,
                        "m11_month":9,
                        "m11_year":2019,
                        "m12":90500,
                        "m12_month":8,
                        "m12_year":2019,
                        "cpc":0.839226,
                        "cmp":1
                    }
                ]
            }
        }

      },
    mutations: {
    
    },
    actions: {
    
    },
    getters: {
        getKeywordResult: function(state: any) {
            const firstRow = state.keyword_result.results[""][0];
            const rows = state.keyword_result.results.chair;
            rows.push(firstRow);
            rows.sort(compare)
            return rows;
        }
    }
}
function compare(a: {volume: number} , b: {volume: number}) {
    if ( a.volume < b.volume ){
        return 1;
      }
      if ( a.volume > b.volume ){
        return -1;
      }
      return 0;
}

const store = createStore(storeObject);

export default store;
import { createStore } from 'vuex'

const storeObject = {
    state: {
        keyword_result: []
      },
    mutations: {
    
    },
    actions: {
    
    },
    getters: {
        getKeywordResult: function(state: any) {
            const data = [];
            for (let i = 0; i < 126; i++) {
                data.push({
                    keyword: "keyword"+i,
                    avgVolume: i*100,
                    cpc: (i * 3.14).toFixed(2),
                    cmp: (i * 6.14).toFixed(2)
                });
            }
            return state.keyword_result = data;
        }
    }
}

const store = createStore(storeObject);

export default store;
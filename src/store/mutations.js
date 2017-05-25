const state = {
    headShow:true
}
const mutations =  {
    /*头部*/
    headShow (state){
        state.headShow=true;
    },
    headHide (state){
        state.headShow=false;
    }
}

const getters = {
     headShow(state){
        return state.headShow;
    }
}
export default{
    state,
    mutations,
    getters
}
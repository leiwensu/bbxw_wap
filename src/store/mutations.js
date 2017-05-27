const state = {
    headShow:true,
    footerLinksShow:true,
    footerShow:true
}
const mutations =  {
    /*头部*/
    headShow (state) {
        state.headShow=true;
    },
    headHide (state) {
        state.headShow=false;
    },
    footerLinksShow (state) {
        state.footerLinksShow = true;
    },
    footerLinksHide (state) {
        state.footerLinksShow = false;
    },
    footerShow (state) {
        state.footerShow = true;
    },
    footerHide (state) {
        state.footerShow = false;
    }
}

const getters = {
     headShow(state){
        return state.headShow;
    },
    footerLinksShow(state){
        return state.footerLinksShow;
    },
    footerShow(state){
        return state.footerShow;
    }
}
export default{
    state,
    mutations,
    getters
}
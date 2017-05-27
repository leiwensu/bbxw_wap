export default{
    headShow:({commit})=>{
        commit('headShow');
    },
    headHide:({commit})=>{
        commit('headHide');
    },
    footerLinksShow:({commit}) => {
        commit('footerLinksShow');
    },
    footerLinksHide:({commit}) => {
        commit('footerLinksHide');
    },
    footerShow:({commit}) =>{
        commit('footerShow')
    },
    footerHide:({commit}) =>{
        commit('footerHide')
    }
}
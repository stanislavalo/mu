const state = {
  items:[],
  showItems:false,
  idActiv:0,
  drawer:false,
  showBisMenuDown:false,
  showMainMenuDown:false,
  language:0, // 0=en,1=cz
};
const getters = {
  items: state =>  {
    return state.items;
  },
  showItems: state => {
    return state.showItems;
  },
  idActiv: state => { 
    return state.idActiv;
  },
  drawer: state => {
    return state.drawer;
  },
  showBisMenuDown: state => {
    return state.showBisMenuDown;
  },
  showMainMenuDown: state => {
    return state.showMainMenuDown;
  },
  language: state => {
    return state.language;
  }
};
const mutations = {
  'TOGGLE_LANGUAGE'(state){
    if(state.language === 1)
      state.language = 0;
    else{
      state.language = 1;
    }  
  },
  'SET_SUBMENU' (state, menu) {
    state.showItems = !state.showItems;
    if(state.showItems){
      state.items= menu.items;
      state.idActiv = menu.id;
    }
    else if(state.idActiv == menu.id) {
      state.items= [];
      state.idActiv = 0;
    }
    else{
      state.showItems = !state.showItems;
      state.items= menu.items;
      state.idActiv = menu.id;
    }
  },
  // toggle drawer, toggle sandwich menu
  'TOGGLE_DRAWER'(state,mdAndDown){
    state.drawer = !state.drawer; 
    if(state.drawer){
      state.showBisMenuDown = true;
      if(mdAndDown){
        state.showMainMenuDown = true;
      }
    }
    else{
      state.showBisMenuDown = false;
      if(mdAndDown){
        state.showMainMenuDown = false;
      }
    }
  }
};
const actions = {
  setSubmenu: ({commit},menu) => {
      commit('SET_SUBMENU', menu);
  },
  toggleDrawer: ({commit},mdAndDown) => {
    commit('TOGGLE_DRAWER',mdAndDown);
  },
  toggleLanguage:({commit}) => {
    commit('TOGGLE_LANGUAGE');
  }
};
  export default {
    state,
    mutations,
    actions,
    getters
}
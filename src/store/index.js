import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //当前登录用户的token
    token: 'dsdasd',
    //当前登录用户的id
    userId: 102,
    //当前登录用户的详细信息
    userInfo: JSON.parse(sessionStorage.getItem("userInfo")),

    //当前浏览的其他用户的博客主页的用户id
    blogUserInfoId: 0,

  },
  mutations: {
    //set
    SET_TOKEN: (state, token)=> {
      state.token = token;
      localStorage.setItem("token", token);
    },
    SET_USERINFO:  (state, userInfo)=> {
      state.userInfo = userInfo;
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
    },
    REMOVE_INFO: state => {
      state.token = '';
      state.userInfo = {};
      localStorage.setItem("token", "");
      sessionStorage.setItem("userInfo", JSON.stringify(''));
    },

    set_blogUserInfoId: (state, blogUserInfoId) => {
      state.blogUserInfoId = blogUserInfoId;
      localStorage.setItem("blogUserInfoId", blogUserInfoId);
    }
  },
  getters: {
    //get
    getUser:state => {
      return state.userInfo;
    },
    getToken:state => {
      return state.token;
    },
    getUserId:state => {
      return state.userId;
    },
    getBlogUserInfoId:state => {
      return state.blogUserInfoId;
    }
  },
  actions: {
  },
  modules: {
  }
})

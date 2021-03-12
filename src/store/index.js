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
    blogUserInfoId: "0",

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
      sessionStorage.setItem("blogUserInfoId", blogUserInfoId);
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
      state.blogUserInfoId = sessionStorage.getItem("blogUserInfoId");
      return state.blogUserInfoId;
    }
  },
  actions: {
  },
  modules: {
  }
})


//
// 区别：
// 1.vuex存储在内存，localstorage（本地存储）则以文件的方式存储在本地,永久保存；sessionstorage( 会话存储 ),临时保存。
// localStorage和sessionStorage只能存储字符串类型，
// 对于复杂的对象可以使用ECMAScript提供的JSON对象的stringify和parse来处理
//
// 2.应用场景：
// vuex用于组件之间的传值，当应用遇到多个组件共享状态时候，即：多个视图依赖于同一个状态，不同视图的行为需要变更同一状态。
// localstorage，sessionstorage则主要用于不同页面之间的传值。
//
// 3.永久性：
// 当刷新页面（这里的刷新页面指的是F5刷新,属于清除内存了）时vuex存储的值会丢失，
// sessionstorage页面关闭后就清除掉了，localstorage不会。
//
// 注：很多同学觉得用localstorage可以代替vuex, 对于不变的数据确实可以，但是当两个组件共用一个数据源（对象或数组）时，
// 如果其中一个组件改变了该数据源，希望另一个组件响应该变化时，localstorage，sessionstorage无法做到，原因就是区别1。

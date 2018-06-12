const users = {
  state:{
    users:[{
      photo:"userimg",
      userName:"zhangsan",
      gender:"female",
      userPwd:"zs123456"
    },{
      photo:"bg1",
      userName:"lisi",
      gender:"male",
      userPwd:"ls123456"
    }],
    currentUser:""
  },
  mutations:{
    SET_CURRENTUSER:(state, user)=>{
      state.currentUser = user;
    }
  },
  actions:{
    set_currentUser({commit}, data){
      commit("SET_CURRENTUSER", data);
    }
  }
};

export default users;

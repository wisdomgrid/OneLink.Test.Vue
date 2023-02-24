import { defineStore } from 'pinia'
 
export const user = defineStore({
  id: 'user',
  state:()=>{
  	return {
        userInfo:{
            nickName:'章三'
        },
        token:'xfdfdsjkdsj'
  	}
  },
  getters:{
 
  },
  actions:{
  	onchangeName( val ){
  	  		this.userInfo.nickName = val;
  	  	}

  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'my_user',
        storage: localStorage,
      }
    ]
  }
})
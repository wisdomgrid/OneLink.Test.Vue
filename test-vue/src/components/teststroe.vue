<template>
	<div>
		<h1 >pinia，持久化</h1>
		<div>npm i pinia-plugin-persist --save</div>
		{{ userInfo.nickName }}
		<button @click='onchangeName'>更新时间</button>
	</div>
</template>
 
<script setup>
import { storeToRefs } from 'pinia'
import { user } from '../store/user'
const store = user();
let { userInfo } = storeToRefs(store);


const onchangeName = ()=>{
	store.onchangeName(Date.now());
	console.log(userInfo.nickName)
}
</script>
<template>
	gsap使用
	官网：https://greensock.com/docs/v3
	<div>
		圆形拖动组件
		<div class="btn-wrap">
			<div class="btn" ref="btn" :style="{ transform: `rotate(${rotateNum}deg)`}">
				<svg width="1em" height="1em" viewBox="0 0 512 512">
					<path fill="currentColor"
						d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-110.9-193.1l-53.6-53.6c-10.1-10.1-2.9-27.3 11.3-27.3H256v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32h65.4c14.2 0 21.4 17.2 11.3 27.3l-53.6 53.6c-3.1 3.1-3.1 8.2 0 11.3z" />
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
	//官方文档：https://greensock.com/docs/v3/Plugins/Draggable
	import {
		gsap,
		Draggable
	} from 'gsap/all';
	export default {
		data() {
			return {
				rotateNum: -90
			}
		},
		mounted() {

			var that = this;
			gsap.registerPlugin(Draggable);
			Draggable.create(this.$refs.btn, {
				type: "rotation", //拖动类型
				bounds: {
					minRotation: -90,
					maxRotation: 90
				}, //设置限制范围
				trigger: this.$refs.btn,
				onDragStart() {
					console.log('onDragStart'); //开始拖动
				},
				onDrag() {
					console.log('onDrag'); //拖动
					console.log(this.rotation); //旋转角度

				},
				onDragEnd() {
					console.log('onDragEnd'); //拖动结束
					that.rotateNum = this.rotation
				},
				onClick: function() {
					console.log("clicked");
					console.log(that.rotateNum);
				},
			})
		},
		methods: {

		}
	}
</script>

<style>
	.btn {
		width: 10em;
		height: 10em;
		/* transform:  rotate(-90deg); */
	}
</style>

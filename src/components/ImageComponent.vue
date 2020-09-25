<template>
	<div class="sticky top-0 pt-4">
		<div class="rounded border border-gray-200 shadow-sm px-2 pb-4">
			<img class="object-contain" :src="selectedImage">
		</div>
		<div class="grid grid-cols-3 gap-4 mt-6">
			<div class="col-span-1" @keyup="changeImage(0)" @click="changeImage(0)" tabindex="1">
				<div v-if="selectedImageIndex == 0" class="rounded border-2 border-gray-900 shadow-sm px-2">
					<img class="object-contain" src="../../public/img/kemper-front.jpg">
				</div>
				<div v-else class="rounded border border-gray-200 shadow-sm px-2">
					<img class="object-contain" src="../../public/img/kemper-front.jpg">
				</div>
			</div>
			<div class="col-span-1" @keyup="changeImage(1)" @click="changeImage(1)" tabindex="2">
				<div v-if="selectedImageIndex == 1" class="rounded border-2 border-gray-900 shadow-sm px-2">
					<img class="object-contain" src="../../public/img/kemper-angle.jpg">
				</div>
				<div v-else class="rounded border border-gray-200 shadow-sm px-2">
					<img class="object-contain" src="../../public/img/kemper-angle.jpg">
				</div>
			</div>
			<div class="col-span-1" @keyup="changeImage(2)" @click="changeImage(2)" tabindex="3">
				<div v-if="selectedImageIndex == 2" class="rounded border-2 border-gray-900 shadow-sm px-2">
					<img class="object-contain" src="../../public/img/kemper-rear.jpg">
				</div>
				<div v-else class="rounded border border-gray-200 shadow-sm px-2">
					<img class="object-contain" src="../../public/img/kemper-rear.jpg">
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">

export default {
	data() {
		return {
			selectedImage: 'img/kemper-front.jpg',
			selectedImageIndex: 0,
		}
	},
	methods: {
		changeImage(selectedImageIndex) {
			this.selectedImageIndex = selectedImageIndex
			if(selectedImageIndex == 0)
				this.selectedImage = 'img/kemper-front.jpg'
			else if(selectedImageIndex == 1)
				this.selectedImage = 'img/kemper-angle.jpg'
			else
				this.selectedImage = 'img/kemper-rear.jpg'
		},

	}
}
</script>

<style type="text/css"></style>
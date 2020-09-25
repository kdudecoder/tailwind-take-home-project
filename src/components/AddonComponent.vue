<template>
	<div class="mt-12">
		<p class="text-gray-900 font-medium text-lg">{{ addon.name }}</p>
		<div class="grid grid-rows-2 gap-4 mt-4">

			<div v-for="(option,index) in addon.options" :key="index" class="row-span-1 cursor-pointer" @click="addAddon(option.type, option.price)">
				<div class="rounded-lg p-4" :class="(addonType == option.type) ? 'border-2 border-gray-900' : 'border border-gray-300'">
					<div class="flex items-center justify-between w-full">
						<div class="text-sm">
							<h3 class="text-gray-900 font-medium">{{ option.heading }}</h3>
							<p v-if="option.description" class="text-gray-500 mt-2">
								{{ option.description }}
							</p>
						</div>
						<p v-if="option.price > 0" class="text-gray-900 text-sm">+ ${{ option.price }}</p>
					</div>						
				</div>				
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	props: {
		addon: {
			required: true
		},
		finalPrice :{
			required: true
		}
	},
	data() {
		return {
			addonType: 0,
			addonPrice: 0
		}
	},
	methods: {
		addAddon(buy,price) {
			if(buy != this.addonType) {
				let newPrice = this.finalPrice;

				if(buy == 0) {
					newPrice -= this.addonPrice;
				}
				else {
					newPrice += price;				
				}
				this.addonPrice = price;
				this.addonType = buy;

				this.addon['selected'] = buy;

				this.$emit('priceChanged', {price:newPrice, addonType:this.addonType});
			}
		},

	}
}
</script>

<style type="text/css">

</style>
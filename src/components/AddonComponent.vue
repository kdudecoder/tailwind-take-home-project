<template>
	<div class="mt-12">
		<p class="text-gray-900 font-medium text-lg">{{ addon.name }}</p>
		<div class="grid grid-rows-2 gap-4 mt-4">

			<div v-for="(option,index) in addon.options" :key="index" class="row-span-1 cursor-pointer">
				<div class="rounded-lg p-4 hover:border-gray-400" :class="(addonType == option.type) ? 'border-2 border-gray-900' : 'border border-gray-300'" @click="addAddon(option.type, option.price)" @keyup="addAddon(option.type, option.price)" tabindex="0">
					<div class="flex items-center justify-between w-full">
						<div class="text-sm" :class="(option.price>0) ? 'w-2/3':'w-full'">
							<h3 class="text-gray-900 font-medium">{{ option.heading }}</h3>
							<p v-if="option.description" class="text-gray-500 mt-2">
								{{ option.description }}
							</p>
						</div>
						<p v-if="option.price > 0" class="text-gray-900 text-sm w-1/3 text-right">+ ${{ option.price }}</p>
					</div>						
				</div>				
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import { EventBus } from '../main.js';

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

				EventBus.$emit('priceChanged', {price:newPrice, addonType:this.addonType});
			}
		},

	}
}
</script>

<style type="text/css">

</style>
<template>
	<div class="max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg xl:max-w-screen-xl mx-auto mt-16 px-4 sm:px-6 md:px-8 xl:px-12">
			<slot name="productHeading"></slot>
			<div class="grid grid-cols-2 gap-10 mt-6">
				<div class="col-span-1">
					<image-component></image-component>
				</div>
				<div class="col-span-1">
					<p class="text-gray-500 font-medium text-sm pt-4">Starting at</p>
					<p class="text-5xl font-extrabold">$ {{ finalPrice | formatNumber }}</p>
					<slot name="productDescription"></slot>
						
					<addon-component v-for="(addon,index) in addons" :key="index" :finalPrice="finalPrice" :addon="addon">
					</addon-component>	

					<specifications-component></specifications-component>
					<div class="h-40">
					</div>
				</div>
			</div>
		</div>
</template>

<script type="text/javascript">
	import ImageComponent from './ImageComponent'
	import SpecificationsComponent from './SpecificationsComponent'
	import AddonComponent from './AddonComponent'

	export default {
		props: {
			finalPrice: {
				required: true
			},
			addons: {
				required: true
			}
		},
		components: {ImageComponent, SpecificationsComponent, AddonComponent}
	}
</script>

<style type="text/css">
	
</style>
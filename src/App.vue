<template>
	<div id="app">
		<div class="max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg xl:max-w-screen-xl mx-auto mt-16 px-4 sm:px-6 md:px-8 xl:px-12">
			<h1 class="text-4xl font-extrabold text-gray-900">Get your Kemper Profiling Amp</h1>
			<h2 class="text-xl text-gray-500">All your favorite amps and effects, together in one little box</h2>
			<hr class="text-gray-300 mt-8">
			<div class="grid grid-cols-2 gap-10 mt-6">
				<div class="col-span-1">
					<image-component></image-component>
				</div>
				<div class="col-span-1">
					<p class="text-gray-500 font-medium text-sm pt-4">Starting at</p>
					<p class="text-5xl font-extrabold">$ {{ finalPrice | formatNumber }}</p>
					<p class="text-gray-900 text-lg mt-4">
						The KEMPER PROFILER™ is the leading-edge digital guitar amplifier and all-in-one effects processor.	
					</p>
					<p class="text-base text-gray-500 mt-2">
						Hailed as a game-changer by guitarists the world over, the PROFILER™ is the first digital guitar amp to really nail the full and dynamic sound of a guitar or bass amp.
					</p>
					<p class="text-base text-gray-500 mt-2">
						This is made possible by a radical, patented technology and concept which we call "PROFILING".
					</p>
						
					<addon-component v-for="(addon,index) in addons" :key="index" :finalPrice="finalPrice" @priceChanged="finalPrice = $event.price; powerAmp = $event.addonType" :addon="addon">
					</addon-component>	

					<specifications-component></specifications-component>
					<div class="h-40">
					</div>
				</div>
			</div>
		</div>
		<div class="fixed bottom-0 bg-gray-50 border-t border-gray-300 w-full">
			<div class="max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 xl:px-12 py-6">
				<div class="grid grid-cols-2 gap-6">
					<div class="col-span-1">
						<div class="grid grid-cols-2 gap-4">
							<div class="col-span-1">
								<div class="flex items-start">
									<svg class="h-8 w-8 fill-current text-gray-400" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd" />
									</svg>
									<div class="text-sm ml-4">
										<p class="text-gray-900">Free Shipping</p>
										<p class="text-gray-500">Get 2-day free shipping anywhere in North America</p>
									</div>

								</div>
							</div>
							<div class="col-span-1">
								<div class="flex items-start">
									<svg class="h-8 w-8 fill-current text-gray-400" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
									</svg>
									<div class="text-sm ml-4">
										<p class="text-gray-900">2 Year Warranty</p>
										<p class="text-gray-500">If anything goes wrong in the first two years, we'll replace it for free</p>
									</div>

								</div>
							</div>
						</div>
					</div>
					<div class="col-span-1">
						<div class="flex items-center justify-end">
							<div class="text-right">
								<p class="text-3xl text-gray-900 font-extrabold">
									$ {{ finalPrice | formatNumber }}
								</p>
								<p class="text-sm text-gray-500">
									Need financing?
									<span class="underline">Learn more</span>
								</p>
							</div>
							<button class="text-white bg-gray-900 px-4 py-3 ml-8 rounded">Buy now</button>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</div>
</template>

<script>

import ImageComponent from './components/ImageComponent'
import SpecificationsComponent from './components/SpecificationsComponent'
import AddonComponent from './components/AddonComponent'


export default {
	name: 'App',
	components: { ImageComponent, SpecificationsComponent, AddonComponent },
	data() {
		return {
			finalPrice: 1799,			
			formFactor: 0,
			powerAmp: 0,
			footController: 0,
			addons: [
			{
				name : 'Form Factor',
				options: [
				{
					type: 0,
					heading: 'Profiler Head',
					description: 'Compact amplifier head, perfect for a speaker cabinet or desk.',
					price: 0
				},
				{
					type: 1,
					heading: 'Profiler Rack',
					description: '3U rackmount version of the classic profiling amplifier.',
					price: 0
				}
				]
			},
			{
				name : 'Power Amp',
				options: [
				{
					type: 0,
					heading: 'None',
					description: 'Use in the studio or with your own power amp.',
					price: 0
				},
				{
					type: 1,
					heading: 'Powered',
					description: 'Built-in 600W solid state power amp.',
					price: 449
				}
				]
			},
			{
				name : 'Foot Controller',
				options: [
				{
					type: 0,
					heading: 'None',
					description: '',
					price: 0
				},
				{
					type: 1,
					heading: 'Profiler Remote Foot Controller',
					description: '',
					price: 449
				}
				]
			},
			]
		}
	},
	methods: {		
		chooseFormFactor(type) {
			this.formFactor = type;
		},
		addFootController(buy) {
			if(buy == 1 && !this.footController) {
				this.finalPrice += 499;
				this.footController = !this.footController;
			}
			if(buy == 0 && this.footController) {
				this.finalPrice -= 499;
				this.footController = !this.footController;
			}
		}
		
	},
	mounted () {
		document.addEventListener('scroll',  this.handleScroll);
	},

	destroyed: function () {
		document.removeEventListener('scroll', this.handleScroll);

	},
}
</script>

<style src="tailwindcss/tailwind.css"></style>

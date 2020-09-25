<template>
	<div id="app">
		<product-component :finalPrice="finalPrice" :addons="addons">
			<template v-slot:productHeading>
				<h1 class="md:text-center lg:text-left text-4xl font-extrabold text-gray-900 leading-tight">Get your Kemper Profiling Amp</h1>
				<h2 class="md:text-center lg:text-left text-xl text-gray-500">All your favorite amps and effects, together in one little box</h2>
				<hr class="text-gray-300 mt-8">
			</template>
			<template v-slot:productDescription>
				<p class="text-gray-900 text-lg mt-4">
					The KEMPER PROFILER™ is the leading-edge digital guitar amplifier and all-in-one effects processor.	
				</p>
				<p class="text-base text-gray-500 mt-2">
					Hailed as a game-changer by guitarists the world over, the PROFILER™ is the first digital guitar amp to really nail the full and dynamic sound of a guitar or bass amp.
				</p>
				<p class="text-base text-gray-500 mt-2">
					This is made possible by a radical, patented technology and concept which we call "PROFILING".
				</p>
			</template>
		</product-component>
		<footer-component :finalPrice="finalPrice"></footer-component>
	</div>
</template>

<script>

import {EventBus} from './main.js'
import ProductComponent from './components/ProductComponent'
import FooterComponent from './components/FooterComponent'


export default {
	name: 'App',
	components: { ProductComponent, FooterComponent },
	data() {
		return {
			finalPrice: 1799,			
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
				],
				selected: false
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
					price: 449				}
					],
					selected: false
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
					],
					selected: false
				},
				]
			}
		},
		mounted() {
			EventBus.$on('priceChanged', (payload) => {
				this.finalPrice = payload.price;
			})
		}
	}
	</script>

	<style src="tailwindcss/tailwind.css"></style>

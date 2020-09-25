<template>
	<div class="mt-12">
		<p class="text-gray-900 font-medium text-lg pb-2 border-b border-gray-200">Specifications</p>
		<div class="divide-y divide-gray-200">
			<div class="py-4" v-for="specification in specifications" :key="specification.name">
				<div class="flex items-center justify-between">
					<p class="text-gray-900 text-sm font-medium">{{ specification.name }}</p>
					<p class="text-gray-900 text-sm font-normal">{{ specification.value }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	data() {
		return {
			specifications: [
			{
				name: 'Amp Models',
				value: '200'
			},
			{
				name: 'Effects Loop',
				value: 'Yes'
			},
			{
				name: 'Inputs',
				value: '2 x 1/4"'
			},
			{
				name: 'Outputs',
				value: '1 x 1/4", 2 x XLR, 2 x 1/4"'
			},
			{
				name: 'MIDI I/O',
				value: 'In/Out/Thru'
			},
			{
				name: 'Height',
				value: '8.54"'
			},
			{
				name: 'Width',
				value: '14.88"'
			},
			{
				name: 'Depth',
				value: '6.81"'
			},
			{
				name: 'Weight',
				value: '11.73 lbs'
			},
			{
				name: '',
				value: ''
			},

			]
		}
	}
}
</script>

<style type="text/css">

</style>
<template>
	<div class="fixed bottom-0 bg-gray-50 border-t border-gray-300 w-full">
		<div class="max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-10 md:px-20 py-4 sm:py-6">
			<div class="grid sm:grid-cols-3 lg:grid-cols-2 gap-6">
				<div class="col-span-1 hidden sm:block">
					<div class="grid sm:grid-rows-2 lg:grid-cols-2 gap-4">
						<div class="sm:row-span-1 lg:col-span-1">
							<div class="flex sm:items-center lg:items-start">
								<svg class="h-8 w-8 fill-current text-gray-400" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd" />
								</svg>
								<div class="text-sm ml-4">
									<p class="text-gray-900">Free Shipping</p>
									<p class="text-gray-500 sm:hidden lg:block">Get 2-day free shipping anywhere in North America</p>
								</div>

							</div>
						</div>
						<div class="sm:row-span-1 lg:col-span-1">
							<div class="flex sm:items-center lg:items-start">
								<svg class="h-8 w-8 fill-current text-gray-400" viewBox="0 0 20 20" fill="currentColor">
									<path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
								</svg>
								<div class="text-sm ml-4">
									<p class="text-gray-900">2 Year Warranty</p>
									<p class="text-gray-500 sm:hidden lg:block">If anything goes wrong in the first two years, we'll replace it for free</p>
								</div>

							</div>
						</div>
					</div>
				</div>
				<div class="sm:col-span-2 lg:col-span-1">
					<div class="flex items-center justify-end">
						<div class="text-right">
							<p class="text-3xl text-gray-900 font-extrabold">
								$ {{ finalPrice | formatNumber }}
							</p>
							<p class="hidden sm:block text-sm text-gray-500">
								Need financing?
								<span class="underline">Learn more</span>
							</p>
						</div>
						<button class="text-white bg-gray-900 px-4 py-3 ml-8 rounded hover:bg-gray-700 focus:shadow-outline">Buy now</button>
					</div>
				</div>
			</div>
		</div>			
	</div>
</template>

<script type="text/javascript">

	export default {

		props: {
			finalPrice: {
				required: true
			},
		}
	}
</script>

<style type="text/css">

</style>
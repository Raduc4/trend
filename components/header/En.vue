<template>
  	<!-- Header -->
  	<header class="bg-slate-900 text-white py-4">
		<div class="max-w-7xl mx-auto px-4">
			<div class="flex flex-wrap items-center -mx-4">
				<div class="px-4">
					<!-- Logo -->
					<a href="/en/" class="relative">
						<img class="block h-12" src="/img/logo.svg" alt="" title="">
					</a>
					<!-- Logo -->
				</div>
				<div class="flex-1 px-4">
					<!-- Menu -->
					<nav class="">
						<div class="flex justify-end lg:hidden">
							<a href="#navigation" class="flex">
								<i class="w-7 h-7 bg-contain bg-center bg-no-repeat" style="background-image:url(/img/icons/menu.svg);"></i>
							</a>
						</div>
						<div id="navigation" class="flex flex-col lg:block fixed inset-0 z-50 lg:relative bg-slate-950 lg:bg-transparent">
							<div class="flex lg:hidden justify-between items-center space-x-4 bg-slate-900 p-4">
								<!-- Logo -->
								<a href="/en/" class="relative">
									<img class="block h-12" src="/img/logo.svg" alt="" title="">
								</a>
								<!-- Logo -->
								<a href="#" class="flex">
									<i class="w-7 h-7 bg-contain bg-center bg-no-repeat" style="background-image:url(/img/icons/x.svg);"></i>
								</a>
							</div>
							<ul class="flex-1 lg:flex-none flex flex-col lg:flex-row flex-wrap lg:justify-end lg:items-center px-4 pb-6 pt-8 lg:p-0 lg:-mx-4 font-medium text-white text-center space-y-6 lg:space-y-0">
								<li class="w-full lg:w-auto lg:px-4 text-2xl lg:text-lg">
									<a href="/en/ooh">OOH</a>
								</li>
								<li class="w-full lg:w-auto lg:px-4 text-2xl lg:text-lg">
									<a href="/en/radio">Radio</a>
								</li>
								<li class="w-full lg:w-auto lg:px-4 text-2xl lg:text-lg">
									<a href="/en/media">Media</a>
								</li>
								<li class="w-full lg:w-auto lg:px-4 text-2xl lg:text-lg">
									<a href="/en/brands">Brands</a>
								</li>
								<li class="flex-1 lg:hidden"></li>
								<li class="lg:pl-4 lg:pr-2">
									<div class="flex space-x-4">
										<a href="/" class="flex justify-center items-center w-10 h-10 text-lg bg-white bg-opacity-10 rounded-md hover:bg-opacity-30">
											Ro
										</a>
										<div class="flex-1 lg:flex-none flex justify-end">
											<div class="flex justify-end rounded-md overflow-hidden">
												<a target="_blank" href="https://www.facebook.com/TRENDSETER.MD" class="flex justify-center items-center w-10 h-10 bg-white bg-opacity-10 hover:bg-opacity-30">
													<i class="w-4 h-4 bg-contain bg-center bg-no-repeat" style="background-image:url(/img/icons/facebook.svg);"></i>
												</a>
												<a target="_blank" href="https://www.instagram.com/trendsetter_group_company" class="flex justify-center items-center w-10 h-10 bg-white bg-opacity-10 hover:bg-opacity-30">
													<i class="w-4 h-4 bg-contain bg-center bg-no-repeat" style="background-image:url(/img/icons/instagram.svg);"></i>
												</a>
												<a target="_blank" href="#" class="flex justify-center items-center w-10 h-10 bg-white bg-opacity-10 hover:bg-opacity-30">
													<i class="w-4 h-4 bg-contain bg-center bg-no-repeat" style="background-image:url(/img/icons/linkedin.svg);"></i>
												</a>
											</div>
										</div>
									</div>
								</li>
								<li class="w-full lg:w-auto lg:pr-4 lg:pl-2">
									<a href="/en/contacts" class="block bg-custom-1 hover:bg-white text-white hover:text-slate-950 rounded-md text-base font-bold px-8 py-2">
										Contact Us!
									</a>
								</li>
								<!-- ... -->
							</ul>
						</div>
					</nav>
					<!-- Menu -->
				</div>
			</div>
		</div>
	</header>
	<!-- Header -->
</template>

<script>
export default {
	layout: 'En',
  	name: 'HeaderEn',
}
</script>
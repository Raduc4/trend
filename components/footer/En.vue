<template>
  <!-- Footer -->
	<footer class="bg-slate-950 py-16 md:py-20 lg:py-24 text-white">
		<div class="max-w-5xl mx-auto px-4 space-y-8 md:space-y-12 lg:space-y-16">
			<!-- Logo -->
			<img class="block w-48 mx-auto" src="/img/logo.svg" alt="" title="">
			<!-- Logo -->
			<div class="max-w-sm mx-auto text-center">
				<!-- Contacts -->
				<strong class="text-lg">Our contacts</strong>
				<ol class="space-y-3 mt-4">
					<li>
						<a href="tel:+37322544433" class="flex items-center space-x-2">
							<span class="flex justify-center items-center w-10 h-10 bg-slate-900 rounded-md">
								<i class="w-4 h-4 bg-contain bg-center bg-no-repeat" style="background-image:url(/img/icons/phone.svg);"></i>
							</span>
							<span class="flex-1 text-left px-4 py-2 bg-slate-900 rounded-md">+373 22 54 44 33</span>
						</a>
					</li>
					<li>
						<a href="mailto:office@trendseter.md" class="flex items-center space-x-2">
							<span class="flex justify-center items-center w-10 h-10 bg-slate-900 rounded-md">
								<i class="w-4 h-4 bg-contain bg-center bg-no-repeat" style="background-image:url(/img/icons/email.svg);"></i>
							</span>
							<span class="flex-1 text-left px-4 py-2 bg-slate-900 rounded-md">office@trendseter.md</span>
						</a>
					</li>
					<li>
						<div class="flex items-center space-x-2">
							<span class="flex justify-center items-center w-10 h-10 bg-slate-900 rounded-md">
								<i class="w-4 h-4 bg-contain bg-center bg-no-repeat" style="background-image:url(/img/icons/phone.svg);"></i>
							</span>
							<span class="flex-1 text-left px-4 py-2 bg-slate-900 rounded-md">Str. Gheorghe Tudor 2B, MD-2028</span>
						</div>
					</li>
					<!-- ... -->
				</ol>
				<!-- Contacts -->
				<br><br>
				<!-- Social -->
				<strong class="text-lg">Social media</strong>
				<div class="flex justify-center space-x-2 mt-4">
					<a href="https://www.facebook.com/TRENDSETER.MD" class="flex justify-center items-center w-10 h-10 rounded-md bg-slate-900">
						<i class="w-4 h-4 bg-contain bg-center bg-no-repeat" style="background-image:url(/img/icons/facebook.svg);"></i>
					</a>
					<a href="https://www.instagram.com/trendsetter_group_company" class="flex justify-center items-center w-10 h-10 rounded-md bg-slate-900">
						<i class="w-4 h-4 bg-contain bg-center bg-no-repeat" style="background-image:url(/img/icons/instagram.svg);"></i>
					</a>
					<a href="#" class="flex justify-center items-center w-10 h-10 rounded-md bg-slate-900">
						<i class="w-4 h-4 bg-contain bg-center bg-no-repeat" style="background-image:url(/img/icons/linkedin.svg);"></i>
					</a>
				</div>
				<!-- Social -->
			</div>
			<!-- Copyright -->
			<p class="text-white text-opacity-60 text-sm text-center">Copyright © 2024 Trendseter.md</p>
			<!-- Copyright -->
		</div>
	</footer>
	<!-- Footer -->
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<script lang="ts">
	import wifi from '$lib/assets/wifi_5.png';
	import phone from '$lib/assets/phone.png';
	import remote from '$lib/assets/remote.png';
	import iot from '$lib/assets/iot.png';

	import type { learningObjectives } from '$lib/data';

	export let data: typeof learningObjectives[0];
	export let y: number;
</script>

<div id="iot" class="container grid w-full place-items-center md:grid-cols-2 gap-y-28">
	<div class="relative grid place-items-center md:order-1 w-4/6 md:w-full">
		<div
			class="fade-in absolute top-1/2 z-20 left-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2 w-2/4 md:w-52"
		>
			<img data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" src={wifi} alt="wifi" />
		</div>
		<div
			class="slide-in absolute -top-1/4 z-20 left-0 pointer-events-none -translate-x-1/2 -translate-y-1/2 w-2/6 md:w-40"
		>
			<img
				data-aos="fade-up-left"
				data-aos-anchor-placement="center-center"
				src={phone}
				alt="phone"
			/>
		</div>
			<!-- <div
				class="absolute rotate-in rotate-45 top-[80%] z-0 left-[65%] pointer-events-none -translate-x-1/2 -translate-y-1/2 w-3/6 md:w-60"
			>
				<img
					data-aos="fade-down-right"
					data-aos-anchor-placement="up-center"
					src={remote}
					alt="remote"
				/>
			</div> -->
		<div data-aos="zoom-in" data-aos-anchor-placement="up-center">
			<img class="w-[26rem]" src={iot} alt="iot" />
		</div>
		<div
			style="--cs-opacity: 0.6; --cs-ping-duration: 2s"
			class="bg-accent-focus cs-animate-ping -z-10 top-0 left-1/2 pointer-events-none transform absolute aspect-square w-2/4 md:w-[15rem] rounded-full opacity-60 blur-3xl"
		/>
		<div
			style="--cs-opacity: 0.6; --cs-ping-duration: 2s"
			class="bg-primary-focus cs-animate-ping -z-10 top-0 right-1/2 pointer-events-none transform absolute aspect-square w-2/4 md:w-[15rem] rounded-full opacity-60 blur-3xl"
		/>
		<div
			style="--cs-from-opacity: 0.4; --cs-to-opacity: 0.9;"
			class="bg-secondary-focus fade-in-out-custom -z-10 top-1/2 left-1/2 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 absolute aspect-square w-3/4 md:w-[25rem] rounded-full opacity-90 blur-3xl"
		/>
	</div>

	<div class="z-10">
		<article class="md:prose-lg text-center md:text-end prose-neutral mx-3 prose-sm">
			<h1
				data-aos-anchor-placement="up-center"
				data-aos="fade-up"
				class="text-secondary-focus eng-font bg-gradient-to-t font-bold"
			>
				{data.punchline}
			</h1>
			<p data-aos-anchor-placement="up-center" data-aos="fade-up">
				{data.body}
			</p>
		</article>
	</div>
</div>

<style lang="postcss">
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 100;
		}
	}

	@keyframes fade-in-out-custom {
		from {
			opacity: var(--cs-from-opacity);
		}
		to {
			opacity: var(--cs-to-opacity);
		}
	}

	@keyframes rotate-in {
		from {
			transform: rotate(30deg);
		}
		to {
			transform: rotate(70deg);
		}
	}

	@keyframes slide-in {
		from {
			transform: translateY(-25%);
		}
		to {
			transform: translateY(0%);
		}
	}

	.slide-in {
		animation: slide-in 1s ease-in-out infinite alternate-reverse;
	}
	.fade-in {
		animation: fade-in 2s ease-in-out alternate-reverse infinite;
	}

	.rotate-in {
		animation: rotate-in 3s ease-in-out alternate-reverse infinite;
	}

	.fade-in-out-custom {
		animation: fade-in-out-custom 2s ease-in-out alternate-reverse infinite;
	}

	.cs-animate-ping {
		animation: ping var(--cs-ping-duration) cubic-bezier(0, 0, 0.2, 1) infinite;
	}
</style>

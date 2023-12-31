<script lang="ts">
	import type { User } from './../firebase/actions/userAction.ts';
	import Countdown from './../components/Countdown.svelte';
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import comcampLogo from '$lib/assets/comcamp-22nd-logo.png';
	import { actionMenu, timeline } from '$lib/data';

	export let device: {
		isMobile: boolean;
		isTablet: boolean;
	};
	let animatedInitial = false;
	let splineSrc = import.meta.env.VITE_SPLICE_INDEX_SRC;
	export let authStateReady: Promise<User | null>;

	onMount(() => {
		setTimeout(() => {
			animatedInitial = true;
		}, 1000);
	});
</script>

<!-- content here -->
<div class="h-screen grid 2xl:container 2xl:mx-auto mt-20 w-full">
	{#if device.isTablet || !device.isMobile}
		{#await import('$lib/components/Splice.svelte') then Splice}
			<div id="wrapper" class="transition-opacity duration-500 opacity-60 lg:opacity-100 relative">
				<div class="absolute right-0 top-0">
					<Splice.default urlLoader={splineSrc} />
				</div>
			</div>
		{/await}
	{/if}
	{#if animatedInitial}
		<div in:fade={{ duration: 1500 }} class="relative" id="fade-pointers ">
			<div class="overflow-x-hidden">
				<div
					class="bg-secondary-focus pointer-events-none absolute -translate-x-1/2 top-0 left-0 aspect-square w-[40vw] 2xl:w-[40rem] opacity-40 rounded-full blur-3xl"
				/>
				<div
					class="top-0 bg-secondary pointer-events-none absolute left-0 aspect-square w-[50vw] 2xl:w-[50rem] rounded-full opacity-20 blur-3xl"
				/>
				<div
					class="bg-primary-focus pointer-events-none absolute top-[10%] md:top-0 right-0 aspect-square w-[35vw] 2xl:w-[35rem] rounded-full opacity-30 blur-3xl"
				/>
				<div
					class="bg-accent-focus pointer-events-none absolute bottom-0 top-1/4 lg:-top-[15%] left-1/4 lg:left-[45%] aspect-square w-[50vw] lg:w-[20rem] rounded-full opacity-30 blur-3xl"
				/>
			</div>
		</div>

		<div
			in:fade={{ duration: 2000 }}
			out:fly={{ y: -20, duration: 800 }}
			class="-translate-y-28 md:-translate-y-32 grid lg:grid-cols-2 h-full my-auto"
		>
			<div class="z-0">
				<div class=" flex gap-4 flex-col mx-4 justify-center items-center">
					<div class="relative">
						<img
							out:fly={{ y: -20, duration: 800 }}
							class="csmju-logo z-10 contrast-100 opacisty-90 md:opacity-100"
							src={comcampLogo}
							alt="comcamp-csmju-logo"
						/>
						<div
							class="bg-primary-focus left-[20%] -z-10 top-1/4 pointer-events-none absolute aspect-square w-[50vw] lg:w-[25rem] rounded-full opacity-30 blur-3xl"
						/>
					</div>

					<div
						class="compcamp-char -mt-20 sm:-mt-28 gradient-heading from-primary to-secondary eng-font text-flicker-out-glow"
					>
						<span>COMCAMP MJU</span>
					</div>
					<div
						class="gradient-heading text-center text-xl font-bold from-accent to-primary tracking-widest eng-font text-flicker-out-glow"
					>
						<span class="text-lg thai-font md:text-xl lg:text-2xl"
							>เปิดรับสมัครตั้งแต่วันที่ <br /> 5 ธันวาคม 2566 - 18 มกราคม 2567
						</span>
					</div>
					<div class="mt-4 flex flex-col items-center text-center">
						<Countdown countdownDate={timeline[4].date} />
						<span
							class="text-md thai-font md:text-base font-bold gradient-heading from-primary text-flicker-out-glow to-error tracking-widest lg:text-xl"
							>เคาท์ดาวน์นับถอยหลังเปิดค่าย 8 กุมภาพันธ์ 2567</span
						>
					</div>
				</div>
				<div id="register-button-container" class="flex mt-6 justify-center">
					{#await authStateReady}
						<span class="loading-spinner loading loading-md" />
						<!-- promise is pending -->
					{:then user}
						{#if user}
							<a href="/dashboard" role="button" class="btn btn-primary btn-md">
								<iconify-icon icon="material-symbols:dashboard" />
								เข้าสู่หน้าแดชบอร์ด</a
							>
						{:else}
							<a
								href={actionMenu.find((a) => a.name === 'register')?.link}
								class="btn btn-accent btn-md"
								role="button">{actionMenu.find((a) => a.name === 'register')?.label}</a
							>
						{/if}
					{/await}
				</div>
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Thai:400,500,600,700&display=swap&subset=thai');
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

	.csmju-logo {
		@apply w-auto sm:w-[40rem];
	}

	.compcamp-char {
		@apply gradient-heading text-center font-bold   tracking-widest text-3xl lg:text-5xl text-white;
	}

	.gradient-heading {
		@apply bg-clip-text text-transparent box-decoration-clone bg-gradient-to-br;
	}

	.thai-font {
		font-family: 'IBM Plex Sans Thai', sans-serif;
	}

	.eng-font {
		font-family: 'Roboto', sans-serif;
	}

	/* .centered {
		font-size: 5vw;
		position: absolute;
		left: 25%;
		top: 70%;
		transform: translate(-50%, -50%);
		letter-spacing: 0.12em;
		color: white;
		font-weight: 400;
	} */
</style>

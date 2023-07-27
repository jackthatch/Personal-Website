<script lang='ts'>
	import '../theme.postcss';
	// import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppBar, AppShell, Avatar, Drawer, Modal, drawerStore, type DrawerSettings } from '@skeletonlabs/skeleton';
	import Icon from '$lib/assets/github-mark.png';
	import Icon2 from '$lib/assets/1384014.png';
	import { onMount } from 'svelte';
	import Navigation from '$lib/Navigation.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';
  
	let isMobile = false;
  
	onMount(() => {
	  const mediaQuery = window.matchMedia('(max-width: 768px)'); // Adjust the maximum width as needed
	  isMobile = mediaQuery.matches;
  
	  const updateIsMobile = (event: { matches: boolean; }) => {
		isMobile = event.matches;
	  };
  
	  mediaQuery.addListener(updateIsMobile);
  
	  return () => {
		mediaQuery.removeListener(updateIsMobile);
	  };
	});

	const drawerSettings: DrawerSettings = {
		bgDrawer: 'bg-blue-700 text-white',
		bgBackdrop: 'bg-gradient-to-tr from-blue-500/75 via-white-500/50 to-red-500/25',
		width: 'w-[280px] md:w-[480px]',
		padding: 'p-4',
		rounded: 'rounded-xl',
		position: 'bottom',

	};

	async function openDrawer() {
		drawerStore.open(drawerSettings);
	}

  </script>
  
  <Modal />

<Drawer>
	<Navigation />
</Drawer>

  <AppShell>
	<svelte:fragment slot="header">
	  <AppBar>

		<svelte:fragment slot="lead">
			{#if !isMobile}
				<a href="/" class="card p-4 rounded-full variant-glass-tertiary font-bold">Jack's Page</a>
			{/if}
		</svelte:fragment>
		
		<svelte:fragment slot="default">
		  {#if !isMobile}
		  <div class="font-bold p-1 space-x-12">
			<a href="blog" class="ml-4 ">Blog</a>
			<a href="new" class="">Create Post</a>
			<a href="about" class="">About</a>
		  </div>
		  {/if}

		  {#if isMobile}
		  <div class="font-bold space-x-1">
			<!-- <a href="blog" class="card p-4 rounded-full variant-glass-tertiary">Blog</a>
			<a href="new" class="card p-4 rounded-full variant-glass-tertiary">Create Post</a>
			<a href="about" class="card p-4 rounded-full variant-glass-tertiary">About</a>
			 -->
			 <button on:click={openDrawer}>
				<span class="">
					<svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
					<rect width="100" height="20" />
					<rect y="30" width="100" height="20" />
					<rect y="60" width="100" height="20" />
					</svg>
				</span>
			</button>
		  </div>
		  {/if}
		</svelte:fragment>
		
		<svelte:fragment slot="trail">
		  {#if !isMobile}
		  <!-- <div class="font-bold p-1 space-x-4">
			<a href="signup" class="card p-4 rounded-full variant-glass-tertiary"> Sign Up </a>
		  </div> -->
		  {/if}
		  <LightSwitch />
		  <Avatar
			border="border-4 border-surface-300-600-token hover:!border-primary-500"
			cursor="cursor-pointer"
			initials="JT"
		  />
		</svelte:fragment>
	  </AppBar>
	</svelte:fragment>
  
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
  
	<svelte:fragment slot='pageFooter'>
	  <div class="logo-cloud grid-cols-1 lg:!grid-cols-2 gap-1">
		{#if !isMobile}
		<a class="logo-item" href="gh-redirect">
		  <span>
			<img class='github-icon' src={Icon} alt="Github Icon" style="filter: invert(70%) sepia(100%) saturate(200%) hue-rotate(180deg);" />
		  </span>
		  <span>Github</span>
		</a>
  
		<a class="logo-item" href="li-redirect">
		  <span>
			<img class='github-icon' src={Icon2} alt="Github Icon" style="filter: invert(70%) sepia(100%) saturate(200%) hue-rotate(180deg);" />
		  </span>
		  <span>LinkedIn</span>
		</a>
		{/if}
	  </div>
	</svelte:fragment>
	<!-- (footer) -->
  </AppShell>
  
  <style>
	.github-icon {
	  width: 60px;
	  height: 60px;  
	}
  
	.logo-cloud {
	  justify-content: center;
	}
	
  </style>
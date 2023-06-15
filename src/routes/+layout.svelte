<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppBar, AppShell, Avatar} from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/" class="card p-4 rounded-full">Jack's Page</a>
			</svelte:fragment>
			
			<svelte:fragment slot="default">

					<div class="font-bold p-1 space-x-3">
						<a href="blog" class="card p-4 rounded-full">Blog</a>
						<a href="new-post" class="card p-4 rounded-full">Create Post</a>
					</div>
				
			</svelte:fragment>
			
			<svelte:fragment slot="trail">
				<div class="font-bold p-1 space-x-4">
					<a href="signup" class="card p-4 rounded-full"> Sign Up </a>
				</div>
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
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>

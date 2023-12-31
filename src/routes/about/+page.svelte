<script lang='ts'>

	import { modalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	const modalPy: ModalSettings = {
		type: 'confirm',
		// Data
		title: 'Destiny Vault 2 Backend',
		body: 'This is a project I made for the game Destiny 2. The project lets users get data about their items from their account and store it in a database. The data is then used to display the items in a table and allow the user to move and equip items through API calls. The project is made with Python and uses the Destiny 2 API to get the data that is then stored on a locally hosted Postres DB. <br><br><br> Would you like to continue to GitHub?',
		// TRUE if confirm pressed, FALSE if cancel pressed
		response: (confirmed: boolean) => {
			if (confirmed) {
			window.open('https://github.com/jackthatch/d2_vault_project/tree/master','_blank');
			}
		},
	};

	const modalBlog: ModalSettings = {
		type: 'confirm',
		// Data
		title: 'Personal Blog', 
		body: 'Would you like to continue to GitHub?',
		// TRUE if confirm pressed, FALSE if cancel pressed
		response: (confirmed: boolean) => {
			if (confirmed) {
			window.open('https://github.com/jackthatch/skeleton-personal','_blank');
			}
		},
	};


	const modalBet: ModalSettings = {
		type: 'confirm',
		// Data
		title: 'Sports Betting Bot',
		body: 'This is a bot that I made to automate the process of betting on sports. The bot uses Selenium to scrape data from a sports betting website called DGFantasy. DGFantasy compares sports betting lines to find the best discrepancies and gives them to subscribers. The main issue with this website is that the picks appear on the page for 30 seconds before they are quickly fixed in the Sports Books favor. This bot automates the process of placing the bets and allows the user to get the best odds possible, without sitting at their computer all day. <br><br><br> Would you like to continue to GitHub?',
		// TRUE if confirm pressed, FALSE if cancel pressed
		response: (confirmed: boolean) => {
			if (confirmed) {
			window.open('https://github.com/jackthatch/DGF-Bot/tree/main/DGF%20Program','_blank');
			}
		},
	};

	const modalDVA: ModalSettings = {
		type: 'confirm',
		// Data
		title: 'Destiny 2 Vault App',
		body: 'This project rewrote the original python backend and added many new features. These new features include a much improved UI along with hosting through Vercel along with a SupaBase DB. This allows users to access the program online rather than downloading the software and running it from their local machine. <br><br><br> Would you like to continue to GitHub?',
		image: 'https://xcdezfzlpwnkrukbaxsi.supabase.co/storage/v1/object/public/Images/dimpic.png',
		response: (confirmed: boolean) => {
			if (confirmed) {
			window.open('https://github.com/jackthatch/skeleton-d2-gui','_blank');
		}
		},
	};

	const modalBhop: ModalSettings = {
		type: 'confirm',
		// Data
		title: 'Bunnyhopping Tool',
		body: 'This is a tool for the video game Counter Strike: Source. The tool helps players by providing data about their performance in game. Currently the tool prints the players speed each time they jump. <br><br><br> Would you like to continue to GitHub?',
		// TRUE if confirm pressed, FALSE if cancel pressed
		response: (confirmed: boolean) => {
			if (confirmed) {
			window.open('https://github.com/jackthatch/source-ssj','_blank');
			}
		},
	};

	async function pythonModal() {
		modalStore.trigger(modalPy);
	} 
	async function vaultModal() {
		modalStore.trigger(modalDVA);
	} 
	async function betModal() {
		modalStore.trigger(modalBet);
	} 
	async function blogModal() {
		modalStore.trigger(modalBlog);
	} 

	async function bhopModal() {
		modalStore.trigger(modalBhop);
	}

</script>

<main class="p-4">

<div class='card p-4 text-center my-2 w-full max-w-screen-lg mx-auto variant-ghost-tertiary'>

	<h1 class="font-bold mb-4">
		About Myself
	</h1>
		
	<p>
		Hello ! My name is Jackson Thatcher, I'm a passionate Sophomore Computer Science student at The University of Alabama in Huntsville. My main focus in university lies in mastering C++
		and delving into low-level programming. However, during my free time, I've taken the initiative to expand my skill set by learning TypeScript and SvelteKit to build impressive web apps. 
		Additionally, I've been sharpening my C++ skills by creating video game plugins for the game Counter Strike: Source. I'm also very interested in learning System Design and DevOps.<br><br>

		I'm actively seeking internships in the Huntsville, AL area, but I'm open to the idea of relocation or hybrid work arrangements. My enthusiasm for programming goes beyond academics, as I also engage in freelance work.
		If you're in need of a talented individual to build and maintain your website, feel free to reach out to me through one of my social media platforms (linked below) or via email at jthatcher128@gmail.com.



		<!-- Hello! My name is Jackson Thatcher and I'm a Sophomore Computer Science student and The University of Alabama in Huntsville. 
		My current University studies revolve mostly around C++ and low-level programming. In my free time I've been
		learning TypeScript and SvelteKit for building web apps, as well as applying my C++ skills by building video game plugins.
		I am a self-driven and passionate programmer currently looking for internships in the Huntsville, AL area. I am also interested in relocation or hybrid work.
		I also do free-lance work, if you are looking for someone to build and maintain your website please reach out to one of my socials linked at the bottom or by email
		at jthatcher128@gmail.com. My software interests are in System Design and DevOps but open to work in any field. -->
	</p>

	</div>

	<div class="text-center font-bold mb-4">
		<h1> Currently Working With: </h1>
	</div>	

	<div class='card p-4 text-center my-2 w-full max-w-screen-lg mx-auto variant-ghost-tertiary'>
		<div class="flex items-center justify-center">
		  <h1 class="mx-4 font-bold">Python</h1>
		  <img class='w-24 h-24' src='https://xcdezfzlpwnkrukbaxsi.supabase.co/storage/v1/object/public/Images/python.png' alt='Python-Icon'>
		</div>
		<div class="card p-4 h-10 flex justify-center items-center variant-filled-surface opacity-75 my-3">
			<button on:click={pythonModal} class="btn"> Destiny 2 Vault Backend </button>
		</div>
		<div class="card p-4 h-10 flex justify-center items-center variant-filled-surface opacity-75 ">
			<button on:click={betModal} class="btn"> Sports Betting Bot </button>
		</div>
	  </div>

	<div class='card p-4 text-center my-2 w-full max-w-screen-lg mx-auto variant-ghost-tertiary'>
		<div class="flex items-center justify-center">
		  <h1 class="mx-4 font-bold">Sveltekit</h1>
		  <img class='w-24 h-24' src='https://xcdezfzlpwnkrukbaxsi.supabase.co/storage/v1/object/public/Images/svelte.png' alt='Svelte-Icon'>
		</div>
		<div class="card p-4 h-10 flex justify-center items-center variant-filled-surface opacity-75 my-3">
			<button on:click={vaultModal} class="btn"> Destiny Vault App </button>
		</div>
		<div class="card p-4 h-10 flex justify-center items-center variant-filled-surface opacity-75">
			<button on:click={blogModal} class="btn"> This Website ! </button>
		</div>
	</div>

	<div class='card p-4 text-center my-2 w-full max-w-screen-lg mx-auto variant-ghost-tertiary'>
		<div class="flex items-center justify-center">
		  <h1 class="mx-4 font-bold">TS</h1>
		  <img class='w-24 h-24' src='https://xcdezfzlpwnkrukbaxsi.supabase.co/storage/v1/object/public/Images/ts.png' alt='TS-Icon'>
		</div>
		<div class="card p-4 h-10 flex justify-center items-center variant-filled-surface opacity-75 my-3">
			<button on:click={vaultModal} class="btn"> Destiny Vault App </button>
		</div>
	</div>

	<div class='card p-4 text-center my-2 w-full max-w-screen-lg mx-auto variant-ghost-tertiary'>
		<div class="flex items-center justify-center">
		  <h1 class="mx-4 font-bold">C++</h1>
		  <img class='w-24 h-24' src='https://xcdezfzlpwnkrukbaxsi.supabase.co/storage/v1/object/public/Images/c++.png' alt='C++-Icon'>
		</div>
		<div class="card p-4 h-10 flex justify-center items-center variant-filled-surface opacity-75 my-3">
			<button on:click={bhopModal} class="btn"> Bunnyhopping SSJ Tool </button>
		</div>
		<div class="card p-4 h-10 flex justify-center items-center variant-filled-surface opacity-75 my-3">
			<button class="btn"> University Studies </button>
		</div>
	</div>

	<div class='card p-4 text-center my-2 w-full max-w-screen-lg mx-auto variant-ghost-tertiary'>
		<div class="flex items-center justify-center">
		  <h1 class="mx-4 font-bold">PostgreSQL</h1>
		  <img class='w-24 h-24' src='https://xcdezfzlpwnkrukbaxsi.supabase.co/storage/v1/object/public/Images/pgsql.svg' alt='PostresSQL-Icon'>
		</div>
		<div class="card p-4 h-10 flex justify-center items-center variant-filled-surface opacity-75 my-2">
			<button on:click={vaultModal} class="btn"> Destiny Vault Backend & App </button>
		</div>
		<div class="card p-4 h-10 flex justify-center items-center variant-filled-surface opacity-75">
			<button on:click={blogModal} class="btn"> This Website ! </button>
		</div>
	</div>

	<div class='card p-4 text-center my-8 flex flex-wrap items-center justify-center w-full max-w-screen-lg mx-auto variant-ghost-tertiary overflow'>
		<h1 class="p-4 font-bold"> Tools and Other: </h1>
		<img class='w-36 h-36 p-4' src="https://xcdezfzlpwnkrukbaxsi.supabase.co/storage/v1/object/public/Images/supabase.jpg" alt="Supabase-Logo">
		<img class='w-36 h-36 p-4' src="https://xcdezfzlpwnkrukbaxsi.supabase.co/storage/v1/object/public/Images/git.png" alt="Git-Logo">
		<img class='w-36 h-36 p-4' src="https://xcdezfzlpwnkrukbaxsi.supabase.co/storage/v1/object/public/Images/nvim.png" alt="Git-Logo">
		<img class='w-36 h-36 p-4' src="https://xcdezfzlpwnkrukbaxsi.supabase.co/storage/v1/object/public/Images/vercel.jpg" alt="Vercel-Logo">
		<img class='w-36 h-36 p-4' src="https://xcdezfzlpwnkrukbaxsi.supabase.co/storage/v1/object/public/Images/arch1.png" alt="Arch-Logo">
	</div>

</main>

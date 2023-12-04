<script lang="ts">
    import { supabase } from '$lib/config/supabaseClient';
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';

	const modalSuccess: ModalSettings = {
		type: 'alert',
		title: 'Success',
		body: 'Account successfully created!'
	}
	
	const modalFail: ModalSettings = {
		type: 'alert',
		title: 'Failure to create account',
		body: 'Failed to create new account, please try again!'
	}
	
	const modalUserTaken: ModalSettings = {
		type: 'alert',
		title: 'Username already in use',
		body: 'Please choose another username or try to login'
	}

	async function createdModal(){
		modalStore.trigger(modalSuccess);
	}

	async function failedModal(){
		modalStore.trigger(modalFail);
	}

	async function userTakenModal() {
		modalStore.trigger(modalUserTaken);
	}

	// async function checkUsername(user: string): Promise<boolean> {
	// 	try {
	// 		const { data, error } = await supabase
	// 		.from('Users')
	// 		.select('username')
	// 		.eq('username', user);

	// 		if (error) {
	// 		console.error('Error fetching data: ', error);
	// 		return false;
	// 		} else {
	// 		// Return true if data is not null and the array length is greater than 0
	// 		return !!data && data.length > 0;
	// 		}
	// 	} catch (error) {
	// 		console.error('An error occurred:', error);
	// 		return false; // Return false in case of any errors
	// 	}
	// }


    async function createUser(event: Event) {
      event.preventDefault();
  
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
		
	  const email = formData.get('email') as string;
      const username = formData.get('username') as string;
      const password = formData.get('password') as string;
  
      try {
        // Create the new user
        const { data, error } = await supabase.from('Users').insert([{ username, password , email}]);
  
        if (error) {
          console.error('Error creating new user:', error);
		  failedModal();
          return;
        }
  
        console.log('User created:', data);
  
        // Reset form fields
        form.reset();

		createdModal();
  
        // Redirect to blog page with the updated articles

      } catch (err) {
        console.error('Error creating new user:', err);
      }
    }
</script>


<main>	
	
	<div class="container mx-auto flex justify-center my-10">
	
			<form on:submit={createUser} class="card p-4 flex flex-col gap-3 w-3/4">

				<h1> Email </h1>
				<input class="input" type="text" placeholder="Email" name="email" />
				<h1> Username </h1>
				<input class="input" type="text" placeholder="Username" name="username" />
				<h1> Password </h1>
				<input class="input" type="text" placeholder="Password" name="password" />
	
				<button type="submit" class="btn variant-filled-primary self-center my-2"> Create User </button>
			
        		<a href="/login" class="btn variant-ghost-surface self-center"> Already Have and Account? </a> 

      </form>
			
	
	</div>

</main>


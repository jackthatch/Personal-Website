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

	async function createdModal(){
		modalStore.trigger(modalSuccess);
	}


	async function failedModal(){
		modalStore.trigger(modalFail);
	}


    async function createUser(event: Event) {
      event.preventDefault();
  
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
  
      const username = formData.get('username') as string;
      const password = formData.get('password') as string;
  
      try {
        // Create the new user
        const { data, error } = await supabase.from('Users').insert([{ username, password }]);
  
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

<div class="container mx-auto flex justify-center my-10">

	<h1> Signup Under Construction</h1>
	

</div>



<div class="container mx-auto flex justify-center my-10">

		<form on:submit={createUser} class="card p-4 flex flex-col gap-3 w-1/2">
			
			<h1> Username </h1>
      		<input class="input" type="text" placeholder="Username" name="username" />
      		<h1> Password </h1>
      		<input class="input" type="text" placeholder="Password" name="password" />


			<button type="submit" class="btn variant-ghost-surface self-center my-4"> Create User </button>
		</form>
		

</div>

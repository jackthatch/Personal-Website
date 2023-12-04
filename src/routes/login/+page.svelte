<script lang='ts'>
	import { goto } from '$app/navigation';


    import { supabase } from '$lib/config/supabaseClient';
	import { Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
    
    const modalLogin: ModalSettings = {
		type: 'confirm',
		title: 'Success',
		body: 'You are now logged in!'
	}

	async function loggedInModal(){
		modalStore.trigger(modalLogin);
	}

    const modalLoginFail: ModalSettings = {
		type: 'alert',
		title: 'Failure',
		body: 'Failure to login, please check username and password.'
	}

	async function loggedFailModal(){
		modalStore.trigger(modalLoginFail);
	}

    async function loginUser(event: Event) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
            
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;

        try {
            

            if (!username || !password) {
                console.error('Username and password are required.');
                return;
            }

            const { data, error } = await supabase
                .from('Users')
                .select('username, password')
                .eq('username', username)
                .eq('password', password)
                .single();

            if (error) {
                loggedFailModal();
                form.reset();
                throw error;
            }

            if (data) {
                console.log('Login successful!');
                loggedInModal();
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('password', password);
                form.reset();
            } 

        } catch (error) {
            console.error('Error checking credentials:', error);
        }
    }

</script>

<main>
    <div class="container mx-auto flex justify-center my-10">
	
        <form on:submit={loginUser} class="card p-4 flex flex-col gap-3 w-1/2">

            <h1> Username </h1>
            <input class="input" type="text" placeholder="Username" name="username" />
            <h1> Password </h1>
            <input class="input" type="text" placeholder="Password" name="password" />

            <button type="submit" class="btn variant-filled-primary self-center my-4"> Login </button>
        </form>
        

</div>
</main>
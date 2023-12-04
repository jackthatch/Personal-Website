<script lang='ts'>

    async function loginUser(event: Event) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
            
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;


    }

</script>

<main>
    <div class="container mx-auto flex justify-center my-10">
	
        <form on:submit={loginUser} class="card p-4 flex flex-col gap-3 w-1/2">

            <h1> Username </h1>
            <input class="input" type="text" placeholder="Username" name="username" />
            <h1> Password </h1>
            <input class="input" type="text" placeholder="Password" name="password" />

            <button type="submit" class="btn variant-ghost-surface self-center my-4"> Login </button>
        </form>
        

</div>
</main>
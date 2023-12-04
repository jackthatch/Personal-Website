<script lang='ts'>
	import { drawerStore } from '@skeletonlabs/skeleton';


    

    function drawerClose(): void {
        drawerStore.close();

    }
</script>



<nav class='list-nav p-8'>
    <ul>
        <li><a href="/" on:click={drawerClose}>Home</a></li>
        <li><a href="/about" on:click={drawerClose}>About</a></li>
        <li><a href="/blog" on:click={drawerClose}>Blog</a></li>
        <li><a href="/new" on:click={drawerClose}>Create Post</a></li>
        <li><a href="/signup" on:click={drawerClose}>Sign Up</a></li>
    </ul>
</nav>
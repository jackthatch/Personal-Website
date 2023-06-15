<script lang='ts'>
	
  import type { PageData } from './$types'

  export let data: PageData

  $: ({ articles } = data)  

</script>

<div class='grid grid-cols-2 gap-3 p-24'>
  {#each articles as article}
    <div class="m-2 space-y-2">
      <div class="card p-3 flex flex-col">
        <header class="font-bold">{article.title}</header>
        <p class="flex-grow overflow-auto my-6">{article.content}</p>
        <p class=" font-thin">Posted: {article.createdAt}</p>
      </div>
    </div>
  {/each}
  
</div>

<style>
  .card {
    border: 0.0px solid #8c07b4c5;
    border-radius: 4px;
  }

  .flex-grow {
    overflow: hidden;
    word-wrap: break-word;
  }

  .overflow-auto {
    max-height: 150px; /* Adjust the maximum height as needed */
  }
</style>
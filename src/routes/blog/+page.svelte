<script lang='ts'>
	
  import type { PageData } from './$types'

  export let data: PageData

  $: ({ articles } = data)  

</script>

<div class='grid grid-cols-2 gap-3'>
  {#each articles as article}
    <div class="m-2 space-y-2">
      <div class="card p-3 flex flex-col">
        <header class="font-bold">{article.title}</header>
        <p class="flex-grow">{article.content}</p>
      </div>
    </div>
  {/each}
</div>

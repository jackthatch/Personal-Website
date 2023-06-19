<script lang='ts'>
  import type { PageData } from './$types'

  export let data: PageData

  $: ({ articles } = data)  
</script>

<style>
  .card {
    border: 0.0px solid #8c07b4c5;
    border-radius: 4px;
  }

  .flex-grow {
    flex-grow: 1;
    word-wrap: break-word;
  }

  .overflow-auto {
    max-height: 150px; /* Adjust the maximum height as needed */
  }

  /* Media Query for Mobile */
  @media (max-width: 767px) {
    .grid-cols-2 {
      grid-template-columns: 1fr; /* Single column layout */
    }
    .p-24 {
      padding: 12px; /* Adjust the padding as needed */
    }
  }
</style>

<div class='grid gap-3 p-24'>
  {#each articles.slice().reverse() as article}
    <div class="m-2 space-y-2">
      <div class="card p-3 flex flex-col">
        <header class="font-bold">{article.title}</header>
        <p class="flex-grow my-6">{article.content}</p>
        <p class="font-thin">Posted: {article.createdAt}</p>
      </div>
    </div>
  {/each}
</div>

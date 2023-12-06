<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/config/supabaseClient';

  interface Article {
    id: number;
    title: string;
    content: string;
    created_at: string;
    user: string
  }

  let articles: Article[] = [];

  onMount(async () => {
    try {
      const { data, error } = await supabase.from('Articles').select('*').order('id');

      if (error) {
        console.error('Error fetching articles:', error);
        return;
      }

      articles = data || [];
    } catch (err) {
      console.error('Error fetching articles:', err);
    }
  });
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
  
<main>

  <div>
    {#each articles.reverse() as article (article.id)}
      <div class="m-8 space-y-2">
        <div class="card p-4 my-2 w-full max-w-screen-lg mx-auto variant-ghost-tertiary">
          <header class="font-bold">{article.title}</header>
          <p class="flex-grow my-4">{article.content}</p>
          <p class="">User: {article.user}</p>
          <p class="font-thin">Posted: {article.created_at}</p>
          
        </div>
      </div>
    {/each}
  </div>

</main>
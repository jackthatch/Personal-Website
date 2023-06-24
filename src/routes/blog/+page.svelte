<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/config/supabaseClient';

  interface Article {
    id: number;
    title: string;
    content: string;
    created_at: string;
  }

  let articles: Article[] = [];

  onMount(async () => {
    try {
      const { data, error } = await supabase.from('Articles').select('*');

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

<div class="grid gap-3 p-24">
  {#each articles.slice().reverse() as article}
    <div class="m-2 space-y-2">
      <div class="card p-3 flex flex-col">
        <header class="font-bold">{article.title}</header>
        <p class="flex-grow my-6">{article.content}</p>
        <p class="font-thin">Posted: {article.created_at}</p>
      </div>
    </div>
  {/each}
</div>
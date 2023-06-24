<script lang="ts">
    import { supabase } from '$lib/config/supabaseClient';
    import { goto } from '$app/navigation';
  
    async function createArticle(event: Event) {
      event.preventDefault();
  
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
  
      const title = formData.get('title') as string;
      const content = formData.get('content') as string;
  
      try {
        // Create the new article
        const { data, error } = await supabase.from('Articles').insert([{ title, content }]);
  
        if (error) {
          console.error('Error creating article:', error);
          return;
        }
  
        console.log('Article created:', data);
  
        // Fetch the updated list of articles
        const { data: articles } = await supabase.from('Articles').select('*');
  
        // Reset form fields
        form.reset();
  
        // Redirect to blog page with the updated articles
        goto('/sb-test', { state: { articles } });
      } catch (err) {
        console.error('Error creating article:', err);
      }
    }
  </script>
  
  <div class="container h-full mx-auto gap-8 flex flex-col py-4">
    <form on:submit={createArticle} class="card p-4 flex flex-col gap-3">
      <h1> Title </h1>
      <input class="input" type="text" placeholder="Title..." name="title" />
      <h1> Content </h1>
      <textarea name="content" class="textarea h-64" rows="4" placeholder="Enter some long form content."></textarea>
      <!-- <h1> Tags </h1>
      <InputChip bind:value={tags} name="tags" placeholder="Tags..." /> -->
      <button type="submit" class="btn variant-ghost-primary self-end"> Create Entry </button>
    </form>
  </div>
  
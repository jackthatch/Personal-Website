
<div class="container h-full mx-auto gap-8 flex flex-col py-4">
    <form action="?/createArticle" method="POST" class="card p-4 flex flex-col gap-3">
        <h1> Title </h1>
        <input class="input" type="text" placeholder="Title..." name="title"/>
        <h1> Content </h1>
        <textarea name="content" class="textarea h-64" rows="4" placeholder="Enter some long form content." />
        <!-- <h1> Tags </h1>
        <InputChip bind:value={tags} name="tags" placeholder="Tags..." /> -->
        <button type="submit" class="btn variant-ghost-primary self-end"> Create Entry </button>
    </form>
</div>
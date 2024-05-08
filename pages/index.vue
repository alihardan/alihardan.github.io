<script setup>
const title = "Ali Hardan | علی حردان";
const description = "Ali Hardan's Personal Site";
useSeoMeta({
  title,
  ogTitle: title,
  description: description,
  ogDescription: description,
});
</script>
<template>
  <div>
    <h3 class="font-black text-[0.900rem]">Welcome</h3>
    <p>🫠</p>
  </div>
  <ul dir="rtl" class="mt-12 list-inside list-['-_']">
    <ContentList
      :query="{ path: '/blog', sort: [{ date: -1 }] }"
      v-slot="{ list }"
    >
      <li v-for="post in list" :key="post._path">
        [ {{ new Date(post.date).toLocaleDateString("fa-IR") }} ]
        <NuxtLink
          class="underline hover:bg-zinc-300 hover:text-black"
          :to="post._path"
          >{{ post.title }}</NuxtLink
        >
      </li>
    </ContentList>
  </ul>
</template>

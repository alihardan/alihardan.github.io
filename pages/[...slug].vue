<template>
  <main dir="rtl">
    <ContentDoc v-slot="{ doc }">
      <article class="prose dark:prose-invert text-sm max-w-none">
        <h1 class="font-black text-[0.900rem] mb-8">{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>

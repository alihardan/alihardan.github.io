<script setup>
const colorMode = useColorMode();

const myColorMode = computed({
  get() {
    if (colorMode.value == "system") return "light";
    return colorMode.value;
  },

  set(newValue) {
    colorMode.preference = newValue;
  },
});
</script>
<template>
  <div
    class="antialiased bg:white text-black dark:bg-black dark:text-zinc-300 text-sm font-mono"
  >
    <div class="min-h-screen max-w-xl mx-auto flex flex-col px-4 sm:px-0">
      <header
        class="mt-6 py-3 border-y border-dashed border-black dark:border-zinc-300"
      >
        <nav class="flex justify-between">
          <select
            v-model="myColorMode"
            class="border rounded px-2 w-24 h-6 bg-white border-zinc-200 dark:bg-black dark:text-white dark:border-zinc-800"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>

          <ul class="flex gap-4">
            <li>
              <NuxtLink class="hover:bg-zinc-300 hover:text-black" href="/"
                >/home</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </header>
      <main class="container mx-auto py-6">
        <NuxtPage />
      </main>
      <footer
        class="mt-auto py-3 border-t border-dashed border-black dark:border-zinc-300"
      >
        GitHub:
        <a
          class="underline hover:bg-zinc-300 hover:text-black"
          href="https://github.com/alihardan"
          target="_blank"
          >@alihardan</a
        >
        | Telegram:
        <a
          class="underline hover:bg-zinc-300 hover:text-black"
          href="https://t.me/alihardan"
          target="_blank"
          >@alihardan</a
        >
        | Email:
        <a
          class="underline hover:bg-zinc-300 hover:text-black"
          href="mailto:alihardanc@gmail.com"
          >alihardanc@gmail.com</a
        >
        | Design:
        <a
          class="underline hover:bg-zinc-300 hover:text-black"
          href="https://github.com/b2a3e8/jekyll-theme-console"
          target="_blank"
          >jekyll-theme-console</a
        >
      </footer>
    </div>
  </div>
</template>

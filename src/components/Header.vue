<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ThemeToggle from './ThemeToggle.vue'
import Code from '../icons/Code.vue'
import ArrowUp from '../icons/ArrowUp.vue'


const props = defineProps(['initialY'])
const y = ref(props.initialY)

const goTop = () => {
  document.body.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  const updateScroll = () => {
    y.value = window.scrollY
  }
  window.addEventListener('scroll', updateScroll)
  window.addEventListener('resize', updateScroll)

  return () => {
    window.removeEventListener('scroll', updateScroll)
    window.removeEventListener('resize', updateScroll)
  }
})

const isOpen = ref(false)
</script>

<template>
  <header
    class="sticky z-50 top-0 duration-200 px-4 border-b border-solid"
    :class="{
      'py-4 dark:bg-black bg-slate-200 border-primary border-b-2': y > 0,
      'py-6 bg-transparent border-transparent': y <= 0,
    }">
    <nav class="flex flex-row items-center justify-between max-w-[1400px] mx-auto">
      <div
        class="flex gap-4 items-center cursor-pointer text-primary hover:text-primary/80">
        <span class="inline-block">
        
        </span>
        <a href="/">
        <h1 class="font-medium text-xl">
          <b class="font-bold poppins mr-1">Liam Smets</b>
        </h1>
    </a>
      </div>

      <div class="flex gap-4 items-center ml-auto relative">
        <ThemeToggle />
        <button
          aria-label="expand mobile menu button"
          @click="isOpen = !isOpen"
          class="md:hidden block p-2 absolute -top-1 right-0"
          :class="{
            open: isOpen,
            'focus:outline-none': true,
          }">
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>

      <nav class="items-center flex-row hidden md:flex">
        <div class="flex pr-3">
          <div class="sm:flex items-center gap-4 text-center hidden">
            <a
              href="/projects"
              class="hover:text-primary hover:underline transition">
              <p>Projects</p>
            </a>
            <a
              href="/about"
              class="hover:text-primary hover:underline transition">
              <p>About me</p>
            </a>
            <a
              href="/contact"
              class="hover:text-primary hover:underline transition">
              <p>Contact</p>
            </a>
          </div>
        </div>
        <a
          href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7234193095888658436"
          target="_blank">
          <button
            class="buttonShadow relative overflow-hidden px-5 py-2 group rounded-full bg-black text-white dark:bg-white dark:text-slate-950">
            <div
              class="absolute top-0 right-full w-full h-full bg-primary opacity-20 group-hover:translate-x-full z-0 duration-200" />
            <h2 class="relative z-9 md:whitespace-normal whitespace-nowrap">
             Newsletter Linkedin
            </h2>
          </button>
        </a>
      </nav>
    </nav>

    <nav
      v-show="isOpen"
      @click="isOpen = false"
      class="md:hidden p-4 mt-2 flex flex-col gap-2 text-center font-bold"
      :class="{
        'py-4 dark:bg-slate-950 bg-slate-200 border-primary  dark:border-green-950 ':
          y > 0,
        'py-6 bg-transparent border-transparent': y <= 0,
      }">
      <a
        href="#projects"
        aria-label="Projects page link"
        class="border rounded p-2 border-primary animate-link">
        Projects
      </a>
      <a
        href="#about"
        aria-label="About me page link"
        class="border rounded p-2 border-primary animate-link">
        About me
      </a>
      <a
        href="#contact"
        aria-label="Contact page link"
        class="border rounded p-2 border-primary animate-link">
        Contact
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        aria-label="Contact page link"
        class="rounded p-2 bg-primary animate-link text-black">
        Get in touch
      </a>
    </nav>

    <div class="fixed bottom-0 right-0 p-10 z-[10]">
      <button
        aria-label="go to top button"
        @click="goTop"
        class="rounded-full bg-slate-600 text-primary px-3 sm:px-4 hover:bg-slate-500 cursor-pointer aspect-square grid place-items-center"
        :class="{ hidden: y < 20 }">
        <ArrowUp />
      </button>
    </div>
  </header>
</template>

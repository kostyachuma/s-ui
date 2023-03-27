<template>
  <inputs />
  <!-- <h1>Selfwork UI Kit</h1>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/inputs">Inputs</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/buttons">Buttons</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/links">Links</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/tags">Tags</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/badges">Badges</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/headers">Headers</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/footers">Footers</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/paginations">Paginations</nuxt-link>
      </li>
    </ul>
  </nav> -->
</template>


<script lang="ts">
import Inputs from '@/pages/inputs.vue'

export default {
  components: {
    Inputs,
  }
}

// all places use vue basic syntax

//for example

//import { useFiltersStore } from '~/stores/filters'
//import { storeToRefs } from 'pinia'

//export default {
//  async setup() {
//    const { locale, t } = useI18n()
//    const localePath = useLocalePath()

//    return {
//      locale,
//      t,
//    }
//  },

//  data() {
//    return {
//      layout: 'main',
//      inputVal: ref(''),
//    };
//  },

//  methods: {
//    async logClient() {
//      await useFetch('/api/logs/client', {
//        method: 'post',
//        body: {
//          _csrf: this.csrf,
//          level: 'info',
//          message: 'log',
//          service: 'swc-frontend-client',
//        }
//      })
//    }
//  }
//}
</script>

<!-- <style lang="scss">
</style> -->

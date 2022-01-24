<template>
  <VButton class="donate" :size="size">
    <img
      class="icon margin-right-small padding-top-smaller"
      :src="require('@creativecommons/cc-assets/icons/cc-heart-filled.svg')"
    />
    <slot default />
  </VButton>
</template>

<script>
  import VButton from '../VButton/VButton'
  import { sized } from '@/mixins/sized'

  export default {
    name: 'DonateButton',
    mixins: [sized],
    components: { VButton }
  }
</script>

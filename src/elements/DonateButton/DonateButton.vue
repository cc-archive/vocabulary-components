<template>
  <VButton class="donate" :size="size">
    <img
      class="icon margin-right-small padding-top-smaller"
      :src="ccHeartFilledIcon"
    />
    <slot default />
  </VButton>
</template>

<script>
  import VButton from '../VButton/VButton'
  import { sized } from '@/mixins/sized.js'
  import ccHeartFilledIcon from '@creativecommons/cc-assets/icons/cc-heart-filled.svg'

  export default {
    name: 'DonateButton',
    mixins: [sized],
    components: { VButton },
    data () {
      return {
        ccHeartFilledIcon
      }
    }
  }
</script>

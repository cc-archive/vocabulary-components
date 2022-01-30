<template>
  <div>
    <VButton @click="modalVisible = true">Open Modal</VButton>
    <app-modal
      v-if="modalVisible"
      title="App Modal"
      @close="modalVisible = false"
    >
      <div class="meta-card">
        <hr class="margin-bottom-bigger" />
        <div
          class="modal-content padding-left-bigger padding-right-bigger padding-bottom-bigger"
        >
          <p>This is App modal content</p>
          <p>
            When adding a modal, you have to handle it's 'close' event to close
            it from the parent component.
          </p>
        </div>
      </div>
    </app-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modalVisible: false,
    };
  },
};
</script>

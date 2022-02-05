<template>
  <div>
    <div class="buttons">
      <VButton :size="size" theme="primary">Primary</VButton>

      <VButton :size="size" theme="success">Success</VButton>

      <VButton :size="size" theme="info">Info</VButton>

      <VButton :size="size" href="https://creativecommons.org" target="_blank">
        Link
      </VButton>
      <VButton :size="size" theme="text">Text</VButton>
    </div>
    <h2>Props</h2>
    <label for="size">
      <code>size</code>
    </label>
    <select v-model="size" name="size">
      <option value="tiny">Tiny</option>
      <option value="small">Small</option>
      <option value="normal">Normal</option>
      <option value="medium">Medium</option>
      <option value="big">Big</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      size: "normal",
    };
  },
};
</script>

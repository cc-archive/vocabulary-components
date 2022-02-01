<template>
  <VHeader>
    <template #logo>
      <img :src="CCSearchLogo" alt="The CC search logo" />
    </template>
    <template #menu-items>
      <NavItem tag="a" href="/whatever" label="Item One" />
      <NavItem
        tag="a"
        href="/whatever"
        label="Item External"
        :isExternal="true"
      />
      <NavDropdown label="Item Three">
        <NavItem tag="a" href="/whatever" label="Item Three A" />
        <NavItem tag="a" href="/whatever" label="Item Three B" />
      </NavDropdown>
    </template>
  </VHeader>
</template>
<script>
import CCSearchLogo from "@creativecommons/cc-assets/logos/products/search.svg?inline";
export default {
  data() {
    return {
      CCSearchLogo,
    };
  },
};
</script>

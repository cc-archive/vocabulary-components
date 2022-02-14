<template>
  <div class="navbar">
    <!-- <Locale :languages="languages" :selectedLanguage="selectedLanguage" /> -->
    <!-- Incomplete -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        { name: "English", nativeName: "English" },
        { name: "Japanese", nativeName: "日本語" },
        { name: "Russian", nativeName: "Русский" },
        { name: "Spanish", nativeName: "Español" },
      ],
      selectedLanguage: "English",
    };
  },
};
</script>

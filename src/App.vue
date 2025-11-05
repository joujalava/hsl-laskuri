<script setup lang="ts">
import TicketCalculatorVue from "./components/TicketCalculator.vue";
import "agnostic-vue/dist/index.css";
import "agnostic-vue/dist/common.min.css";
import { Card } from "agnostic-vue";
</script>

<template>
  <div class="root">
    <header>
      <h4 class="p16 h4 text-center">HSL Ticket Calculator</h4>
    </header>

    <main>
      <Card class="card p18" is-border is-rounded>
        <TicketCalculatorVue />
      </Card>
    </main>

    <footer class="p24">
      <a
        class="m8"
        href="https://staticfiles.hsl.fi/globalassets/hsl/lippujen-hinnat_a4_01012025_en_final.pdf"
        >Ticket prices 2025</a
      >
    </footer>
  </div>
</template>
<style scoped>
body {
  margin: 0;
}
.root {
  font-family: var(--agnostic-font-family-body);
  font-size: var(--agnostic-body);
  color: var(--agnostic-font-color);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
footer {
  text-align: end;
  background-color: var(--agnostic-gray-light);
  width: 100%;
  margin-top: auto;
}

.card {
  display: block;
  margin: auto;
  margin-block: 10px 20px;
  max-width: 480px;
}
</style>

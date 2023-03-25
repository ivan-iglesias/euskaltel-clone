<script setup>
import faqs from '@/data/FAQs.json';
import FAQ from '@/components/FAQ.vue';
import IconArrowDown from '@/components/icons/IconArrowDown.vue';
import IconInternet from '@/components/icons/IconInternet.vue';
import IconLandline from '@/components/icons/IconLandline.vue';
import IconMobile5g from '@/components/icons/IconMobile5g.vue';
import IconTv from '@/components/icons/IconTv.vue';
</script>

<template>
  <section class="faq-section">
    <div class="wrapper">
      <h2>Te aclaramos aquí las dudas más frecuentes</h2>

      <FAQ v-for="faq in faqs" :question="faq.question" :answer="faq.answer" />

      <div class="faq-section__all" >
        <div class="faq-section__center show-tablet">
          Tengo dudas sobre:
          <IconLandline class="faq-section__icon ml-4" /> Fijo
          <IconInternet class="faq-section__icon ml-4" /> Internet
          <IconMobile5g class="faq-section__icon ml-4" /> Móvil
          <IconTv class="faq-section__icon ml-4" /> TV
        </div>
        <a
          href="#"
          class="link faq-section__center"
        >Ver todas <IconArrowDown class="faq-section__icon rotate-270"/></a>
      </div>

    </div>
  </section>
</template>

<style lang="scss">
.faq-section {
  text-align: center;
  padding: 3rem 0;
  background-color: var(--color-grey-200);
}

.faq-section__all {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem 0;
  font-size: .9rem;
}

.faq-section__icon {
  height: 16px;
  width: 16px;
  color: var(--color-primary);
  margin: 0 .5rem;
}

.faq-section__center {
  display: flex;
  align-items: center;
}
</style>

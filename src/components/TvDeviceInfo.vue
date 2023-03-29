<script setup>
import {ref} from 'vue';
import BaseButton from '@/components/base/BaseButton.vue';

const deco = 'deco';
const edonon = 'edonon';
const selectedImage = ref(deco);
const images = {
  deco: 'deco-android-tv-4k.jpg',
  edonon: 'edonon-tv.png'
};
</script>

<template>
  <div class="tv-device-info">
    <img
      class="tv-device-info__image"
      :src="'./images/tv/' + images[selectedImage]"
      :alt="selectedImage"
    >

    <div class="tv-device-info__content">
      <div class="tv-device-info__description">
        <p v-show="selectedImage == deco">Tus Apps y juegos favoritos en tu televisión. Tan fácil como usar el móvil. <a href="#" class="link" target="_self">+ info</a></p>

        <p v-show="selectedImage == edonon">Disfruta de todo el contenido de tu TV en tu ordenador, móvil o tablet con la nueva App. <a href="#" class="link" target="_self">+ info</a></p>
      </div>

      <div class="tv-device-info__buttons">
          <BaseButton
            @on-click-button="selectedImage = deco"
            :class="{
              'tv-device-info__button': true,
              'tv-device-info__button--unselected': selectedImage != deco,
            }"
          >Deco 4K Android TV</BaseButton>

          <BaseButton
            @on-click-button="selectedImage = edonon"
            :class="{
              'tv-device-info__button': true,
              'tv-device-info__button--unselected': selectedImage != edonon,
            }"
          >Edonon</BaseButton>
      </div>

    </div>
  </div>
</template>

<style lang="scss">
.tv-device-info {
  text-align: center;
  background-color: var(--color-grey-200);
  border-radius: var(--border-radius);
  max-width: 608px;
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 100%;
  font-size: .9rem;
  margin: 0 auto;

  @include for-tablet() {
    font-size: 1rem;
  }
}

.tv-device-info__image {
  width: 100%;
  height: 100%;
  height: auto;
}

.tv-device-info__content {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.tv-device-info__description {
  background-color: #000000ad;
  color: var(--color-light);
  padding: 8px;
  height: 80px;
  text-align: initial;

  p {
    font-weight: 700;
  }
}

.tv-device-info__buttons {
  background-color: var(--color-dark);
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
}

.tv-device-info__button {
  min-width: 49%;
  font-weight: 400;
}

.tv-device-info__button--unselected {
  color: var(--color-light);
  background-color: transparent;
}
</style>

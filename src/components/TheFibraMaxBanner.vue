<script setup>
import BaseButton from '@/components/base/BaseButton.vue';

const onClick = () => console.log(`Fibramax`);
</script>

<template>
  <div class="wrapper center">
    <div class="fibra-max-banner">

      <div class="fibra-max-banner__left">
        <h3 class="fibra-max-banner__title">fibra MAX de Euskaltel, la fibra elevada a la máxima potencia</h3>

        <p>fibra MAX es una red que permite velocidades de navegación de <strong>hasta 10 Gbps simétricos</strong>. Además, fibra MAX dispone de otras ventajas como una mayor cobertura en el hogar gracias a la tecnología <strong>WiFi 6 y más capacidad de navegación</strong> con varios dispositivos conectados.</p>

        <div class="fibra-max-banner__button-container">
          <BaseButton
            @on-click-button="onClick()"
            class="fibra-max-banner__button"
          >Lo quiero</BaseButton>
        </div>
      </div>

      <div class="fibra-max-banner__right">
        <img
          class="fibra-max-banner__logo"
          src="/images/fibramax/fibramax-logo.png"
          alt="fibra-max"
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.fibra-max-banner {
  border-radius: var(--border-radius);
  color: var(--color-light);
  padding: 1.5rem;
  margin: 3rem 0;
  background-image: url('/images/fibramax/fibramax.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column-reverse;

  @include for-laptop() {
    flex-direction: row;
    padding: 3rem 6rem;
  }

  &:before {
    border-radius: var(--border-radius);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
}

.fibra-max-banner__left {
  max-width: 560px;

  @include for-laptop() {
    padding-right: 3rem;
  }
}

.fibra-max-banner__right {
  display: flex;
  padding-bottom: 2rem;
  align-self: center;

  @include for-laptop() {
    padding-bottom: unset;
  }
}

.fibra-max-banner__title {
  font-weight: 700;
  margin-bottom: 1rem;
}

.fibra-max-banner__button-container {
  display: flex;
  justify-content: center;

  @include for-laptop() {
    justify-content: start;
  }
}

.fibra-max-banner__button {
  margin-top: 2rem;
  max-width: 18rem;
  width: 100%;
}

.fibra-max-banner__logo {
  max-width: 200px;

  @include for-laptop() {
    max-width: 300px;
  }

  @include for-desktop() {
    max-width: 400px;
  }
}
</style>

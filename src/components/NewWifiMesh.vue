<template>
  <div class="wrapper">
    <div class="new-wifi-mesh">
      <div class="new-wifi-mesh__content">
        <img
          class="new-wifi-mesh__image"
          src="/images/devices/wifi-mesh.png"
          alt="wifi-mesh"
        >
        <p class="new-wifi-mesh__title">Nuevo WiFi Mesh</p>
        <p class="text-primary">Mayor velocidad en tu casa</p>
        <p>Conocer más ></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.new-wifi-mesh {
  border-radius: var(--border-radius);
  background-color: var(--color-dark);
  color: var(--color-light);
  padding: 1rem;
  background-image: url('/images/logo-small-orange.svg');
  background-position: -25% -40px;
  background-repeat: no-repeat;
  background-size: 40%;

  @include for-laptop() {
    background-position: -35% -40px;
  }

  @include for-desktop() {
    background-position: -40% -40px;
  }
}

.new-wifi-mesh__content {
  padding-left: 6rem;


  @include for-tablet() {
    padding-left: 10rem;
  }

  p {
    margin: 0.5rem;
  }
}

.new-wifi-mesh__image {
  position: absolute;
  max-width: 121px;
  left: -32px;
  top: -12px;

  @include for-tablet() {
      max-width: unset;
    left: -42px;
    top: -52px;
  }
}

.new-wifi-mesh__title {
  font-weight: 500;
  font-family: var(--font-family-primary);
}
</style>

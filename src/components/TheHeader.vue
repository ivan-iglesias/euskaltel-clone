<script setup>
import BaseButton from "@/components/base/BaseButton.vue";

import IconLogo from "@/components/icons/IconLogo.vue";
import IconInternet from "@/components/icons/IconInternet.vue";
import IconLandline from "@/components/icons/IconLandline.vue";
import IconMobile5g from "@/components/icons/IconMobile5g.vue";
import IconTv from "@/components/icons/IconTv.vue";
import IconShop from "@/components/icons/IconShop.vue";
import IconAlarmak from "@/components/icons/IconAlarmak.vue";

const onCmnClick = () => console.log('CMN Click');

</script>

<template>
  <header class="header">

    <div class="header__secondary show-desktop">
      <div class="wrapper">
        <div class="header__secondary-nav">

          <div>
            <ul class="header__links links-pipe">
              <li><a class="header__secondary-link header__secondary-link--active" href="#">Particulares</a></li>
              <li><a href="#" class="header__secondary-link">Autónomos y Negocios</a></li>
              <li><a href="#" class="header__secondary-link">Empresas</a></li>
            </ul>
          </div>

          <div class="header__secondary-right">
            <ul class="header__links links-pipe mr-2">
              <li><a href="#" class="header__secondary-link">Ayuda</a></li>
              <li><a href="#" class="header__secondary-link">Contacto</a></li>
            </ul>

            <ul class="header__links links-pipe">
              <li><a href="#" class="header__secondary-link header__secondary-link--active">ES</a></li>
              <li><a href="#" class="header__secondary-link">EU</a></li>
            </ul>
          </div>

        </div>
      </div>
    </div>

    <div class="header__primary">
      <div class="wrapper">
        <nav class="header__primary-nav">

          <a href="#" title="Icono Euskaltel">
            <IconLogo />
          </a>

          <ul class="header__links header__links--wide show-desktop">
            <li><a href="#" class="header__primary-link"><IconInternet class="mr-2" />Fibra + Móvil</a></li>
            <li><a href="#" class="header__primary-link"><IconMobile5g class="mr-2" />Móvil</a></li>
            <li><a href="#" class="header__primary-link"><IconShop class="mr-2" />Smartphones</a></li>
            <li><a href="#" class="header__primary-link"><IconTv class="mr-2" />Televisión</a></li>
            <li><a href="#" class="header__primary-link"><IconAlarmak class="mr-2" />Alarmak</a></li>
          </ul>

          <div>
            <BaseButton
              type="white"
              @on-click-button="onCmnClick()"
            >
              <IconLandline class="mr-2" />900 825 606
            </BaseButton>
          </div>

        </nav>
      </div>
    </div>

  </header>
</template>

<style lang="scss">
.header {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 100;

  &__secondary {
    background: var(--color-grey-200);
  }

  &__secondary-nav {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
  }

  &__secondary-right {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
  }

  &__secondary-link {
    color: var(--color-text);
    text-decoration: none;
    cursor: pointer;
    font-size: .8rem;

    &--active {
      color: var(--color-primary);
      font-weight: 700;
    }
  }

  &__primary {
    background: var(--color-primary);
    color: white;
  }

  &__primary-nav {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 0;
  }

  &__primary-link {
    align-items: center;
    display: inline-flex;
    text-decoration: none;
    cursor: pointer;
    color: white;
    font-weight: 700;
  }

  &__links {
    display: flex;
    flex-direction: row;
    list-style: none;

    &--wide {
      gap: 40px;
    }
  }
}
</style>

<script setup>
import IconLogo from '@/components/icons/IconLogo.vue';
import IconFacebook from '@/components/icons/SocialNetworks/IconFacebook.vue';
import IconTwitter from '@/components/icons/SocialNetworks/IconTwitter.vue';
import IconYoutube from '@/components/icons/SocialNetworks/IconYoutube.vue';
import IconLinkedin from '@/components/icons/SocialNetworks/IconLinkedin.vue';
import FooterAccordion from '@/components/FooterAccordion.vue';
import footerLinks from '@/data/FooterLinks.json';
</script>

<template>
  <footer class="footer">
    <div class="wrapper">

      <div class="footer__section">
        <IconLogo />
      </div>

      <hr class="show-laptop">

      <div class="footer__links">
        <FooterAccordion v-for="group in footerLinks" :title="group.title" :links="group.links" />
      </div>

      <hr class="show-laptop">

      <div class="footer__section">
        <ul class="footer__legal-links links-pipe">
          <li><a class="link link--light" href="#">Condiciones e información legal</a></li>
          <li><a class="link link--light" href="#">Política de Cookies</a></li>
          <li><a class="link link--light" href="#">Aviso Legal</a></li>
          <li><a class="link link--light" href="#">Política de Privacidad</a></li>
          <li><a class="link link--light" href="#">Calidad de servicio</a></li>
          <li><a class="link link--light" href="#">Canal Ético</a></li>
          <li><a class="link link--light" href="#">Plataforma de resolución de conflictos</a></li>
          <li><a class="link link--light" href="#">Conócenos</a></li>
          <li><a class="link link--light" href="#">Tiendas</a></li>
          <li><a class="link link--light" href="#">Sala de prensa</a></li>
        </ul>
      </div>

      <div class="footer__section footer__copyright">
        <p>© Euskaltel, S.A. Todos los derechos reservados.</p>

        <div class="footer__social-network-links">
          <a class="footer__social-network-link" href="#" aria-label="Facebook"><IconFacebook /></a>
          <a class="footer__social-network-link" href="#" aria-label="Twitter"><IconTwitter /></a>
          <a class="footer__social-network-link" href="#" aria-label="Youtube"><IconYoutube /></a>
          <a class="footer__social-network-link" href="#" aria-label="Linkedin"><IconLinkedin /></a>
        </div>
      </div>

    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background: var(--color-dark);
  color: var(--color-light);
  width: 100%;

  @include for-mobile() {
    .links-pipe li {
      margin: 0;
    }
  }
}

.footer__section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 0;

  @include for-tablet() {
    flex-direction: row;
    align-items: center;
  }
}

.footer__links {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include for-laptop() {
    flex-direction: row;
    padding: 2rem 0;
  }
}

.footer__legal-links {
  display: flex;
  flex-direction: row;
  list-style: none;
  flex-wrap: wrap;
  font-size: .8rem;
}

.footer__copyright {
  padding: 1rem 0 2rem 0;
  font-size: .8rem;
  color: var(--color-grey-400);
  flex-direction: column-reverse;

  @include for-tablet() {
    flex-direction: row;
  }
}

.footer__social-network-links {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @include for-tablet() {
    margin-bottom: 0rem;
  }
}

.footer__social-network-link {
  svg {
    height: 2rem;
    width: 2rem;
    color: var(--color-light);
  }
}
</style>

<script setup lang="ts">
// TODO: gen
</script>

<template>
  <section id="projects" class="projects w">
    <div class="container-lg projects__content">
      <h2 class="projects__title h2">
        Проекты
      </h2>
      <div class="projects__cards w projects__cards_3">
        <div class="projects__card project-card w">
          <img
            src="/images/projects/projects4.png"
            alt="Проект компании StilArt"
            class="project-card__image w"
          >
          <div class="project-card__info">
            <h3 class="h2 project-card__title">
              Шоу рум IKEA
            </h3>
            <p>В разработке...</p>
          </div>
        </div>
        <div class="projects__card project-card w">
          <img
            src="/images/projects/projects5.png"
            alt="Проект компании StilArt"
            class="project-card__image w"
          >
          <div class="project-card__info">
            <h3 class="h2 project-card__title">
              Шоу рум IKEA
            </h3>
            <p>В разработке...</p>
          </div>
        </div>
        <div class="projects__card project-card w">
          <img
            src="/images/projects/projects6.png"
            alt="Проект компании StilArt"
            class="project-card__image w"
          >
          <div class="project-card__info">
            <h3 class="h2 project-card__title">
              Шоу рум IKEA
            </h3>
            <p>В разработке...</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.projects {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  &__cards {
    display: grid;
    min-height: 90dvh;

    &_3 {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;

      .projects__card:nth-child(2) {
        grid-row-start: span 2;
      }
    }
  }
}

.project-card {
  min-height: 350px;
  overflow: hidden;
  z-index: 2;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &__image {
    position: absolute;
    object-fit: cover;
    height: 100%;
    transition: 0.2s ease;
  }

  &:hover &__image {
    scale: 1.05;
    filter: brightness(0.7);
  }

  &:hover &__info {
    opacity: 1;
  }

  &__info {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    z-index: 3;
    color: white;
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }
}

@media (width < 800px) {
  .project-card {
    &__image {
      filter: brightness(0.7);
    }

    &__info {
      opacity: 1;
    }
  }
}

@media (width < 580px) {
  .projects {
    &__cards {
      &_3 {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>

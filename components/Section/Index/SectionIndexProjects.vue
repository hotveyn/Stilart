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
            alt="project"
            class="project-card__image w"
          >
        </div>
        <div class="projects__card project-card w">
          <img
            src="/images/projects/projects5.png"
            alt="project"
            class="project-card__image w"
          >
        </div>
        <div class="projects__card project-card w">
          <img
            src="/images/projects/projects6.png"
            alt="project"
            class="project-card__image w"
          >
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
    height: 90dvh;
    max-height: 850px;

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
  transition: .2s;
  overflow: hidden;
  z-index: 2;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px #3a3a3a;
    z-index: 3;
    transform: translateX(20px);
    border-radius: 2px;
  }

  &:nth-child(2) {
    height: 100%;

    &:hover {

      transform: translateX(-20px);
    }
  }

  &__image {
    object-fit: cover;
    height: 100%;
  }
}
</style>

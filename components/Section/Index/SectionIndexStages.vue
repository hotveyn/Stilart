<script setup lang="ts">
// TODO: анимация автопереходов
</script>

<template>
  <section id="stages" class="stages w">
    <div class="container-bg stages__content">
      <h2 class="h2 stages__title">
        Этапы работ
      </h2>
      <div class="stages__grid stages-grid w">
        <div class="stages-grid__cards">
          <div class="stages-grid__cards-unit">
            <div class="stages-grid__unit">
              <p class="stages-grid__number">
                1
              </p>
            </div>
            <div class="stages-grid__card sg-card">
              <h3 class="sg-card__title">
                Проект
              </h3>
              <p class="sg-card__description">
                Детальный план дизайна интерьера, который включает в себя выбор
                цветовой гаммы, расстановку мебели, выбор текстильных изделий и
                других элементов декора. Проект помогает клиенту понять, как
                будет выглядеть их интерьер, и дает возможность внести изменения
                до начала реализации.
              </p>
            </div>
          </div>
          <div class="stages-grid__cards-unit">
            <div class="stages-grid__unit">
              <p class="stages-grid__number">
                2
              </p>
            </div>
            <div class="stages-grid__card sg-card">
              <h3 class="sg-card__title h3">
                Смета
              </h3>
              <p class="sg-card__description">
                Оценка стоимости ремонтных и отделочных работ, необходимых для
                реализации проекта дизайна интерьеров. Составление сметы
                является важным этапом процесса создания дизайна интерьеров,
                поскольку позволяет определить финансовые затраты и спланировать
                бюджет проекта.
              </p>
            </div>
          </div>
          <div class="stages-grid__cards-unit">
            <div class="stages-grid__unit">
              <p class="stages-grid__number">
                3
              </p>
            </div>
            <div class="stages-grid__card sg-card">
              <h3 class="sg-card__title h3">
                Ремонт
              </h3>
              <p class="sg-card__description">
                Обновление и восстановление жилых или коммерческих помещений.
                Может включать в себя замену поверхностей, установку новых
                материалов, изменение планировки и другие работы, необходимые
                для того, чтобы помещение выглядело свежим и современным.
              </p>
            </div>
          </div>
          <div class="stages-grid__cards-unit">
            <div class="stages-grid__unit">
              <div class="stages-grid__number stages-grid__number_final">
                <img src="../../../assets/icons/check.svg" alt="c">
              </div>
            </div>
          </div>
        </div>
        <span class="stages-grid__line" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.stages {
  &__grid {
    margin-top: 30px;
  }
}

.stages-grid {
  position: relative;
  display: flex;
  flex-direction: column;

  &__cards {
    display: grid;
    height: 100%;
    grid-template-columns: repeat(3, 1fr) 47px;
    column-gap: adpval(20, 45, 1700, 900);
  }

  &__cards-unit {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__line {
    position: absolute;
    width: 100%;
    display: block;
    height: 2px;
    background-color: $black;
    top: 24px;
    z-index: -1;
  }

  &__number {
    width: 47px;
    height: 47px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 1px solid $black;
    font-size: 24px;
    font-weight: 500;
    z-index: 2;
    background-color: $white;

    &_final {
      outline-color: $tree;
      background-color: $tree;
    }
  }
}

.sg-card {
  height: 100%;
  padding: adpval(10, 20, 1700, 900);
  border: 1px solid $black;
  border-radius: 4px;

  &__title {
    font-size: adpval(24, 32, 1700, 900);
    font-style: normal;
    font-weight: 500;
    line-height: 145%;
  }

  &__description {
    margin-top: 20px;
    font-size: adpval(16, 32, 1700, 900);
    font-weight: 500;
    line-height: 145%;
  }
}

@media (width < 900px) {
  .stages-grid {
    flex-direction: row-reverse;

    &__cards {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 40px;
    }

    &__cards-unit {
      gap: 30px;
      flex-direction: row-reverse;
    }

    &__line {
      position: absolute;
      height: 100%;
      width: 2px;
      display: block;
      background-color: $black;
      top: 0;
      right: 24px;
      z-index: -1;
    }
  }
}
</style>

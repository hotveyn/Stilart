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
        <div class="stages-grid__unit">
          <p class="stages-grid__number">
            1
          </p>
        </div>
        <div class="stages-grid__unit">
          <p class="stages-grid__number">
            2
          </p>
        </div>
        <div class="stages-grid__unit">
          <p class="stages-grid__number">
            3
          </p>
        </div>
        <div class="stages-grid__unit">
          <div class="stages-grid__number stages-grid__number_final">
            <img src="../../assets/icons/check.svg" alt="c">
          </div>
        </div>
        <div class="stages-grid__card sg-card">
          <h3 class="sg-card__title h3">
            Проект
          </h3>
          <p class="sg-card__description">
            Детальный план дизайна интерьера, который включает в себя выбор
            цветовой гаммы, расстановку мебели, выбор текстильных изделий и
            других элементов декора. Проект помогает клиенту понять, как будет
            выглядеть их интерьер, и дает возможность внести изменения до начала
            реализации.
          </p>
        </div>
        <div class="stages-grid__card sg-card">
          <h3 class="sg-card__title h3">
            Смета
          </h3>
          <p class="sg-card__description">
            Оценка стоимости ремонтных и отделочных работ, необходимых для
            реализации проекта дизайна интерьеров. Составление сметы является
            важным этапом процесса создания дизайна интерьеров, поскольку
            позволяет определить финансовые затраты и спланировать бюджет
            проекта.
          </p>
        </div>
        <div class="stages-grid__card sg-card">
          <h3 class="sg-card__title h3">
            Ремонт
          </h3>
          <p class="sg-card__description">
            Обновление и восстановление жилых или коммерческих помещений. Может
            включать в себя замену поверхностей, установку новых материалов,
            изменение планировки и другие работы, необходимые для того, чтобы
            помещение выглядело свежим и современным.
          </p>
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
  display: grid;
  grid-template-columns: repeat(3, 1fr) 47px;
  grid-template-rows: 47px 1fr;
  column-gap: 45px;
  row-gap: 20px;

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
  padding: 20px;
  border: 1px solid $black;
  border-radius: 4px;

  &__description {
    margin-top: 20px;
    font-size: 24px;
    font-weight: 500;
    line-height: 145%;
  }
}
</style>

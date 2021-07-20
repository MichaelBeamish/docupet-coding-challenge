<template>
  <div class="pet-sprite">
    <div class="d-flex justify-content-center">
      <span class="sprite" :class="'sprite-' + petType"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PetSprite',
  props: {
    petType: String
  }
}
</script>

<style scoped>
  .sprite {
    border-radius: 50%;
    width: 153px;
    height: 153px;
    margin: 0.5em;
    position: relative;
  }
  /* SINGLE IMAGE OF 16 ANIMAL ICONS */
  /* 4 Rows / 4 Columns */
  /* 153px apart each */
  
  /* ROW 1 */
  .sprite-cat {
    background: url(../assets/img/pet_icons.jpg) 0px 0px;
  }
  .sprite-dog {
    background: url(../assets/img/pet_icons.jpg) -153px 0px;
  }
  .sprite-ferret {
    background: url(../assets/img/pet_icons.jpg) -306px 0px;
  }
  .sprite-parrot {
    background: url(../assets/img/pet_icons.jpg) -459px 0px;
  }
  /* ROW 2 */
  .sprite-fish {
    background: url(../assets/img/pet_icons.jpg) 0px -153px;
  }
  .sprite-spider {
    background: url(../assets/img/pet_icons.jpg) -153px -153px;
  }
  .sprite-mouse {
    background: url(../assets/img/pet_icons.jpg) -306px -153px;
  }
  .sprite-turtle {
    background: url(../assets/img/pet_icons.jpg) -459px -153px;
  }
  /* ROW 3 */
  .sprite-rabbit {
    background: url(../assets/img/pet_icons.jpg) 0px -306px;
  }
  .sprite-snake {
    background: url(../assets/img/pet_icons.jpg) -153px -306px;
  }
  .sprite-snail {
    background: url(../assets/img/pet_icons.jpg) -306px -306px;
  }
  .sprite-raccoon {
    background: url(../assets/img/pet_icons.jpg) -459px -306px;
  }
  /* ROW 4 */
  .sprite-pig {
    background: url(../assets/img/pet_icons.jpg) 0px -459px;
  }
  .sprite-horse {
    background: url(../assets/img/pet_icons.jpg) -153px -459px;
  }
  .sprite-hedgehog {
    background: url(../assets/img/pet_icons.jpg) -306px -459px;
  }
  .sprite-lizard {
    background: url(../assets/img/pet_icons.jpg) -459px -459px;
  }
</style>

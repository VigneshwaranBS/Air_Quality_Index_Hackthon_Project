<template>
  <main>

    <div class="card">
      <v-card>
        <div class="card-con">
        <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="5000" max-width="103"
          src="https://picsum.photos/id/11/500/300"></v-img>
        <h4 class="ma-5">SUNDAY</h4>
        <h4 class="ma-4">28 DEG</h4>
      </div>
      </v-card>
    </div>
  </main>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .v-card {
    background-color: #ffffff;
    box-shadow:
      12px 12px 16px 0 rgba(0, 0, 0, 0.25),
      -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
    border-radius: 50px;
    display: flex;
    height: 250px;
    justify-content: center;
    margin-right: 4rem;
    width: 170px;
  }

  .card-con{
    align-items: center;
    justify-items: center;
    margin-top: 65px;
  }
</style>
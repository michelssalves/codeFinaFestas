<template>
  <div>
    <main>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="1500">
            <img src="@/assets/img/carousel/01.png" alt="...">
          </div>
          <div class="carousel-item" data-bs-interval="1500">
            <img src="@/assets/img/carousel/02.jpeg" alt="...">
          </div>
          <div class="carousel-item" data-bs-interval="1500">
            <img src="@/assets/img/carousel/03.jpeg" alt="...">
          </div>
          <div class="carousel-item" data-bs-interval="1500">
            <img src="@/assets/img/carousel/04.jpeg" alt="...">
          </div>
          <div class="carousel-item" data-bs-interval="1500">
            <img src="@/assets/img/carousel/05.jpeg" alt="...">
          </div>
          <div class="carousel-item" data-bs-interval="1500">
            <img src="@/assets/img/carousel/06.jpeg" alt="...">
          </div>
          <div class="carousel-item" data-bs-interval="1500">
            <img src="@/assets/img/carousel/07.jpeg" alt="...">
          </div>
          <div class="carousel-item" data-bs-interval="1500">
            <img src="@/assets/img/carousel/08.jpeg" alt="...">
          </div>
          <div class="carousel-item" data-bs-interval="1500">
            <img src="@/assets/img/carousel/09.jpeg" alt="...">
          </div>
          <div class="carousel-item" data-bs-interval="1500">
            <img src="@/assets/img/carousel/10.jpeg" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line
  name: 'Home',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
<style scoped>
main {
  background-color: var(--color-background);
  justify-content: center;
  align-items: center;
}

img {

  width: 100vw;
  height: 100vh;

}


@media(min-width:321px) and (max-width:768px) {

  img {


    width: 100%;
    height: 80vh;

  }

}

@media(min-width:0px) and (max-width:320px) {


  img {

    width: 100%;
    height: 60vh;

  }
}</style>
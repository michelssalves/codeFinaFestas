<template>
  <div>
    <main> 
       <img id="imageMain" src="@/assets/img/page-header-bg.png" alt="">
    </main>
  </div>
</template>
<script>
export default {
    // eslint-disable-next-line
    name: 'Home',
    components:{

    },
}
</script>
<style scoped>
main{
    background-color: var(--color-background);
    justify-content: center;
    align-items: center;
}
#imageMain{

width: 100%;
height: 100vh;

}
@media(min-width:321px ) and (max-width:768px) {

  #imageMain{


    width: 100%;
    height: 80vh;

}

}

@media(min-width:0px ) and (max-width:320px) {


  #imageMain{

  width: 100%;
  height: 60vh;

}
}

</style>
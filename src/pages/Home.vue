<template>
  <div>
    <main>
        <img src="@/assets/img/page-header-bg.jpg" alt="" id="subscribe">  
    </main>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: 'Home',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
main{
    background-color: var(--color-background);
    justify-content: center;
    align-items: center;
}
img{

    width: 100%;
    height: 90vh;
    
}
@media(max-width:1400px){

}
@media(max-width:1200px){

} 
@media(max-width:992px){

} 
@media(max-width:768px){

} 
@media(max-width:768px){

} 
@media(max-width:540px){

} 
@media(max-width:350px){
    img{
    width: 100%;
    height: 100vh;
    }
}

</style>
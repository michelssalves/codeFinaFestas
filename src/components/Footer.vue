<template>
    <div id="rodape">
        <footer>
            <div class="social">
                <a class="socialLink" href="https://www.instagram.com/espacofinafestas/" target="_blank">
                    <img alt="Instagram" src="@/assets/img/01.png" title="">
                </a>
                <a class="socialLink" href="https://www.facebook.com/FinaFestasBuffetInfantil" target="_blank">
                    <img alt="Facebook" src="@/assets/img/02.png" title="">
                </a>
                <a class="socialLink" href="https://api.whatsapp.com/send?phone=5541995103848&text=" target="_blank">
                    <img alt="WhatsApp" src="@/assets/img/03.png" title="">
                </a>
                <a class="socialLink" href="mailto:contato@buffetfinafestas.com.br" target="_blank">
                    <img alt="E-mail" src="@/assets/img/04.png" title="">
                </a>
                <a class="socialLink" href="tel:+554132732672" target="_blank">
                    <img alt="Telefone" src="@/assets/img/05.png" title="">
                </a>
                <a class="socialLink" href="tel:+5541995103848" target="_blank">
                    <img alt="Celular" src="@/assets/img/06.png" title="">
                </a>
                <a class="socialLink"
                    href="https://www.google.com/maps/dir/-25.3893998,-49.2942842/buffet+fina+festas/@-25.3904404,-49.3321551,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94dce1ae1203c1eb:0x2258ed1204118b78!2m2!1d-49.3336941!2d-25.3982283"
                    target="_blank">
                    <img alt="Maps" src="@/assets/img/07.png" title="">
                </a>
                <a class="socialLink" href="https://linktr.ee/buffetfinafestas" target="_blank">
                    <img alt="LinkThree" src="@/assets/img/08.png" title="">
                </a>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: 'Footer',
    data() {
        return {

        }
    },
}
</script>

<style scoped>
footer {
    width: 100%;
    height: 120px;
    background-color: var(--color-background-nav);
    display: flex;
    justify-content: center;
    justify-items: center;
    
}

.social {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    
    margin-top: 30px;
    

}
.socialLink{
    margin: 0 5px; 
}
.social img {

    width: 60px;
    border-radius: 10px;
    background-color: var(--color-background-nav);

}

@media(max-width:1400px) {}

@media(max-width:1200px) {}

@media(max-width:992px) {}

@media(max-width:768px) {}

@media(max-width:768px) {}

@media(min-width:321px ) and (max-width:768px) {


    .social {
        flex-direction: row;
        align-items: flex-start;

    }
    .socialLink{

        margin: 0 5px;
    
    }
    .socialLink img {

        width: 30px;
        border-radius: 10px;
    }
}

@media(min-width:0px ) and (max-width:320px) {
    .social {

        flex-direction: row;
        align-items: flex-start;

    }
    .socialLink{

    margin: 0 2px; 

    }
    .socialLink img {

    width: 26px;
    border-radius: 10px;
  
    }
 
}
</style>


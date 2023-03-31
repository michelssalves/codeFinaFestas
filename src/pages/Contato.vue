<template>
    <main>
        <section class="container">
            <h1>Contato</h1>
            <section class="contacts">
                <div class="contatct" v-for="(contact) in contactsMichel" :key="contact.index">
                    <div class="contact-title">{{ contact.title }}</div>
                    <div class="contact-text">
                    <a  :href="contact.link">{{ contact.label }}</a>
                    </div>
                </div>
            </section>
        </section>
    </main>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: 'Contato',
    data() {
        return {
            contacts: [],
            contactsMichel: [
                { title: 'Instagram', link: 'https://www.instagram.com/espacofinafestas/', label:'https://www.instagram.com/espacofinafestas/'},
                { title: 'E-mail', link: 'contato@buffetfinafestas.com.br', label:'contato@buffetfinafestas.com.br'},
                { title: 'Linktr', link: 'linktr.ee/buffetfinafestas', label:'linktr.ee/buffetfinafestas'},
                { title: 'Telefone', link: '41984382660', label:'41-99510-3848'},

            ]
        }
    },
    mounted() {
        this.$http.get('/contacts.json').then(res => {
            console.log(res)
            this.contacts = res.data

        })
    },
}
</script>

<style>
main {
    align-items: center;
}
.contacts{
    margin-bottom: 40px;
    color:var(--color-text-dark);
    
}
.contact-title{
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 5px;
}
.contact-text{
    margin-bottom: 5px;
}
.contact a{
    color: var(--color-text-dark);
}
.contact{
    margin-bottom:20px;
}

</style>
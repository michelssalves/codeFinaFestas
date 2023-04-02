<template>
    <header>
        <nav class="container">
        <div class="nav-logo">
                <a href="#rodape"><img alt="" id="logo" src="@/assets/img/logo.png" />
                </a>
        </div>
        <a href="https://linktr.ee/buffetfinafestas">
            <img alt="" id="contato" src="@/assets/img/header.png" />
        </a>
        </nav>
    </header>
</template>
<script>
export default {
    // eslint-disable-next-line
    name: 'Header',
    data() {
        return {
            menuActive: false,
        }
    },
    methods: {
        openMenu: function () {
            this.menuActive = true
        },
        closeMenu: function () {
            this.menuActive = false
        }
    }
}
</script>
<style scoped>
header {

    background-color: var(--color-background-nav);
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav {
    display:flex;
    justify-content: space-between;
    height: 100vh;
    align-items: center;

}

#logo {

    width: 10vw;
    height: 10vh;
}

#contato {
    width: 30vw;
    height: 8vh;
}

#menu-button {

    width: 30px;
}

#menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: black;
    opacity: 0.8;
}

#menu-logo {
    width: 110px;
    margin-top: 30px;
    margin-bottom: 10px;
    border-radius: 50px;

}

#menu-items {
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--color-background-nav);
    width: 60%;
    height: 100vh;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

}

#menu-items.active {
    display: flex;
}

ul {
    list-style: none;
    text-align: center;
}

ul li {
    margin: 20px 0px;
}

ul li a {
    color: var(--color-text-light);
}

@media(min-width: 700px) {

    #menu-button,
    #menu-logo,
    #menu-overlay {
        display: none;
    }

    #menu-items {
        display: flex;
        position: static;
        height: 60px;
        width: auto;

    }

    ul {
        display: flex;
        height: 60px;
        align-items: center;
    }

    ul li {
        margin: 0;
        margin-left: 20px;
    }
}

@media(min-width:321px) and (max-width:768px) {


    #logo {
        display: none;
        width: 20w;
        height: 15vh;
    }

    #contato {
        width: 100%;
        height: 8vh;
    }
}

@media(min-width:0px) and (max-width:320px) {
    #logo {
        display: none;
        width: 5vw;
        height: 5vh;
    }

    #contato {
        width: 100%;
        height: 3vh;
    }
    header {

        height: 100px;

}

}</style>


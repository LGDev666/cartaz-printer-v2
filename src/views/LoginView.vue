<template>
    <div class="containerr">
        <div v-if="!settingsOn">
            <div class="LoginContainer">
                <img src="../img/Icon.png" width="100px" height="100px" style="border-radius: 50%; ">

                <input class="loginUser" placeholder="Usuário"  v-model="username"/>
                <input class="loginPassword" placeholder="Senha" v-model="password"/>

                <b-spinner
                    v-if="loading"
                    style="margin-top: 20px;"
                    :variant="'primary'"
                    :key="'primary'"
                ></b-spinner>

                <button class="btnLogin" @click="change">Entrar</button>
                <button class="btnSettings" @click="gotoSettings">Configurações</button>
            </div>

        </div>
        <div v-if="settingsOn" class="settingsContainer">
            <h1 style="margin-bottom: 20px; font-weight: bold;">Configurações</h1>
            <input class="SettingsItem" placeholder="Numero da Loja" style="letter-spacing: 0; margin-top: 3px;" v-model="storeNum"/>
            <input class="SettingsItem" placeholder="Hash da Loja" v-model="hash"/>
            <button class="btnLogin" @click="gotoSettings">Voltar</button>
        </div>
    </div>
  </template>
  

<script>
    export default {
        data() {
            return {
                username: '',
                password: '',
                storeNum: '',
                hash:'',
                loading: false,
                value: false,
                settingsOn: false,

            };
        },
        
        methods: {
            change() {
                this.$store.commit('sigin');
                console.log(this.$store.state.UserLoged);
                this.value = true;
                this.$router.push('/home')      
            },
            gotoSettings(){
                this.value === false ?
                this.settingsOn = !this.settingsOn :
                'erro'
            },
            
        },
        mounted() {
            try {
            console.log('LoginView FOIIIIIII')
            
            } catch (error) {
            console.error('Error rendering HomeView:', error)
            }
        }

    };
</script>


<style>

.loginUser{
    margin-top: 20px;
    text-align: center;
    border: 2px solid #999;
    padding: 3px;
    font-size: 12px;
    letter-spacing: 1px;
    border-radius: 20px;
    font-weight: bold;
    
}

.loginPassword{
    margin-top: 10px;
    text-align: center;
    border: 2px solid #999;
    padding: 3px;
    font-size: 12px;
    letter-spacing: 1px;
    border-radius: 20px;
    font-weight: bold;
    color: #555;

}

.SettingsItem{
    margin-top: 10px;
    text-align: center;
    border: 2px solid #999;
    padding: 3px;
    font-size: 12px;
    letter-spacing: 1px;
    border-radius: 20px;
    font-weight: bold;
    color: #555;

}

body {
  margin: 0;
}

.containerr {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* adicionado */
  background: hsla(217, 100%, 50%, 1);
  background: linear-gradient(90deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(90deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(90deg, hsla(186, 100%, 69%, 1) 0%, hsla(217, 100%, 50%, 1)100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#60EFFF", endColorstr="#0061FF", GradientType=1 );
}

.LoginContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    height: 400px;
    width: 250px;
    border-radius: 5%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.settingsContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    height: 400px;
    width: 250px;
    border-radius: 5%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
 
}

.btnLogin{
    margin-top: 20px;
    background-color: #0061FF;
    border: 1px solid #999;
    border-radius: 20px;
    padding: 5px 70px 5px 70px;
    color: white;
    font-weight: bold;
    letter-spacing: 1px;

}

.btnSettings{
    margin-top: 10px;
    background-color: #555;
    border: 1px solid #999;
    border-radius: 20px;
    padding: 5px 35px 5px 35px;
    color: white;
    font-weight: bold;
    letter-spacing: 1px;

}
</style>
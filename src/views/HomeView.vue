<template>
  <div v-if="value">
    <div class="headerr" v-if="!configOn">
      <div class="imagecontainer">
        <img src="../img/Icon-removebg-preview.png" width="100px" height="100px"/>
      </div>
      <div class="funccontainer">
        <select class="selectt" name="sector" style="margin-right: 50px;">
          <option class="optionn" value="padaria">Padaria</option>
          <option class="optionn" value="padaria">Padaria</option>
          <option class="optionn" value="padaria">Padaria</option>

        </select>
        <button class="impressionBtn" style="margin-right: 10px; margin-left: 200; background-color: green"><PrinterCheck style="margin-right: 10px; margin-left: 5px;" :size="20" fillColor="#FFF"/> Imprimir</button>
        <button class="updateBtn" style="background-color: #6E78FF; margin-right: 10px; "><Reload style="margin-right: 10px; margin-left: 5px;"/> Atualizar</button> 
      </div>
      <div class="settingscontainer">

          <button @click="goToSettings" class="settingsItem" style="margin-right: 10px;"><Cog /> </button>
          <button class="settingsItem" style="margin-right: 10px;"> <TrashCan/> </button>
          <button @click="change" class="settingsItem" style="margin-right: 20px;"> <ExitToApp /> </button>

      </div>

    </div>
    <div style="height: 100%; background-color: white" v-if="!configOn">

    </div>
    <div v-if="configOn" style="height: 100%; background-color: white;" class="settings">
      <ConfigView/>
    </div>
  </div>
</template>

<script>
import Cog from '../../node_modules/vue-material-design-icons/Cog.vue';
import ExitToApp from '../../node_modules/vue-material-design-icons/ExitToApp.vue';
import TrashCan from '../../node_modules/vue-material-design-icons/TrashCan.vue';
import PrinterCheck from '../../node_modules/vue-material-design-icons/PrinterCheck.vue';
import Reload from '../../node_modules/vue-material-design-icons/Reload.vue';
import ConfigView from './ConfigView.vue';


export default {
  name: 'HomeView',
  data(){
    return { 
      configOn: false,
    }  
  },
  components: {
    Cog,
    ExitToApp,
    TrashCan,
    PrinterCheck,
    Reload,
    ConfigView
  },
  computed: {
    newstate() {
      return this.$store.state.configOn;
    },
    value() {
      return this.$store.state.UserLoged;
    }
  },
    watch: {
    newstate(newValue) {
      this.configOn = newValue;
    }
  },
  methods:{

    async change() {
      await this.$store.commit('sigup');
      this.value = false;
      this.$router.push('/');
    },
    async goToSettings(){
        await this.$store.commit('joinConfigs');
        console.log(this.newvalue);
        this.configOn = this.newstate
        this.$router.push('/config')   
    }
  },
  
  mounted() {
    try {
      console.log('HomeView FOIIIIIII')
    } catch (error) {
      console.error('Error rendering HomeView:', error)
    }
  }
}
</script>

<style>

  .marginbtn{
    height: 25px;
    font-size: 12px;
    letter-spacing: 1px;
    border-radius: 10px;
    font-weight: bold;
    border: 0px;
    color: white;
    font-size: 12px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    background-color: #0C57FE;
    padding-right: 10px;
    padding-left: 10px;
  }

  .selectt{
    height: 25px;
    width: 200px;
    align-self: center;
    text-align: left;
    padding: 3px;
    padding-left: 0;
    letter-spacing: 1px;
    border: 0px;
    border-bottom: 2px solid white;
    color: white;
    background-color: transparent;
  }

  .optionn{
    color: black;
  }

  .funccontainer{
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1; 
    margin-right: 20px;
  }

  .impressionBtn, .updateBtn{
    height: 35px;
    display: flex;
    align-items: center;
    font-size: 12px;
    width: 120px;
    letter-spacing: 1px;
    border-radius: 10px;
    font-weight: bold;
    border: 0px;
    color: white;
    font-size: 12px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  }


  .headerr {
    background: hsla(232, 96%, 56%, 1);
    background: linear-gradient(90deg, hsla(232, 96%, 56%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(90deg, hsla(232, 96%, 56%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(90deg, hsla(232, 96%, 56%, 1) 0%, hsla(217, 100%, 50%, 1) 100%);
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#233FFB", endColorstr="#0061FF", GradientType=1 );
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    width: 100%;
    padding: 0;

  }

  .settingscontainer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 40px;
    margin-right: 10px ;
    flex-grow: 1; 
  }

 .imagecontainer{
    display: flex;
    margin-left: 60px;
    margin-right: 20px;
    justify-content: center;
    align-items: center;
    height: 40px;
    margin-bottom: 3px;
    flex-grow: 1; 
  }

  .settingsItem {
    font-weight: bold;
    color: #fff;
    display: inline-block; 
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 25px;
    padding: 3px;
    border: 0px ;
  }
</style>
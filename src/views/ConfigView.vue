<template>
  <div v-if="value">
    <div class="headerrr" v-if="!configOn" style="margin: 0px;">
      <div class="imagecontainerr">
        <img src="../img/Icon-removebg-preview.png" width="100px" height="100px"/>
      </div>
      <div class="settingscontainerr">

        <button @click="exit" class="settingsItemm"> <ExitToApp /> </button>

      </div>

    </div>  
    <div style="margin-top: 20px;">
      <h3 style="text-align: center; margin-bottom: 20px; font-size: 20px; font-weight: bold">Configurações gerais de Impressões</h3>
      <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;"><input value="corte" type="checkbox" style="margin-right: 10px;">Desenhar Linhas internas para corte do A5 E A6</div>
      <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;"><input value="apenas A4" type="checkbox" style="margin-right: 10px;">Imprimir apenas folha A4 cheia (em caso de folhas divididas)</div>
      <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;"><input value="Margens internas" type="checkbox" style="margin-right: 10px;">Alterar margens internas conforme margem da impressora (em caso de folhas divididas)</div>
      
      <h5 style="text-align: center; margin-top: 25px; font-weight: bold; font-size: 14px">Configurações de Margem (em milimetros)</h5>
      <div style="display: flex; align-items: center; justify-content: center; margin-top: 30px; margin-bottom: 40px"><button style="height: 50px;" class="marginbtnn">Identificar Margens da minha impressora em milimetros (Incluir a margem fisica da impressora)</button></div>   
      <div style="text-align: center; margin-top: 20px">
        <h6 style="display: inline-block; letter-spacing: 1px; width: 25%; font-weight: bold;">Margem direita</h6>
        <h6 style="display: inline-block; letter-spacing: 1px; width: 25%; font-weight: bold;">Margem Esquerda</h6>
        <h6 style="display: inline-block; letter-spacing: 1px; width: 24%; font-weight: bold;">Margem Superior</h6>
        <h6 style="display: inline-block; letter-spacing: 1px; width: 25%; font-weight: bold;">Margem Inferior</h6>
      </div>
      <input class="marginInput" type="number" />
      <input class="marginInput" type="number" />
      <input class="marginInput" type="number" />
      <input class="marginInput" style="border-right: 0px;" type="number" />

    </div>
    <h3 style="margin-top: 30px; text-align: center; font-size: 20px; font-weight: bold;">Selecione a Impressora</h3>
    <div style="display: flex; align-items: center; justify-content: center; margin-top: 15px; margin-bottom: 30px;">
      <select id="selectPrinter" style="width: 200px; height: 30px; font-size: 14px; letter-spacing: 1px; font-weight: bold; border: 2px solid #0C57FE; padding: 3px">
        <option disabled selected>Impressora 1</option>
      </select>
    </div>
    <h3 style="margin-top: 30px; text-align: center; font-size: 20px; font-weight: bold;">Selecione uma Bandeja para cada tamanho de papel</h3>
    <div style="display: flex; align-items: center; justify-content: center; margin-top: 15px; margin-bottom: 30px;">
      <select style="width: 200px; height: 30px; font-size: 14px; letter-spacing: 1px; font-weight: bold; border: 2px solid #0C57FE; padding: 3px">
        <option disabled selected>Tamanho A2</option>
      </select>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; margin-top: 15px; margin-bottom: 30px;">
      <select style="width: 200px; height: 30px; font-size: 14px; letter-spacing: 1px; font-weight: bold; border: 2px solid #0C57FE; padding: 3px">
        <option disabled selected>Tamanho A3</option>
      </select>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; margin-top: 15px; margin-bottom: 30px;">
      <select style="width: 200px; height: 30px; font-size: 14px; letter-spacing: 1px; font-weight: bold; border: 2px solid #0C57FE; padding: 3px">
        <option disabled selected>Tamanho A4</option>
      </select>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; margin-top: 15px; margin-bottom: 30px;">
      <select style="width: 200px; height: 30px; font-size: 14px; letter-spacing: 1px; font-weight: bold; border: 2px solid #0C57FE; padding: 3px">
        <option disabled selected>Tamanho A5</option>
      </select>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; margin-top: 15px; margin-bottom: 30px;">
      <select style="width: 200px; height: 30px; font-size: 14px; letter-spacing: 1px; font-weight: bold; border: 2px solid #0C57FE; padding: 3px">
        <option disabled selected>Tamanho A6</option>
      </select>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; margin-top: 15px; margin-bottom: 30px;">
      <select style="width: 200px; height: 30px; font-size: 14px; letter-spacing: 1px; font-weight: bold; border: 2px solid #0C57FE; padding: 3px">
        <option disabled selected>Tamanho A7</option>
      </select>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; margin-top: 15px; margin-bottom: 30px;">
      <select style="width: 200px; height: 30px; font-size: 14px; letter-spacing: 1px; font-weight: bold; border: 2px solid #0C57FE; padding: 3px">
        <option disabled selected>Tamanho (Banner Setores)</option>
      </select>
    </div>

    <button @click="getPrinter">teste</button>

  </div>
</template>

<script>
  import ExitToApp from '../../node_modules/vue-material-design-icons/ExitToApp.vue';
  

  const Printer = require('node-printer');
  const fs = require('fs');

  // const usb = require('usb');
  // const usbDevice = new escpos.USB(0x01, 0xff);

  export default {
    name: 'ConfigView',
    components:{
      ExitToApp,
    },
    data(){
      return{
        value: true
      }
    },
    methods:{
      exit(){
        this.$store.commit('exitFromConfigs');
        console.log('config',this.$store.state.configOn);
        this.value = false
        this.$router.push('/home')      
      },
      getPrinter() {

        const exec = require('child_process').exec

        console.log(Printer);
    
        exec('wmic printer get Name', (error, stdout, stderr) => {
          if (error || stderr) {
              console.log(error);
              // reject(error || new Error(stderr));
          } else {
              //montando array com o nome das impressoras
              const printers = stdout.split('\n').map(printer => printer.trim()).filter(Boolean);
              
              //definindo lista de impressoras relacionada no select, com a listagem buscada no pc do usuário
              this.printersList = printers
          }
        })
    
        printer_reactive.getPrinterName() = 'L355'
    
        let writeStream = fs.createWriteStream("C:/Users/Diego/Downloads/teste.pdf");
        writeStream.write(body, 'binary');
        writeStream.end();
        writeStream.on('finish', () => {
        console.log('Arquivo criado com sucesso, imprimindo..');
        const command = "C:/Users/Diego/Downloads/SumatraPDF-3.4.6-64.exe -print-to \""+printer_reactive.getPrinterName()+"\" -silent C:/Users/Diego/Downloads/teste.pdf";
          exec(command, (error) => {
              if (error) {
              console.error('Error printing PDF:', error);
              }
          });
        });
    
      }
    }
  }
</script>

<style>

  .marginbtnn{
    height: 50px;
    align-self: center;
    text-align: center;
    font-size: 12px;
    letter-spacing: 1px;
    border-radius: 10px;
    font-weight: bold;
    border: 0px;
    color: white;
    font-size: 14px;
    background-color: #0C57FE;
    padding-right: 10px;
    padding-left: 10px;
  }

  .marginInput{
    width: 23.92%;
    text-align: center;
    padding: 3px;
    padding-left: 10px;
    letter-spacing: 1px;
    border: 0px;
    border-bottom: 2px solid #0C57FE;
    border-right: 2px solid #0C57FE;
    border-top: 2px solid #0C57FE;
    color: #000;
    background-color: transparent;
  }

  .funccontainerr{
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-content: center;
    flex-grow: 1; 
  }



  .headerrr {
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

  .settingscontainerr {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 40px;
    margin-right: 10px ;
    flex-grow: 1; 
  }

 .imagecontainerr{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    padding-right: 60%;
    margin-bottom: 3px;
    flex-grow: 1; 
  }

  .settingsItemm {
    font-weight: bold;
    color: #fff;
    display: inline-block; 
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 25px;
    padding: 3px;
    border: 0px ;
    margin-right: 20px;
  }
</style>
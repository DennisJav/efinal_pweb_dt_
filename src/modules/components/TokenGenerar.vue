<template>
  <div class="container">
    <div class="entradaDatos">
      <div class="input-group mb-3">
        <label class="input-group-text" for="">Semilla</label>
        <input type="text" v-model="semilla" />
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text" for="">Tiempo Vigencia</label>
        <input type="text" v-model="tiempo" />
      </div>
      <div class="input-group mb-3" >
        <label class="input-group-text" for="">Token</label>
        <input v-if="envio" type="text" v-model="token" />
      </div>
    </div>

    <button @click="obtenerToken">Generar Token</button>
  </div>
</template>

<script>

import {obtenerTokenFachada} from '../helpers/apiEstudiante'


export default {
  data() {
    return {
      userName: null,
      pasword: null,
      semilla: null,
      tiempo: null,
      token: null,
      envio:false,
    };
  },

  methods:{

      async obtenerToken(){
        const data= {
          userName : "user",
          pasword : "123",
          semilla : this.semilla,
          tiempo : this.tiempo
        };
        
        const datoToken = await obtenerTokenFachada(data)
        this.token = datoToken.token;
        this.envio = true;
      },


  },
};
</script>

<style scoped>
.entradaDatos {
  margin: 15px;
  align-content:  center;
}

.entradaDatos div{
  padding: 10px;
}
</style>
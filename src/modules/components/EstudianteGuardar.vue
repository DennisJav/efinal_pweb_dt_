<template>
  <div class="container">
    <div>
      <div class="entradaDatos">
        <div class="input-group mb-3">
          <label class="input-group-text" for="">Token</label>
          <input type="text" />
        </div>
        <div class="input-group mb-3">
          <label class="input-group-text" for="">Nombre</label>
          <input type="text" v-model="nombre" />
        </div>
        <div class="input-group mb-3">
          <label class="input-group-text" for="">Apellido</label>
          <input type="text" v-model="apellido" />
        </div>
        <div class="input-group mb-3">
          <label class="input-group-text" for="">Cedula</label>
          <input type="text" v-model="cedula" />
        </div>
      </div>
      <button @click="guardarEstudiante" >Guardar Estudiante</button>

    </div>

  </div>
</template>

<script>
import { ingresarEstudianteFachada } from '../helpers/apiEstudiante';
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
    };
  },

  methods: {
    guardarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
      };
      ingresarEstudianteFachada(data);
      (this.cedula = ""), (this.nombre = ""), (this.apellido = "");
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
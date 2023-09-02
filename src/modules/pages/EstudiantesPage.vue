<template>
    <div>

        <guardar></guardar>
        <obtener></obtener>
    </div>
</template>

<script>
import guardar from "../components/EstudianteGuardar.vue";
import obtener from "../components/ObtenerEstudiante.vue"
export default {
  components: {
    guardar,
    obtener
  },
};
</script>

<style>
</style>
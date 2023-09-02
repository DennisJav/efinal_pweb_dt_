<template>
  <div>
    <router-link to="/estudiante">Estudiante</router-link>
    <router-link to="/token">Generar Token</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 25px;
}

a {
  text-decoration: wavy;
  background-color: #17233d;
  border-radius: 5px;
  padding: 8px;
}

div {
  align-items: center;
}

div a {
  font-weight: bold;
  color: #b0d6ff;
  margin: 0 10px;
  font-size: 25px;
}
</style>
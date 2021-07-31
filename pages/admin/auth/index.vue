<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form>
            <div class="input-control">
              <label for="email">E-Mail Address :</label>
              <input type="email" name="email">
            </div>
            <div class="input-control">
              <label for="password">Password :</label>
              <input type="password" name="password">
            </div>
            <button type="submit" class="btn">{{ isLogin ? 'Login' : 'Sign Up' }}</button>
            <button type="button" class="inverted" @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  data() {
    return {
      isLogin: true
    }
  }
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>


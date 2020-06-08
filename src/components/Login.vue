<template>
  <div id="login-outter">
      <div class="login-inner">
        <form class="login-form">
            <label>username</label>
            <input type="text" v-model="user.username"/>
            <label>senha</label>
            <input type="password" v-model="user.password"/>
            <button @click="login(user)" class="login-button">login</button>
            <button @click="logout()" class="login-button">logout</button>
        </form>
      </div>
  </div>
</template>

<script>
import { RepositoryFactory } from './../api-calls/RepositoryFactory'
let loginCaller = RepositoryFactory.get('login');
export default {
    data() {
        return {
            user: {}
        }
    },
    methods: {
        login(user) {
            loginCaller.connectAsAdmin(user.username, user.password).then(res => {
                localStorage.user = JSON.stringify(res.data.data);
                this.$alert('Logado', 'Aviso', 'success').then(() => location.reload());
            }).catch(res => res.then(this.$alert('Usuário não cadastrado', 'Aviso', 'warning')));
        },
        logout() {
            localStorage.removeItem('user');
            this.$alert('Deslogado', 'Aviso', 'success').then(() => location.reload());
        }
    }
}
</script>

<style>
.login-outter {
    width: 100%;
    height: 100vh;
}
.login-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.login-form {
    display: flex;
    flex-direction: column;
}
.login-button {
    margin-top: 10px;
    cursor: pointer;
}

</style>
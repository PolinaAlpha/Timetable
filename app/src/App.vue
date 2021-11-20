<template lang='pug'>
div(v-if = "authorization")
    div.w-full.h-full.grid.grid-cols-2.mt-64
        div.ml-auto.pt-24.pb-24.px-20.text-center.grid.grid-cols-1.gap-4.glassmor
            div.p-4.inputlog.m-2 Авторизация
            div.p-4.gap-4.grid.grid-cols-4
                span.text-left.mr-2.self-center Логин
                input.bg-current.inputlog.col-span-3.p-1.border-red-500(v-model = "login" :class = `{border: validerror}`)
                span.text-left.mr-2.self-center Пароль
                input.bg-current.inputlog.col-span-3.p-1.border-red-500(v-model = "password" :class = `{border: validerror}`)
            p.text-red-500(v-show="validerror") Неверные данные
            div.flex.mx-auto
                button.py-4.bg-pink-300.px-8.mr-8.rounded-xl(@click="signIn()") Войти
                button.py-4.px-8.mr-8.rounded-xl(@click="backAuth()") Назад
        img.col-start-2(src="./assets/ZKB7S3Z0_Vw.jpg")
div(v-else)
    router-view 
</template>
<script>
import Timetable from "./pages/Timetable.vue"
import { mapState} from 'vuex'
export default {
    data(){
        return {
            login: "",
            password: "",
            validerror: false
        }
    },
    components: {
        Timetable
        },
    computed: {
        ...mapState({
      token: state => state.auth.token,
      authed: state => state.auth.authed,
      authorization: state => state.auth.authorization
      })
    },
    methods: {
      backAuth() {
          const edit = false
          this.$store.commit('auth/editAuthorization', edit)
      },
      async signIn() {
          const response = await fetch("auth/login", {
         method: "POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify({
           username: this.login,
           password: this.password
         })
       });
       if(response.status == 400) {
           this.validerror = true
       }
       else{
       const edit = true
       const edit2 = false
       this.validerror = false
       this.$store.commit('auth/editAuthed', edit)
       this.$store.commit('auth/editAuthorization', edit2)
       }
      }
    }
}
</script>
<style lang="postcss">
@import "./assets/styles/tailwind.postcss";
html{
    background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
}
.center{
    margin:10%;
}
.glassmor{
background: rgba( 255, 255, 255, 0.45 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 0px );
-webkit-backdrop-filter: blur( 0px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
}
.inputlog{
/* background: #e0e0e0; */
background: rgba(255, 255, 255, 0.363);
box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.062);
backdrop-filter: blur( 10.0px );
-webkit-backdrop-filter: blur( 10.0px );
border-radius: 10px;
}
</style>

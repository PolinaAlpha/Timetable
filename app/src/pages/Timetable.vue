<template lang="pug">
div.w-full.h-full.grid.grid-cols-1.mt-32
    div.mx-32.pt-24.pb-24.px-20.text-center.glassmor.grid.grid-cols-1
        div.m-4.gap-4.grid.grid-cols-6
            span.text-left.mr-2.self-center.col-start-1.text-right Выбор аудитории:
            input.bg-current.inputlog.px-8.placeholder-gray-500.col-start-2.border-red-500(placeholder="..." v-model="selectAud" :class = `{border: validerror}`)
            button.py-4.bg-pink-300.px-8.mr-8.rounded-xl.col-start-3(@click="searchAud()") Поиск
            p(v-show = "validerror") Расписание еще не создано
            button.py-4.bg-pink-300.px-8.mr-8.rounded-xl.col-start-6(v-show = "!authed" @click="goAuth()") Войти
            button.py-4.bg-pink-300.px-8.mr-8.rounded-xl.col-start-6(v-show = "authed" @click="logOut()") Выйти
        div.m-4.gap-8.grid.grid-cols-2
            div.p-2.glassmor.rounded-3xl
                div.grid.grid-cols-1(v-if="!authed")
                    div.grid.grid-cols-3.p-2
                        p Время
                            div.col-start-1.p-2(v-for="items in Time")
                                p {{items.Time}}
                        p Предмет
                            div.col-start-2.p-2(v-for="items in Timetable")
                                p.col-span-2 {{items.subject}} 
                        p Факультет
                            div.col-start-3.p-2(v-for="items in Timetable")
                                p.col-span-3 {{items.faculty}}
                    div.grid.grid-cols-3.flex
                div.grid.grid-cols-1(v-if="authed")
                    div.grid.grid-cols-3.p-2
                        p Время
                            div.col-start-1.p-2(v-for="items in Time")
                                p {{items.Time}}
                        p Предмет
                            div.col-start-2.p-2(v-for="items in EditTimetable")
                                input.text-center.inputlog.mx-4( :placeholder="[[ items.subject ]]" v-model="items.subject")
                        p Факультет
                            div.col-start-3.p-2(v-for="items in EditTimetable")
                                input.text-center.inputlog.mx-4( :placeholder="[[ items.faculty ]]" v-model="items.faculty")
            div.col-start-2
                div.grid.grid-cols-1.gap-8
                    div.flex.justify-start.block
                        p.p-4.text-center Выбор даты:
                        input.px-8.py-4.inputlog(v-model="createDate")
                    div.flex.justify-start.block
                        button.bg-pink-300.ml-32.px-16.py-4.rounded-xl(v-show = "authed" @click="createTable()") Готово
                    p.block.glassmor.rounded-3xl.p-24 {{audDiscription}}

</template>

<script>
import { mapState} from 'vuex'
    export default {
        data() {
            return {
                selectAud: "",
                createDate: "",
                audDiscription: "",
                discriptionList: [
                    {discriptionNumber: 101,
                    discriptionNum: "описание"},
                    {discriptionNumber: 111,
                    discriptionNum: "описание2"}
                ],
                validerror: false,
                Time: [
                    {Time: "8:00 - 9:30"},
                    {Time: "9:40 - 11:10"},
                    {Time: "11:20 - 12:50"},
                    {Time: "13:00 - 14:30"},
                    {Time: "14:40 - 16:10"},
                    {Time: "16:20 - 17:50"},
                    {Time: "18:00 - 19:30"},
                    {Time: "19:40 - 21:10"}
                ],
                Timetable: [
                ],
                EditTimetable: [
                    {
                        subject: "-",
                        faculty: "-"
                    },
                    {
                        subject: "-",
                        faculty: "-"
                    },
                    {
                        subject: "-",
                        faculty: "-"
                    },
                    {
                        subject: "-",
                        faculty: "-"
                    },
                    {
                        subject: "-",
                        faculty: "-"
                    },
                    {
                        subject: "-",
                        faculty: "-"
                    },
                    {
                        subject: "-",
                        faculty: "-"
                    },
                    {
                        subject: "-",
                        faculty: "-"
                    },
                ]
            }
        },
        computed: {
        ...mapState({
      token: state => state.auth.token,
      authed: state => state.auth.authed,
      authorization: state => state.auth.authorization
            })
        },
        methods: {
            goAuth() {
                const edit = true
                this.$store.commit('auth/editAuthorization', edit)
            },
            logOut() {
                const edit = false
                this.$store.commit('auth/editAuthed', edit)
            },
            async searchAud() {
                const response = await fetch("auth/getTable", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    audNumber: this.selectAud,
                    date: this.createDate
                    })
                });
                if(response.status == 400) {
                    this.validerror = true
                    console.log(response)
                }
                else{
                    const responseJson = await response.json();
                    this.Timetable = responseJson.timetable.timetable
                    this.EditTimetable = responseJson.timetable.timetable
                    this.validerror = false
                    const tempArr = this.discriptionList
                    tempArr.find(el => el.discriptionNumber == this.selectAud)
                    this.audDiscription = tempArr[0].discriptionNum
                }
            },
            async createTable() {
                const response = await fetch("auth/createTable", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                   audNumber: this.selectAud,
                   createUsername: "",
                   date: this.createDate,
                   timetable: this.EditTimetable
                    })
                });
                if(response.status == 400) {
                    console.log("Ошибка")
                }
                else{
                    const responseJson = await response.json();
                    console.log(responseJson.message)
                }
            }
        }
    }
</script>

<style lang="postcss" scoped>

</style>
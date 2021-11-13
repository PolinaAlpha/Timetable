<template lang="pug">
div.w-full.h-full.grid.grid-cols-1.mt-32
    div.mx-32.pt-24.pb-24.px-20.text-center.glassmor.grid.grid-cols-1
        div.m-4.gap-4.grid.grid-cols-6
            span.text-left.mr-2.self-center.col-start-1.text-right Выбор аудитории:
            input.bg-current.inputlog.px-8.placeholder-gray-500.col-start-2(placeholder="..." v-model="selectAud")
            button.py-4.bg-pink-300.px-4.mr-4.rounded-xl.col-start-3 Поиск
            button.py-4.bg-pink-300.px-8.mr-8.rounded-xl.col-start-6 Войти
        div.m-4.gap-8.grid.grid-cols-2
            div.p-2.glassmor.rounded-3xl
                div.grid.grid-cols-1(v-if="!authed")
                    div.grid.grid-cols-3.p-2
                        p Время
                        p Предмет
                        p Факультет
                    div.grid.grid-cols-3.p-2(v-for="items in Timetable")
                        p {{items.Time}}
                        p {{items.Subject}}
                        p {{items.Faculty}}
                div.grid.grid-cols-1(v-if="authed")
                    div.grid.grid-cols-3.p-2
                        p Время
                        p Предмет
                        p Факультет
                    div.grid.grid-cols-3.p-2(v-for="items in EditTimetable")
                        p {{items.Time}}
                        input.text-center.inputlog.mx-4(v-model="items.Subject")
                        input.text-center.inputlog.mx-4(v-model="items.Faculty")
            div.col-start-2
                div.grid.grid-cols-1.gap-8
                    div.flex.justify-start.block
                        p.p-4.text-center Выбор даты:
                        input.px-8.py-4.inputlog(v-model="createDate")
                    div.flex.justify-start.block
                        button.bg-pink-300.ml-32.px-16.py-4.rounded-xl Готово
                    p.block.glassmor.rounded-3xl.p-24 {{discription}}

</template>

<script>
import { mapState} from 'vuex'
    export default {
        data() {
            return {
                selectAud: "",
                createDate: "",
                discription: "",
                Timetable: [
                    {
                        Subject: "Физика",
                        Time: "8:00 - 9:30",
                        Faculty: "ФМФ"
                    },
                    {
                        Subject: "Физика",
                        Time: "9:40 - 11:10",
                        Faculty: "ФМФ"
                    },
                    {
                        Subject: "Физика",
                        Time: "11:20 - 12:50",
                        Faculty: "ФМФ"
                    },
                    {
                        Subject: "Физика",
                        Time: "13:00 - 14:30",
                        Faculty: "ФМФ"
                    },
                    {
                        Subject: "Физика",
                        Time: "14:40 - 16:10",
                        Faculty: "ФМФ"
                    },
                    {
                        Subject: "Физика",
                        Time: "16:20 - 17:50",
                        Faculty: "ФМФ"
                    },
                    {
                        Subject: "Физика",
                        Time: "18:00 - 19:30",
                        Faculty: "ФМФ"
                    },
                    {
                        Subject: "Физика",
                        Time: "19:40 - 21:10",
                        Faculty: "ФМФ"
                    },
                ],
                EditTimetable: [
                    {
                        Subject: "",
                        Time: "8:00 - 9:30",
                        Faculty: ""
                    },
                    {
                        Subject: "",
                        Time: "9:40 - 11:10",
                        Faculty: ""
                    },
                    {
                        Subject: "",
                        Time: "11:20 - 12:50",
                        Faculty: ""
                    },
                    {
                        Subject: "",
                        Time: "13:00 - 14:30",
                        Faculty: ""
                    },
                    {
                        Subject: "",
                        Time: "14:40 - 16:10",
                        Faculty: ""
                    },
                    {
                        Subject: "",
                        Time: "16:20 - 17:50",
                        Faculty: ""
                    },
                    {
                        Subject: "",
                        Time: "18:00 - 19:30",
                        Faculty: ""
                    },
                    {
                        Subject: "",
                        Time: "19:40 - 21:10",
                        Faculty: ""
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
        }
    }
</script>

<style lang="postcss" scoped>

</style>
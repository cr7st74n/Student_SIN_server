<template>
    <tr v-bind:class="{present : student.present, absent: !student.present }">
        <td>{{student.name}}</td>
        <td>{{student.starID}}</td>
        <td><input type="checkbox" v-bind="student.present" v-on:change="arrivedOrleft(student, $event.target.checked)">
        <td v-show="edit"> <img v-on:click="deleteStudent" src="@/assets/icons8-delete-100.png"></td>
        </td>
    </tr>
</template>

<script>
export default{
    name: 'StudentRow',
    props: {
        student: Object,
        edit:Boolean
    },
    methods: {
        arrivedOrleft(student, present){
            this.$emit('student-arrived-or-left', student, present)
        },
        deleteStudent(){
            this.$emit('delete-student', this.student)
        }
    }
}
</script>

<style scoped>

.present{
    color: gray;
    font-style: italic;
}

.absent{
    color: black;
    font-weight: bold;
}
img{
    height: 35px;
}

</style>
<template>
  <div id="App">

    <NewStudentForm v-on:student-added="newStudnetAdded"> </NewStudentForm>
    <student-message v-bind:student="mostRecentStudents"></student-message>
    <student-table  
     v-bind:students = "students"
     v-on:student-arrived-or-left = "studentArrivedOrLeft"
     v-on:delete-student="deleteStudent"></student-table>
  </div>
</template>

<script>

import NewStudentForm from './components/NewStudentForm.vue'
import StudentMessage from './components/StudentMessage.vue'
import StudentTable from './components/StudentTable.vue'

export default {
  name: 'App',
  components: {
    NewStudentForm,
    StudentMessage,
    StudentTable
  },
  data(){
    return {
      students: [],
      mostRecentStudents: {}
    }
  }, 
  mounted(){
    //load all Students
    this.updateStudents()
  },
  methods :{
    updateStudents(){
      this.$student_api.getAllStudents().then( students =>{
        this.students = students
      })
    },
    newStudnetAdded(student){
      this.$student_api.addStudents(student).then( ()=>{
        this.updateStudents()
      })
    },
    studentArrivedOrLeft(student, present){
    },
    deleteStudent(student){

    }
  }
}
</script>

<style>

@import url(https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css);

</style>

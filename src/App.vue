<template>
  <div class="container mt-5">
    <notifications group="foo" />
    <addtask v-on:addTask="addToDo($event)"></addtask>
      <transition-group 
      enter-active-class="animate__animated animate__fadeInTopLeft"
      leave-active-class="animate__animated animate__fadeOutTopRight"
      class="row justify-content-center">
      <tasklist v-for="(data, index) in toDo" 
      :key="index"
      :index="index"
      :data="data"
      @deleteTask="deleteTask($event)"/>
      </transition-group>
  </div>
</template>

<script>
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
export default {
  name: "App",
  data() {
    return {
      toDo: [],
      // key:''
    };
  },
  methods:{
    addToDo: function(task) {
        this.toDo.push({ task: task, done: false });
        this.$notify({
          group: "foo",
          title: "Good Job",
          text: "You have added new task!",
          duration: 500,
        });
    },
    deleteTask: function(key) {
      if (confirm("You want to delete sure?")) {
        this.toDo.splice(key, 1);
        this.$notify({
          group: "foo",
          title: "Warning",
          text: "You have delete task!",
          type: "error",
          duration: 500,
        });
      }
    },
    // checkToDo: function(key) {
      
    // }
  },
  components: {
    'addtask': AddTask,
    'tasklist': TaskList,
    }

};
</script>


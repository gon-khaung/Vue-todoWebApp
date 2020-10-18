<template>
        <div class="row justify-content-center">
      <div class="col-10">
        <img src="../assets/logo.png" class="d-block mx-auto" alt="" />
        <label for="">New Task</label>
        <input type="text" class="form-control" v-model="task" @keyup.enter="addTask" name="" id="" />
        <button class="btn btn-success mt-2" @click="addTask">
          Add New Task
        </button>
      </div>
    </div>
</template>

<script>
export default {
    name:'AddTask',
    data(){
      return{
         task:'',
      }
    },
    methods:{
      addTask: function() {
      if (this.task == "") {
        alert("You Must Add Something!");
      } else {
        this.$emit('addTask', this.task)
        this.task = "";
      }
    },
    }
}
</script>
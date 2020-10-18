<template>
  <div class="col-10">
    <div class="card mt-3">
      <div class="row p-2 align-items-center">
        <div class="col-7" :class="{ completeTask: data.done }" @dblclick="editToggle=!editToggle, dataTask=!dataTask">
          <span  v-if="dataTask" >{{ data.task }}</span>
          <input type="text" 
          v-model="data.task" 
          v-if="editToggle"
          @keyup.enter="editToDo"/>
        </div>
        <div class="col text-right">
          <button class="btn btn-info mr-3" @click="checkToDo(index)">
            <i class="material-icons mt-1">check</i>
          </button>
          <button class="btn btn-danger" @click="deleteTask(index)">
            <i class="material-icons mt-1">delete</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  props: {
    data: {
      type: Array
    },
    index: {
      type: Number,
    }
  },
  data(){
    return {
      editToggle:false,
      dataTask:true,
    }
  },
  methods: {
    checkToDo: function() {
      // alert(index)
      this.data.done = !this.data.done;
      // alert(this.data.done)
      this.$notify({
        group: "foo",
        title: "Completed",
        text: "You have completed your task!",
        duration: 500
      });
    },
    deleteTask: function(index) {
      this.$emit("deleteTask", index);
    },
    editToDo: function(){
      this.editToggle = false;
      this.dataTask = true;
      this.$notify({
        group: "foo",
        title: "Edited!",
        text: "You have edited your task!",
        duration: 500,
        type: 'success',
      });
    }
  }
};
</script>

<style scoped>
.card {
  border-radius: 1rem !important;
}
.completeTask {
  text-decoration: line-through;
}
</style>
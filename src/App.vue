<script>
import TodoItem from './components/TodoItem.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  components: { TodoItem },
  data: () => ({
    task: ''
  }),
  methods: {
    ...mapMutations(['setTask']),
    clearInputTask() {
      this.task = ''
    },
    addTodo(){
      if(this.task == '') return
      const id = Date.now()
      const Task = {
        id, 
        name: this.task
      }
      this.setTask(Task)
      this.clearInputTask()
    },
  },
  computed: mapState(['TaskList'])
}
</script>

<template>
  <div class="content-add-todo">
      <input type="text" v-model="task"  placeholder="Escreva o nome da tarefa">
      <button @click="addTodo">Adicionar</button>
  </div>
  <div class="content-todo-list">
    <TodoItem 
      v-for="task in TaskList" 
      :key="task.id"
      :id="task.id"
      :name="task.name"/>
  </div>
</template>

<style>
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
.content-add-todo {
  width: 1250px;
  min-height: 80px;
  max-width: 96%;
  padding: 25px;
  background: #7159c1;
  margin: 20px auto;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.content-add-todo input {
  width: 100%;
  height: 30px;
  padding: 6px;
  border: none;
  border-radius: 2px;
  outline: none;
}
.content-add-todo button {
  height: 30px;
  border: none;
  padding: 6px;
  border-radius: 2px;
  cursor: pointer;
  background: #fff;
  font-size: 12px;
}
.content-add-todo button:hover {
  transition: .5s;
  color: #7159c1;
}
.content-todo-list {
  width: 1250px;
  max-width: 96%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>

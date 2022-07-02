<template>
  <div class="content-todo">
    <div class="todo-name">
      <input type="text" :value="name">
    </div>
    <div class="todo-buttons">
      <div class="button-delete">
        <img :src="imageButtonDelete" alt="" @click="removeTodo(id)">
      </div>
    </div>
  </div>
</template>

<script>
import imageButtonDelete from '/src/assets/trash3-fill.svg'
import { mapMutations } from 'vuex'

export default {
  name: 'TodoList',
  props: {
    id: Number,
    name: String
  },
  data: () => ({
    imageButtonDelete,

  }),
  methods: {
    ...mapMutations(['removeTask']),
    removeTodo(id){
      this.removeTask(id)
    },
    modifyTodo(){
      console.log()
    }
  }
}
</script>

<style>
  .content-todo {
    display: grid;
    grid-template-columns: 9fr 35px;
    width: 100%;
    min-height: 60px;
    background: #eee9fd;
    padding: 14px;
    border-radius: 8px;
  }

  .content-todo input {
    padding: 6px;
    border: none;
    background: none;
    outline: none;
    color: #222;
  }
  .todo-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
  }
  .button-edit,
  .button-delete{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .todo-buttons img {
    width: 20px;
    cursor: pointer;
    align-self: center;
  }

</style>
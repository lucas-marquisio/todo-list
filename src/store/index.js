import { createStore } from 'vuex'

export default createStore({
  state: {
    TaskList: []
  },
  mutations: {
    setTask(state, task){
      state.TaskList.push(task)
    },
    removeTask(state, taskId){
      const tasks = state.TaskList.filter(task => task.id != taskId)
      state.TaskList = tasks
    }
  }
})


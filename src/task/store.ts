import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Task {
  id: string
  task: string
  checked: boolean
}

interface TaskState { tasks: Record<string, Task> }

interface TaskAction {
  add: (task: string) => void
  toggle: (id: string) => void
  clear: () => void
}

type TaskStore = TaskState & TaskAction

const persisted = persist<TaskStore>(
  set => ({
    tasks: {},
    add(task: string) {
      const id = new Date().getTime().toString()
      set(state => ({ tasks: { ...state.tasks, [id]: { id, task, checked: false } } }))
    },
    toggle(id: string) {
      set((state) => {
        const task = state.tasks[id]
        return { tasks: { ...state.tasks, [id]: { ...task, checked: !task.checked } } }
      })
    },
    clear() {
      set({ tasks: {} })
    },
  }),
  {
    name: 'tasks',
    version: 1,
  },
)

export const useTasks = create<TaskStore>()(persisted)

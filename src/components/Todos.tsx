import TodoItem from "./TodoItem"

/* eslint-disable @typescript-eslint/no-explicit-any */
const Todos = ({ todos }: any) => {
  return (
    <div>
      {todos.map((todo: any) => {
        // Berikan datanya ke TodoItem
        return <TodoItem key={todo.id} todo={todo} />
      })}
    </div>
  )
}

export default Todos
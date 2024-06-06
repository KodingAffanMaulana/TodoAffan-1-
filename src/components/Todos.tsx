import TodoItem from "./TodoItem"

/* eslint-disable @typescript-eslint/no-explicit-any */
const Todos = ({ todos }: any) => {
  return (
    <div style={styles.container}>
      {todos.map((todo: any) => {
        return <TodoItem key={todo.id} todo={todo} />
      })}
    </div>
  )
}

const styles = {
  container: {
    width: '40%',
    margin: '0 auto',
  },
}

export default Todos
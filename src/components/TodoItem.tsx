/* eslint-disable @typescript-eslint/no-explicit-any */
const TodoItem = ({ todo }: any) => {
  return (
    <div style={styles.todoItem}>
      <p>{todo.title}</p>
    </div>
  )
}

const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
  },
}

export default TodoItem
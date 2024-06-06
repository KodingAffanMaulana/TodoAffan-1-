import { useState } from 'react'
import Todos from './components/Todos'
import { dummy } from './data/dummy'

function App() {
  const [todos, setTodos] = useState(dummy)

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      <Todos todos={todos} />
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradient background
    minHeight: '100vh',
    color: '#fff', // Text color
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '48px', // Increased font size for the title
    margin: '20px 0',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Text shadow for better readability
  },
};

export default App
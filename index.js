const App = () => {
  const [todos, setTodos] = React.useState([
    {
      text: 'clean out car',
      isCompleted: false,
    },
    {
      text: 'start packing for trip',
      isCompleted: false,
    },
    {
      text: 'update calendar',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return ( <>
    <div className="app">
    <div class="todo-list">
      
        {todos.map((todo, i) => (
        <Todo index={i} key={i} todo={todo} remove={removeTodo}/>))}
        <TodoForm addTodo={addTodo} />
    </div>
    </div>
    </>);
  }
  
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );


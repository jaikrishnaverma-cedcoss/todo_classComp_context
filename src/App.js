import "./App.css";
import { MyContext } from "./tools/MyContext";
import { useState } from "react";
import Main from "./classComponents/Main";
const initialState = {
  todos: [],
  index: -1,
  btnVal: "ADD",
  loading: true,
  darkMode: false,
};
function App() {
  const [state, setState] = useState(initialState);
  const addAction = (action) => {
    state.loading = true;
    setState({ ...state });
    setTimeout(() => {
      state.todos.push(action);
      state.Sno = state.Sno + 1;
      state.loading = false;
      setState({ ...state });
    }, 600);
  };
  const addtodoArr = (action) => {
    state.todos = action.map((x) => {
      state.Sno = state.Sno + 1;
      return { text: x.todo, status: x.completed ? "Complete" : "Incomplete" };
    });
    state.loading = false;
    setState({ ...state });
  };
  const updateAction = (action) => {
    state.todos[action.index].text = action.text;
    state.index = -1;
    state.btnVal = "Add";
    setState({ ...state });
  };
  const deleteAction = (action) => {
    state.todos.splice(action, 1);
    setState({ ...state });
  };
  const editMode = (action) => {
    state.btnVal = "Update";
    state.index = action;
    setState({ ...state });
  };
  const cheker = (action) => {
    state.todos[action.index].status = action.status;
    setState({ ...state });
  };
  const darkToggle = () => {
    state.darkMode = !state.darkMode;
    setState({ ...state });
  };
  return (
    <>
      <MyContext.Provider
        value={{
          state,
          setState,
          addAction,
          updateAction,
          deleteAction,
          editMode,
          cheker,
          addtodoArr,
          darkToggle,
        }}
      >
        <Main />
      </MyContext.Provider>
    </>
  );
}

export default App;

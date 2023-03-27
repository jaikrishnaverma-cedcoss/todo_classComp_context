import "./App.css";
import { MyContext } from "./tools/MyContext";
import { useState } from "react";
import Main from "./classComponents/Main";
const initialState = {
  todos: [],
  index: -1,
  btnVal: "ADD",
};
function App() {
  const [state, setState] = useState(initialState);
  const addAction = (action) => {
    state.todos.push(action);
    state.Sno = state.Sno + 1;
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
  return (
    <>
      <MyContext.Provider value={{ state, setState, addAction ,updateAction,deleteAction,editMode,cheker}}>
        <Main />
      </MyContext.Provider>
    </>
  );
}

export default App;

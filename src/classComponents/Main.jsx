import React, { Component } from "react";
import { MyContext } from "../tools/MyContext";
import Complete from "./Complete";
import Incomplete from "./Incomplete";

export class Main extends Component {
  static contextType = MyContext;
  constructor(props) {
    super(props);
    this.inpuRef = React.createRef();
  }
  componentDidMount() {
    try {
      fetch("https://dummyjson.com/todos")
        .then((response) => response.json())
        .then((res) => {
          this.context.addtodoArr(res.todos);
        });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { addAction, state, updateAction, editMode, darkToggle } =
      this.context;
    // form submitter and todo upadte add handler
    const handleClick = () => {
      if (state.index === -1) {
        if (this.inpuRef.current.value !== "")
          addAction({ text: this.inpuRef.current.value, status: "Incomplete" });
      } else {
        updateAction({ text: this.inpuRef.current.value, index: state.index });
      }
      this.inpuRef.current.value = "";
    };
    // handle which row is going to edit
    const editClick = (index) => {
      this.inpuRef.current.value = state.todos[index].text;
      editMode(index);
    };
    return (
      <>
        {state.loading ? (
          <div
            className={`container container--spinner ${
              state.darkMode ? "container--dark" : ""
            }`}
          >
            <img
              src="Spinner-0.6s-200px.gif"
              style={{ maxWidth: "300px", margin: "0px auto" }}
              alt=""
            />
          </div>
        ) : (
          <div
            className={`container ${state.darkMode ? "container--dark" : ""}`}
          >
            <button
              className={`btntoggle ${state.darkMode ? "btn--dark" : ""}`}
              onClick={darkToggle}
            >
              Dark Mode
            </button>
            <h2>TODO LIST</h2>
            <h3>Add Item</h3>
            <form
              style={{ margin: "10px 0px" }}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                id="new-task"
                style={{ maxWidth: "80%" }}
                type="text"
                value={state.Message}
                ref={this.inpuRef}
              />
              <button
                id="actioner"
                style={{ maxWidth: "10%" }}
                name={state.eStatus}
                index={state.index}
                onClick={handleClick}
              >
                {state.btnVal}
              </button>
            </form>

            <h3>Todo</h3>
            <h3>Incomplete</h3>
            <ul id="Incomplete">
              <Incomplete arr={state.todos} editClick={editClick} />
            </ul>
            <h3>Complete</h3>
            <ul id="Complete">
              <Complete arr={state.todos} editClick={editClick} />
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default Main;

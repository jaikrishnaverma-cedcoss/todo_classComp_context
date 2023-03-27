import React, { Component } from "react";
import { MyContext } from "../tools/MyContext";

export default class Incomplete extends Component {
  static contextType = MyContext;
  render() {
    const { cheker, deleteAction } = this.context;
    return (
      <>
        {this.props.arr.map((data, i) => {
          if (data.status === "Complete") return "";
          return (
            <li key={i + data.text}>
              {" "}
              <input
                index={i}
                type="checkbox"
                name="incompleted"
                onClick={() => cheker({ status: "Complete", index: i })}
              />
              <label>{data.text}</label>
              <p type="text" id="name" className="name" value={data.text} />
              <button
                className="edit"
                index={i}
                name="incompleted"
                onClick={() => this.props.editClick(i)}
              >
                Edit
              </button>
              <button
                onClick={() => deleteAction(i)}
                name="incompleted"
                className="delete"
              >
                Delete
              </button>{" "}
            </li>
          );
        })}
      </>
    );
  }
}

import React, { Component } from "react";
import { MyContext } from "../tools/MyContext";

export default class Complete extends Component {
  static contextType = MyContext;
  render() {
    const { cheker, deleteAction } = this.context;
    return (
      <>
        {this.props.arr.map((data, i) => {
          if (data.status === "Incomplete") return "";
          else
            return (
              <li key={i + data.text}>
                {" "}
                <input
                  type="checkbox"
                  name="completed"
                  onClick={() => cheker({ status: "Incomplete", index: i })}
                  checked
                />
                <label>{data.text}</label>
                <p type="text" id="name" className="name" value={data.text} />
                <button
                  className="edit"
                  name="completed"
                  onClick={() => this.props.editClick(i)}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteAction(i)}
                  index={i}
                  name="completed"
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

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import * as serviceWorker from "./serviceWorker";

class AddTodo extends React.Component {
  state = {
    title: ""
  };

  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitForm = event => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    if (title && title !== "") {
      this.props.addTodo(this.state.title);
      this.setState({ title: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.submitForm} style={{ display: "flex" }}>
        <input
          type="text"
          style={{ flex: "10", padding: "10px", fontFamily: "sans-serif" }}
          name="title"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.inputChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn btn-outline-secondary"
          style={{ flex: "1", color: "#fff" }}
        />
      </form>
    );
  }
}

class Todos extends React.Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
        copyItem={this.props.copyItem}
      />
    ));
  }
}

class TodoItem extends React.Component {
  getStyle = () => {
    const { isCompleted } = this.props.todo;
    return {
      textDecoration: isCompleted ? "line-through" : "none",
      backgroundColor: isCompleted ? "#28A745" : "#fbfbfb",
      color: isCompleted ? "#fff" : "#000",
      fontStyle: isCompleted ? "italic" : "normal",
      position: "relative",
      margin: "5px auto",
      padding: "0"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div className="card card-body" style={this.getStyle()}>
        <p
          id={id}
          onClick={this.props.markComplete.bind(this, id)}
          style={{
            height: "100%",
            fontSize: "20px",
            lineHeight: "20px",
            padding: "10px",
            fontFamily: "sans-serif"
          }}
        >
          {title}
        </p>
        <button
          onClick={this.props.delTodo.bind(this, id)}
          className="btn btn-danger btn-sm"
          style={{
            cursor: "pointer",
            position: "absolute",
            right: "10px",
            top: "12px"
          }}
        >
          X
        </button>
        <button
          onClick={this.props.copyItem.bind(this, id)}
          className="btn btn-info btn-sm"
          style={{
            cursor: "pointer",
            position: "absolute",
            right: "50px",
            top: "14px"
          }}
        >
          copy
        </button>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <header style={headerStyle}>
          <h1>Redmine</h1>
          <Link style={linkStyle} to="/">
            Todo
          </Link>{" "}
          |{" "}
          <Link style={linkStyle} to="/trans">
            Transform
          </Link>
        </header>
      </div>
    );
  }
}

const headerStyle = {
  fontFamily: "Orbitron",
  background: "#007BFF",
  color: "#fff",
  textAlign: "center",
  padding: "5px"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};

class Clock extends React.Component {
  state = {
    hour: new Date().getHours(),
    min: new Date().getMinutes(),
    sec: new Date().getSeconds(),
    day: new Date().getDay(),
    date: new Date().getDate(),
    month: new Date().getMonth()
  };

  componentDidMount() {
    this.interval = setInterval(this.displayClock, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  displayClock = () => {
    let updateTime = new Date();
    let hour = updateTime.getHours();
    let min = updateTime.getMinutes();
    let sec = updateTime.getSeconds();
    let day = updateTime.getDay();
    let date = updateTime.getDate();
    let month = updateTime.getMonth();

    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    switch (day) {
      case 0:
        day = "SUN";
        break;
      case 1:
        day = "MON";
        break;
      case 2:
        day = "TUE";
        break;
      case 3:
        day = "WED";
        break;
      case 4:
        day = "THUR";
        break;
      case 5:
        day = "FRI";
        break;
      case 6:
        day = "SAT";
        break;
      default:
        day = "NONE";
    }

    switch (month) {
      case 0:
        month = "JAN";
        break;
      case 1:
        month = "FEB";
        break;
      case 2:
        month = "MAR";
        break;
      case 3:
        month = "APR";
        break;
      case 4:
        month = "MAY";
        break;
      case 5:
        month = "JUN";
        break;
      case 6:
        month = "JULY";
        break;
      case 7:
        month = "AUG";
        break;
      case 8:
        month = "SEP";
        break;
      case 9:
        month = "OCT";
        break;
      case 10:
        month = "NOV";
        break;
      case 11:
        month = "DEC";
        break;
      default:
        month = "NONE";
    }

    this.setState(() => {
      return {
        hour: hour,
        min: min,
        sec: sec,
        day: day,
        date: date,
        month: month
      };
    });
  };

  render() {
    return (
      <div style={style}>
        <span style={{ fontSize: "25px", float: "left", color: "#fff" }}>
          {this.state.hour}:{this.state.min}:{this.state.sec}
        </span>
        <span style={{ fontSize: "25px", float: "right", color: "#fff" }}>
          {this.state.day}-{this.state.date}-{this.state.month}
        </span>
      </div>
    );
  }
}

const style = {
  fontFamily: "Orbitron",
  border: "5px solid #007ACC",
  borderRadius: "5px",
  height: "45px",
  backgroundColor: "#1e1e1e",
  padding: "5px"
};

class Transform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paragraph: "",
      pArray: [],
      output: "",
      type: "sql.a"
    };
  }

  handleInput = e => {
    let p = e.target.value;
    this.setState(() => {
      return {
        paragraph: p
      };
    });
  };

  addBuilder = (paragraph, type) => {
    let data = paragraph.replace(/\t+/g, "").split("\n");
    data = data.map(e => {
      e = e.replace(/\s\s/g, "");
      return `${type}(" ${e} ");\n`;
    });
    return data.join("");
  };

  deConvertBuilder = paragraph => {
    let pattern = /".*"/g;
    let data = paragraph.match(pattern);
    data = data.map(e => e.replace(/\"/g, "").concat("\n"));
    return data.join("");
  };

  formatSQLBuilder = paragraph => {
    let data = paragraph.split("\n");
    data = data.map(e => {
      e = e.replace(/\t+/g, "").replace(/\s\s/g, "");
      e = `${e}\n`;
      return e;
    });
    return data.join("");
  };

  switchType = () => {
    this.setState(prevState => {
      return {
        type: prevState.type === "sql.a" ? "sql.append" : "sql.a"
      };
    });
  };

  convert = () => {
    let item = this.state.paragraph;
    item = this.addBuilder(item, this.state.type);
    this.setState(() => {
      return {
        output: item
      };
    });
  };

  deConvert = () => {
    let item = this.state.paragraph;
    item = this.deConvertBuilder(item);
    this.setState(() => {
      return {
        output: item
      };
    });
  };

  format = () => {
    let item = this.state.paragraph;
    item = this.formatSQLBuilder(item);
    this.setState(() => {
      return {
        output: item
      };
    });
  };

  copy = () => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.getElementById("output"));
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
  };

  styleForBtn = () => {
    return {
      width: "170px"
    };
  };

  render() {
    return (
      <div>
        <h3 style={{ color: "#fff" }}>paste paragraph here</h3>{" "}
        <span style={{ color: "#fff" }}>
          click to switch type:{" "}
          <input
            className="btn btn-outline-secondary btn-sm"
            value={this.state.type}
            style={{ cursor: "pointer" }}
            onClick={this.switchType}
          />{" "}
        </span>
        <textarea
          className="card card-body col-12"
          name="paragraph"
          cols="150"
          rows="10"
          onChange={this.handleInput}
          value={this.state.paragraph}
          style={{ fontFamily: "sans-serif" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <input
                className="btn btn-outline-primary btn-block"
                type="submit"
                value="convert"
                onClick={this.convert}
              />
            </div>

            <div className="col-sm-6">
              <input
                className="btn btn-outline-danger btn-block"
                type="submit"
                value="de-convert"
                onClick={this.deConvert}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <input
                className="btn btn-outline-warning btn-block"
                type="submit"
                value="format-SQL"
                onClick={this.format}
              />
            </div>

            <div className="col-sm-6">
              <input
                className="btn btn-outline-info btn-block"
                type="submit"
                value="copy to clipboard"
                onClick={this.copy}
              />
            </div>
          </div>
        </div>
        <p
          id="output"
          style={{
            fontFamily: "sans-serif",
            whiteSpace: "pre-wrap"
          }}
          className="card card-body"
        >
          {this.state.output}
        </p>
      </div>
    );
  }
}

const initialState = { todos: [] };

class App extends React.Component {
  state = { ...initialState };

  componentDidMount() {
    const list = JSON.parse(window.localStorage.getItem("todos"));
    try {
      this.setState({ ...list });
    } catch (e) {}
  }

  componentDidUpdate() {
    const savedObject = JSON.stringify(this.state);
    window.localStorage.setItem("todos", savedObject);
  }

  // Toggle Complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    });
  };

  // Delete Todo
  delTodo = id => {
    // this.setState({
    //   todos: [...this.state.todos.filter(todo => todo.title !== title)]
    // });
    this.setState(() => {
      return {
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      };
    });
  };

  // Add Todo
  addTodo = title => {
    let id = Math.floor(Math.random() * 10000000);
    const newTodo = {
      id: id,
      title: title,
      isCompleted: false
    };
    // this.setState({ todos: [newTodo, ...this.state.todos] });
    this.setState(prevState => {
      return {
        todos: [newTodo, ...prevState.todos]
      };
    });
  };

  // Delete All todos
  deleteAllTodo = () => {
    // this.setState({ todos: [] });
    this.setState(() => {
      return {
        todos: []
      };
    });
    window.localStorage.clear();
  };

  copyItem = id => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(document.getElementById(id));
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route
            exact  
            path="/" 
            render={props => (
              <React.Fragment>
            <AddTodo addTodo={this.addTodo} />
            <div>
              <input
                onClick={this.deleteAllTodo}
                className="btn btn-outline-danger btn-block"
                type="button"
                value="Delete All"
              />
            </div>
            <Clock />
            <Todos
              todos={this.state.todos}
              markComplete={this.markComplete}
              delTodo={this.delTodo}
              copyItem={this.copyItem}
            />
          </React.Fragment>
            )}
          />
          <Route
            path="/trans"
            render={props => (
              <React.Fragment>
                <div style={{ margin: "10px" }} />
                <Transform />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

serviceWorker.register();

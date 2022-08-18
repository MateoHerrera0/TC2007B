// Mateo Herrera Lavalle
// A01751912
// 15/08/2022

// My first app in react, where stuff change dynamically.
// This app is kind of like an escape room, where one person must solve all
// problems before reaching the end.
// This came about tying out different stuff in react, speciffically messing
// around with the states and classes.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Class that renders the keypad part of the number sequence problem.
class KeyPad extends React.Component {
  
  // contructor contains the answer state, which updates when a new number is
  // added to the sequence
  constructor(props) {
    super(props)
    this.state = {
      answer: ""
    }
  }

  // This function checks if the correct input has been typed using the keypad.
  // It does this by adding the last number into the end of the  sring everytime
  // the function is called, and comparing it to the answer. It then saves the
  // answer in the according state.
  checkAnswer(i) {
    let answer = this.state.answer;
    answer = answer + i;
    if (answer === "312211") {
      this.props.onSolved()
      answer = ""
    }
    this.setState({
      answer: answer,
    })
  }

  // function that deletes last inputed number by using the slice function. This
  // function then saves the answer in its according state
  deleteLast() {
    let answer = this.state.answer;
    answer = answer.slice(0, -1);
    this.setState({
      answer: answer,
    })
  }

  render() {
    return (
      <div className='background' style={{backgroundColor: 'yellow'}}>
        <div id='numberBackground'>
          <div className='riddlePart'>
            <p>1, 11, 21, 1211, 111221, ?</p>
          </div>
          <div className='sequencePart'>
            {this.state.answer}
          </div>
          <div className='answerPart'>
            <p>Enter the next number in the sequence.</p>
            <div id='keypad'>
              {/* enum.map is used to render three buttons with values */}
              {[1,2,3].map((value) => {
                return(
                  <ButtonKeyPad
                    value={value}
                    onClick={() => this.checkAnswer(value)}
                    key={value}
                  />
                )
              })}
              {/* delete button is rendered separately with different onclick
               function */}
              <ButtonKeyPad
                value='<-'
                onClick={() => this.deleteLast()}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// function that returns the buttons of the keypad.
function ButtonKeyPad(props) {
  return(
    <button onClick={props.onClick} style={{backgroundColor: 'yellow'}}>
      {props.value}
    </button>
  )
}

// Class that handles the rendering of the riddle morse code section
class Riddle extends React.Component {
  // contructor contains the value state, which updates on input area change. It
  // also binds the function so that the event data can be accessed.
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }


    this.checkAnswer = this.checkAnswer.bind(this);
  }

  // function that checks if the correct answer has been written in the input
  // and stores the answer on the state. It des this by checking the input value
  // when it is modified. It then stores previous value on state.
  checkAnswer(event) {
    let answer = event.target.value;
    if (answer === "jellyfish") {
      this.props.onSolved()
      answer = ""
    }
    this.setState({value: answer});
  }

  render() {
    return (
      <div className='background' style={{backgroundColor: 'black'}}>
        <div id='riddleBackground'>
          <div className='riddlePart'>
            <p>- .... . / .- -. ... .-- . .-. / .. ... / .--- . .-.. .-.. -.--
               ..-. .. ... .... / .. -. / .-.. --- .-- . .-. -.-. .- ... .</p>
          </div>
          <div className='answerPart'>
            <form>
              <p>Enter the answer hidden in morse code</p>
              <input id='inputRiddle' type="text" value={this.state.value} 
              onChange={this.checkAnswer}></input>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

// Class that handles the rendering of the fill square problem
class FillSquare extends React.Component {
  // constructor contains the array that represents an either on or off state of
  // each square
  constructor(props) {
    super(props);
    this.state = {
      values: Array(9).fill(false),
    };
  }
  
  // function that inverts the clicked square and the adjacent squares states.
  // It does this by modifying the value of the appropriate array positions and
  // saving the resulting array in the values state. 
  invertColor(i) {
    const values = this.state.values.slice();
    values[i] = !values[i];

    if (values[i+1] != null && i+1 !== 3 && i+1 !== 6) {
      values[i+1] = !values[i+1];
    }

    if (values[i-1] != null && i-1 !== 2 && i-1 !== 5) {
      values[i-1] = !values[i-1];
    }

    if (values[i+3] != null) {
      values[i+3] = !values[i+3];
    }

    if (values[i-3] != null) {
      values[i-3] = !values[i-3];
    }
    
    if (!values.includes(false)) {
      this.props.onSolved();
      values.fill(false)
    }

    this.setState({
      values: values,
    })
  }

  render() {
    const values = this.state.values;
    return (
      <div className='background' style={{backgroundColor: 'green'}}>
        <div className='board'>
          {/* map is used to render 9 squares */}
          {values.map((value, index) => {
            return (
              <Square
                value={value}
                onClick={() => this.invertColor(index)}
                key={index}
              />
            )
          })}
        </div>
        <p id='boardInstructions'>Turn on all the lights.</p>
      </div>
    )
  }
}

// function that returns each square button on the fill square class
function Square(props) {
  return (
    <button className="square" onClick={props.onClick} 
      style={{
        backgroundColor: props.value ? 'yellow' : '',
      }}
    >
    </button>
  );
}

// function that returns the basic front page of the vault
function FrontPage(props) {
  return (
    <div className='background' style={{backgroundColor: 'aliceblue'}}>
      <div id='frontPage'>
        <div className='frontPageText'>
          <p>Solve all the problems and reach the end</p>
        </div>
        <div>
          <button id='startButton' type='button' onClick={()=>props.onSolved()}>open</button>
        </div>
      </div>
    </div>
  )
}

// class that handles the rendering of each problem in the vault
class VaultPage extends React.Component {
  // constructor contains the index and the type of problem
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      type: this.props.type,
    };
  }

  // function that chooses which page to render based on its type
  choosePage(type) {
    switch (type) {
      case 'KeyPad':
        return <KeyPad 
          onSolved={() => this.props.handleSolve(this.state.id)}
        />
      case 'Riddle':
        return <Riddle 
          onSolved={() => this.props.handleSolve(this.state.id)}
        />
      case 'FillSquare':
        return <FillSquare 
          onSolved={() => this.props.handleSolve(this.state.id)}
          state={this.props.state}
        />
      case 'FrontPage':
        return <FrontPage 
          onSolved={() => this.props.handleSolve(this.state.id)}
        />
      default:
        break;
    }
  }

  render() {
    const type = this.state.type;
    // this is what makes the page change position depending on its css class
    const name = this.props.state ? 'page close' : 'page';
    return(
      <div className={name}>
        {this.choosePage(type)}
      </div>
    )
  }

}


// Class that handles the rendering of the last vault page
class CongratulationsPage extends React.Component {
  // contructor contains all names that were input into the scoreboard. It also 
  // stores the value of the input field and binds the funtion so that the
  // event data can be accessed.
  constructor(props) {
    super (props);
    this.state = {
      names: [],
      value: '',
    }
    
    this.handleChange = this.handleChange.bind(this);
  }

  // function that updates the value state on input change
  handleChange(event) {
    let value = event.target.value
    this.setState({
      value: value,
    })
  }

  // function that on submit button click saves the input value ito the scoreboard
  onSubmit() {
    let names = this.state.names.slice();
    const value = this.state.value;
    this.setState({
      names: names.concat(value),
      value: ''
    })
  }
  
  // function that handles the deletion of a name in the scoreboard when the 
  // x button is clicked
  deleteName(id) {
    let names = this.state.names.slice();
    names.splice(id, 1)
    this.setState({
      names: names,
    })
  }
  
  render() {
    const names = this.state.names;
    return (
      <div id='congratulations' className='background' 
      style={{backgroundColor: 'white'}}>
        <div>
          <p>CONGRATULATIONS</p>
        </div>
        <div id='peopleOpenArea'>
          <p>People who have opened the vault.</p>
          <div id='people'>
            {names.map((value, index) => {
              return(
                <Name 
                  value={value}
                  onClick={(i)=>this.deleteName(i)}
                  id={index}
                  key={index}
                />
              )
            })}
          </div>
          <div>
            <form>
              <input type='text' placeholder='write your name here' 
              onChange={this.handleChange} value={this.state.value}></input>
              <button type='button' onClick={() => this.onSubmit()}>Submit</button>
            </form>
          </div>
        </div>
        <div>
          <button type='button' id='lockButton' 
          onClick={()=>{this.props.onClick()}}>Lock Again</button>
        </div>
      </div>
    )
  }
}

// function that returns the name and the delete button in the scoreboard
function Name(props) {
  return (
    <div id='nameInArea'>
      <p>{props.value}</p>
      <button type='button' onClick={()=>props.onClick(props.id)}>x</button>
    </div>
  )
}

// class that handles the rendering of each page and stores its solved status
class VaultManager extends React.Component {
  // the constructor contains an array filled with the solved status of each
  // of the problems, as well as an array that contains which problems will appear
  constructor(props) {
    super(props);
    this.state = {
      solved: Array(4).fill(false),
      vaultPages: ['FillSquare', 'KeyPad', 'Riddle', 'FrontPage']
    };
  }
  
  // Function that changes specific solved status of page by updating the value
  // of the array in the correct position
  handleSolve(i) {
    const solved = this.state.solved.slice();
    solved[i] = true;
    this.setState({
      solved: solved,
    })
  }

  // function that returns all solved status to false so that vault locks again
  lockVault() {
    const solved = this.state.solved.slice();
    solved.fill(false);
    this.setState({
      solved: solved,
    })
  }

  render() {
    return (
      <div>
        <CongratulationsPage 
          onClick={()=>this.lockVault()}
        />
        {this.state.vaultPages.map((value, index) => {
          return(
            <VaultPage 
            state = {this.state.solved[index]}
            handleSolve = {(i) => this.handleSolve(i)}
            id = {index}
            type = {value}
            key = {index}
            />
            )
          })}
      </div>
    )
  }
}

// ========================================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<VaultManager />);
  
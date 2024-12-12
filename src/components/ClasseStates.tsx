import React from "react";

interface ClasseStatesState {
  count: number;
}

class ClasseStates extends React.Component<object, ClasseStatesState> {
  
    constructor(props: object) {
        super(props);
        this.state = {
        count: 0
        };
    }   

    addOne = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
  render() {
    return (
      <div>
        <p>Class State : {this.state.count}</p>
        <button className="border-2 outline-none w-40 border-black-500 p-3 bg-sky-500" onClick={this.addOne}>State button</button>
    </div>
    );
  }
}

export default ClasseStates;
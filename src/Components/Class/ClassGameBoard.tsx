import { Component, FormEvent } from "react";
import "./styles/game-board.css";
import { TSGameInfo } from "../../types";

export class ClassGameBoard extends Component<TSGameInfo> {
  state = {
    inputFishName: "",
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.handleAnswer(this.state.inputFishName.toLowerCase());
    this.setState({ inputFishName: "" });
  };
  render() {
    const { fishData } = this.props;
    const { inputFishName } = this.state;
   
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={fishData.url} alt={fishData.name} />
        </div>
        <form id="fish-guess-form" onSubmit={this.handleSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={inputFishName}
            onChange={(e) => this.setState({ inputFishName: e.target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label
} from "recharts";

export default class Players extends Component {
  state = {
    playerData: []
  };

  componentDidMount() {
    this.getPlayerData();
  }

  getPlayerData = () => {
    fetch(`http://localhost:5000/api/players`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          ...this.state,
          playerData: data
        });
      })
      .catch(err => console.log(err.message));
  };

  render() {
    console.log(this.state.playerData);
    return (
      <div>
        <div data-testid="players-chart">
          <PlayerChart playerData={this.state.playerData} />
        </div>
      </div>
    );
  }
}

const PlayerChart = ({ playerData }) => {
  return (
    <ResponsiveContainer width={"90%"} height={400}>
      <BarChart
        width={2000}
        height={600}
        data={playerData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          fontSize={14}
          tick={{ stroke: "#8884D8", strokeWidth: 0.5 }}
        >
          <Label position="bottom" fontSize={12}>
            Players
          </Label>
        </XAxis>
        <YAxis>
          <Label position="bottom" fontSize={12}>
            Searches
          </Label>
        </YAxis>
        <Tooltip />
        <Bar dataKey="searches" barSize={30} fill="#d4d884" />
      </BarChart>
    </ResponsiveContainer>
  );
};

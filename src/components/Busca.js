import React from "react";
import "../App.css";
import { func } from "prop-types";
import { DebounceInput } from "react-debounce-input";

export default class Busca extends React.Component {
  render() {
    return (
      <div className="container-busca">
        <label className="label-busca">Nome do personagem: </label>
        <DebounceInput
          className="input-busca"
          debounceTimeout={300}
          onChange={this.props.onChange}
          forceNotifyByEnter
          forceNotifyOnBlur
        />
      </div>
    );
  }
}

Busca.propTypes = {
  onChange: func
};

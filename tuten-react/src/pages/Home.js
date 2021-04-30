import React from "react";
import BookList from "../components/BookList";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
          <button className="exit"><Link to="/">Salir</Link></button>
          <h1 class="mainTitle">Lista de libros</h1>
          <BookList dataFromParent = {this.props.location.token} />
      </div>
    );
  }

}
 
export default Home;
import React from "react";
import BookItem from "./BookItem";
 
class BookList extends React.Component {

    componentDidMount() {
        fetch("https://dev.tuten.cl:443/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Accept": "application/json",
                "adminemail": "testapis@tuten.cl",
                "token": this.props.dataFromParent,
                "app": "APP_BCK"
            }
        }).then(response => response.json())
          .then(books => this.setState({ books }));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate ejecutado");
    }

    buscarLibros = event => {
        event.preventDefault();

        console.log("Buscanding..." + this.props.dataFromParent);

        fetch("https://dev.tuten.cl:443/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Accept": "application/json",
                "adminemail": "testapis@tuten.cl",
                "token": this.props.dataFromParent,
                "app": "APP_BCK"
            }
        }).then(response => response.json())
          .then(books => {
                console.log("filtrando");
                let bookingIdFil = document.getElementById("bookingId").value;
                let precioFil = document.getElementById("precio").value;
                if("" != bookingIdFil && "" == precioFil){
                    console.log("Filtrando por Id");
                    let booksFiltrados = books.filter(book => (book.bookingId == bookingIdFil));
                    this.setState({ books: booksFiltrados })
                } else if("" == bookingIdFil && "" != precioFil){
                    console.log("Filtrando por precio");
                    let booksFiltrados = books.filter(book => (book.bookingPrice <= precioFil));
                    this.setState({ books: booksFiltrados })
                } else if("" != bookingIdFil && "" != precioFil){
                    console.log("Filtrando por Id y precio");
                    let booksFiltrados = books.filter(book => (book.bookingId == bookingIdFil && book.bookingPrice <= precioFil));
                    this.setState({ books: booksFiltrados })
                } else {
                    console.log("Sin filtro");
                    this.setState({ books: books })
                }
                
          });
    };

    render() {
        return (
        <div>
             <div className="container3">
                <form >
                <div><input id="bookingId" type="text" placeholder="BookingId" className="field" /></div>
                <div><input id="precio" type="text" placeholder="Precio" className="field" /></div>
                <div><input onClick={this.buscarLibros} value="Buscar" className="btn"></input></div>
                </form>
            </div>
            <table className="styled-table" >
                <thead>
                    <tr>
                        <th>BookingId</th>
                        <th>Cliente</th>
                        <th>Fecha de Creación</th>
                        <th>Dirección</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.books.map(book => (
                        <BookItem key={book.bookingId} book={book} />
                    ))}
                </tbody>
            </table>
        </div>
        );
    }

    state = {
        books: []
    };
}
 
export default BookList;
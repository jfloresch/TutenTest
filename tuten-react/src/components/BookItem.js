import React from "react";
import PropTypes from "prop-types";

class BookItem extends React.Component {
  constructor() {
    super();
    //console.log("constructor ejecutado");
  }
  componentDidMount() {
    //console.log("componentDidMount ejecutado");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    //console.log("componentDidUpdate ejecutado");
  }
  componentWillUnmount() {
    //console.log("componentWillUnmount ejecutado");
  }
  onDelete = e => {
    e.preventDefault();
    this.props.onDelete(this.props.post);
  };

  render() {
    return (
        <tr>
            <td>{this.props.book.bookingId}</td>
            <td>{this.props.book.locationId.tutenUser.firstName} {this.props.book.locationId.tutenUser.lastName}</td>
            <td>{this.props.book.bookingTime}</td>
            <td>{this.props.book.locationId.streetAddress}</td>
            <td>{this.props.book.bookingPrice}</td>
        </tr>

    );
  }
}

BookItem.propTypes = {
  book: PropTypes.shape({
    bookingId: PropTypes.string.isRequired,
    parentBooking: PropTypes.shape({
        tutenUserProfessional: PropTypes.shape({
            tutenUser1: PropTypes.shape({
                firstName: PropTypes.string.isRequired,
                lastName: PropTypes.string.isRequired
            }),
        }),
    }),
    locationId: PropTypes.shape({
        streetAddress: PropTypes.string.isRequired,
        tutenUser: PropTypes.shape({
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired
        }),
    }),
    bookingTime: PropTypes.string.isRequired,
    bookingPrice: PropTypes.string.isRequired
  })
};

export default BookItem;
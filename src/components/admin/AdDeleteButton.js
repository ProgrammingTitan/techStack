import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getAds, deleteAd } from './../../actions/adActions';

class AdDeleteButton extends React.Component {

    onDeleteClick = (_id) => {
        this.props.deleteAd(_id);
    };

    render() {
      return (
          <Button outline color="danger"
          onClick = {this.onDeleteClick.bind(this, this.props._id)}
          >
        danger</Button>
      );
    }
  }
  const mapStateToProps = (state) => ({
    ad: state.ad
});
  export default connect(mapStateToProps, { getAds, deleteAd })(AdDeleteButton);
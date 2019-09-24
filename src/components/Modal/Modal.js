import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {



  render() {
    //console.log(this.props.itemInfo)
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'hsl(0, 100%, 30%)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      margin: '25px auto',
      padding: 30,
      display: "flex",
      height: "150vh",
      width: "150vh",
      flexWrap: "wrap",
      textAlign: "center",
      overflow: "auto",
      
    };

    const productImg = {
      maxWidth: "220px"
    }

    const cardHeader = {
      marginBottom: "20px"
    }
    const cardBody = {
      height: "calc(100vh - 200px)",
      overflow: "auto"
    }

    // const closeButton = {
    //   position: "absolute",
    //   bottom: "20px",
    //   left: "20px"
    // }

    // const text = {
    //   textAlign: "left"
    // }

    // let {
    //   itemInfo
    // } = this.props;
    // let removeCom;
    // console.log(this.props)
    // if (itemInfo.description) {
    //   removeCom = itemInfo.description.replace("?", "").replace('<td width="110" height="">', "").replace("http://extranet.acetools.com/Catalog/", "assets/img/items/").replace((/<INPUT[^>]*>/gmi), "").split('<CENTER><FONT COLOR="RED">', 1)
    //   console.log(removeCom);

    // }

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <h6 className="card-header" style={cardHeader}>Item # {this.props.itemInfo.item_no} - {this.props.itemInfo.item}</h6>
                <div className="card-body" style={cardBody}>

                  <div className="row">
                    <div className="col-12"><img src={this.props.itemInfo.image} alt="" style={productImg}></img></div>
                  </div>

                  <div className="row justify-content-center mt-3">
                    <div className="col-10" dangerouslySetInnerHTML={{ __html: this.props.itemInfo.description }} />
                  </div>

                  <div className="row justify-content-center mt-3">
                    <button className="btn btn-outline-primary" onClick={this.props.onClose}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool
};

export default Modal;
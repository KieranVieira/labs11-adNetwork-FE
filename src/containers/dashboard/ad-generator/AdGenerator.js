import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import html2canvas from "html2canvas";

import { createAd } from "../../../store/actions/adAction.js";
import { getUserOffers } from "../../../store/actions/offersAction.js";
import AdForm from "../../../components/ad-generator/forms/AdForm.js";
import Controls from '../../../components/ad-generator/controls/Controls.js';
import AdHoc from "../../../components/ad-generator/AdHoc.js";

const AdGeneratorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .ad-form {
    background-color: #ffffff;
    margin: 15px;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
    border-radius: 15px;
    padding: 25px;
    width: 50%;
  }
  .ad-preview {
    display: flex;
    background-color: #ffffff;
    margin: 15px;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
    border-radius: 15px;
    padding: 25px;
    height: 850px;
    width: 50%;
    justify-content: center;
    align-items: center;
  }
`;

export class AdGenerator extends Component {
  state = {
    // currentElement: "headline",
    // productData: {
    //   offer_id: "",
    //   headline_text: "",
    //   tagline_text: "",
    //   message_text: "",
    //   button_text: "",
    //   destination_url: "",
    //   file: "",
    //   size: "square_banner",
    //   headline: {
    //     size: "",
    //     color: "",
    //     bg_color: "",
    //     align: "left", 
    //     bold: false,
    //     italic: false,
    //   },
    //   tagline:{
    //     size: "",
    //     color: "",
    //     bg_color: "",
    //     align: "left", 
    //     bold: false,
    //     italic: false,
    //   },
    //   message:{
    //     size: "",
    //     color: "",
    //     bg_color: "",
    //     align: "left", 
    //     bold: false,
    //     italic: false,
    //   },
    //   button:{
    //     size: "",
    //     color: "",
    //     bg_color: "",
    //     align: "left", 
    //     bold: false,
    //     italic: false,
    //   }
    // }
    productData: {
      offer_id: "",
      headline: "",
      headline_color: "",
      tagline: "",
      tagline_color: "",
      message: "",
      message_color: "",
      cta_button: "",
      destination_url: "",
      back_img: "",
      text_color: "",
      btn_color: "",
      btn_text_color: "",
      size: "square_banner",
      file: ""
    }
  };

  componentDidMount() {
    this.props.getUserOffers();
  }

  createAd = async e => {
    e.preventDefault();
    const image = await this.generateSnapshot("advertisment");
    await this.props.createAd({
      offer_id: this.state.productData.offer_id,
      image
    }, this.props);

    // this.setState({
    //   productData: {
    //     offer_id: "",
    //     headline: "",
    //     headline_color: "",
    //     tagline: "",
    //     tagline_color: "",
    //     message: "",
    //     message_color: "",
    //     cta_button: "",
    //     destination_url: "",
    //     back_img: "",
    //     text_color: "",
    //     btn_color: "",
    //     btn_text_color: "",
    //     size: this.state.productData.size
    //   }
    // });
  };

  handleChange = e => {
    this.setState({
      productData: {
        ...this.state.productData,
        [e.target.name]: e.target.value
      }
    });
  };

  customizeElement = e => {
    this.setState({
      ...this.state,
      productData: {
        ...this.state.productData,
        [this.state.currentElement]: {
          [e.target.name]: e.target.value
        }
      }
    })
  }

  handleElementChange = e => {
    e.preventDefault();
    this.setState({
        ...this.state,
        [e.target.name]: e.target.value
    });
  };

  handleTextChange = e => {
    this.setState({
      productData: {
        ...this.state.productData,
        [e.target.name]: e.target.value
      }
    });
  };

  generateSnapshot = id => {
    const ad = document.getElementById(id);

    html2canvas(ad).then(canvas => {
      return canvas.toDataURL();
    });
  };

  handleFileChange = e => {
    this.setState({
      productData: {
        ...this.state.productData,
        back_img: e.target.files[0],
        file: URL.createObjectURL(e.target.files[0])
      }
    });
  };

  render() {
    return this.props.userOffers.length ? (
      <AdGeneratorContainer>
        <div className="ad-form">
          <AdForm
            createAd={this.createAd}
            handleChange={this.handleChange}
            handleElementChange={this.handleElementChange}
            handleTextChange={this.handleTextChange}
            handleFileChange={this.handleFileChange}
            productData={this.state.productData}
            offers={this.props.userOffers}
          />
          <Controls 
            customizeElement={this.customizeElement}
          />
        </div>
        <div className="ad-preview">
          <div id="advertisment">
            <AdHoc ad={this.state.productData} />
          </div>
        </div>
      </AdGeneratorContainer>
    ) : (
      <h1>Create an offer before you create an ad.</h1>
    );
  }
}

const mapStateToProps = state => {
  return {
    userOffers: state.offersReducer.userOffers
  };
};

export default connect(
  mapStateToProps,
  {
    createAd,
    getUserOffers
  }
)(AdGenerator);

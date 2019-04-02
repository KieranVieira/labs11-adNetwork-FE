import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Pusher from "pusher-js";

import { getOfferAnalytics } from "../../store/actions/analyticsAction.js";
import { getUserOffers } from "../../store/actions/offersAction.js";
import { getUserData } from "../../store/actions/authAction.js";
import { getAgreements } from "../../store/actions/agreementsAction.js";
import privateRoute from "../auth-HOC";
import DashboardLeft from "../../components/dashboard/dashboard-left/DashboardLeft.js";
import TopNav from "../../components/dashboard/dashboard-top/DashboardTop.js";
import ChatWidget from "../../components/chat-widget/ChatWidget.js";
import Analytics from "./analytics/Analytics.js";
import AdGenerator from "./ad-generator/AdGenerator.js";
import Offers from "./offers/Offers.js";
import Settings from "./settings/Settings.js";

const DashboardContainer = styled.div`
  display: flex;
  background-color: #F1F1F1;
  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    .dashboard-view {
      width: 100%;
      height: 100%;
      overflow-y: auto;
    }
  }
`;

const pusher = new Pusher("50920b18a9a2ff320874", {
  cluster: "us2",
  encrypted: true
});

class Dashboard extends Component {
  state = {
    currentOffer: "",
    notificationsList: []
  };

  componentDidMount() {
    this.props.getUserData();
    this.props.getUserOffers();
    this.props.getAgreements();
    this.props.getOfferAnalytics(this.state.currentOffer);
    this.analyticsInterval = setInterval(() => {
      if (this.state.currentOffer) {
        this.props.getOfferAnalytics(this.state.currentOffer);
      } else {
        return null;
      }
    }, 6000);

    this.handlePusher(this.props.currentUser);
  }

  componentWillUnmount() {
    clearInterval(this.analyticsInterval);
  }

  handlePusher = currentUser => {
    if (currentUser) {
      const channel = pusher.subscribe(currentUser.id.toString());
      channel.bind("disable-offer", data => {
        this.setState({
          notificationsList: [...this.state.notificationsList, data]
        });
      });
    } else {
      setTimeout(() => {
        this.handlePusher(this.props.currentUser)
      }, 3000)
    }
  };

  handleOfferSelect = e => {
    this.props.getOfferAnalytics(e.target.value);
    this.setState({
      currentOffer: e.target.value
    });
  };

  render() {
    return (
      <DashboardContainer>
        <DashboardLeft />
        <div className="main-content">
          <TopNav
            {...this.props}
            handleOfferSelect={this.handleOfferSelect}
            agreements={this.props.agreements}
            notificationsList={this.state.notificationsList}
          />
          <div className="dashboard-view">
            <Route
              exact
              path="/dashboard"
              render={props => (
                <Analytics
                  {...props}
                  offerAnalytics={this.props.offerAnalytics}
                />
              )}
            />
            <Route
              path="/dashboard/offers"
              render={props => (
                <Offers {...props} currentUser={this.props.currentUser} />
              )}
            />
            <Route
              path="/dashboard/settings"
              render={props => (
                <Settings {...props} currentUser={this.props.currentUser} />
              )}
            />
            <Route path="/dashboard/create-ad" component={AdGenerator} />
            <ChatWidget />
          </div>
        </div>
      </DashboardContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    userOffers: state.offersReducer.userOffers,
    currentUser: state.authReducer.currentUser,
    offerAnalytics: state.analyticsReducer.offerAnalytics,
    agreements: state.agreementsReducer.agreements
  };
};

export default connect(
  mapStateToProps,
  {
    getOfferAnalytics,
    getUserOffers,
    getUserData,
    getAgreements
  }
)(privateRoute(Dashboard));

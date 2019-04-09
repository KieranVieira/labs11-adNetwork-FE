import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Route } from "react-router-dom";
import moment from "moment";

import { getAnalytics } from "../../store/actions/analyticsAction.js";
import { getOffers } from "../../store/actions/offersAction.js";
import { getUserData } from "../../store/actions/authAction.js";
import { getAgreements } from "../../store/actions/agreementsAction.js";
import {
  getUserNotifications,
  updateUserNotification
} from "../../store/actions/notificationsAction.js";
import privateRoute from "../auth-HOC";
import DashboardLeft from "../../components/dashboard/dashboard-left/DashboardLeft.js";
import DashboardTop from "../../components/dashboard/dashboard-top/DashboardTop.js";
import ChatWidget from "../../components/chat-widget/ChatWidget.js";
import Analytics from "./analytics/Analytics.js";
import AdGenerator from "./ad-generator/AdGenerator.js";
import Offers from "./offers/Offers.js";
import Settings from "./settings/Settings.js";

const DashboardContainer = styled.div`
  display: flex;
  background-color: #f1f1f1;
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

class Dashboard extends Component {
  state = {
    currentAnalyticId: "",
    started_at: `${moment().format("YYYY-MM-DD")}`,
    ended_at: `${moment().format("YYYY-MM-DD")}`
  };

  componentDidMount() {
    this.props.getUserData();
    this.props.getOffers();
    this.props.getAgreements();
    this.props.getUserNotifications();
    this.startGettingNotifications();
  }

  componentWillUnmount() {
    clearInterval(this.notificationsInterval);
  }

  getAnalytics = () => {
    this.props.getAnalytics(
      this.state.currentAnalyticId,
      `${moment(this.state.started_at).format("YYYY-MM-DD")}T00:00:00Z`,
      `${moment(this.state.ended_at).format("YYYY-MM-DD")}T23:59:00Z`
    );
  };

  handleStartedDateChange = date => {
    this.setState({ started_at: date });
  };

  handleEndedDateChange = date => {
    this.setState({
      ended_at: date
    });
  };

  startGettingNotifications = () => {
    this.notificationsInterval = setInterval(() => {
      this.props.getUserNotifications();
    }, 15000);
  };

  handleOfferSelect = e => {
    this.props.getAnalytics(e.target.value);
    this.setState({
      currentAnalyticId: e.target.value
    });
  };

  render() {
    const { currentAnalyticId } = this.state;
    const {
      currentUser,
      agreements,
      userNotifications,
      updateUserNotification,
      analytics,
      getAnalytics
    } = this.props;

    return (
      <DashboardContainer>
        <DashboardLeft />
        <div className="main-content">
          <DashboardTop
            {...this.props}
            handleOfferSelect={this.handleOfferSelect}
            agreements={agreements}
            userNotifications={userNotifications}
            updateUserNotification={updateUserNotification}
            getAnalytics={this.getAnalytics}
            handleStartedDateChange={this.handleStartedDateChange}
            handleEndedDateChange={this.handleEndedDateChange}
            startedAt={this.state.started_at}
            endedAt={this.state.ended_at}
          />
          <div className="dashboard-view">
            <Route
              exact
              path="/dashboard"
              render={props => (
                <Analytics
                  {...props}
                  getAnalytics={getAnalytics}
                  analytics={analytics}
                  currentAnalyticId={currentAnalyticId}
                  startedAt={this.state.started_at}
                  endedAt={this.state.ended_at}
                />
              )}
            />
            <Route
              path="/dashboard/offers"
              render={props => <Offers {...props} currentUser={currentUser} />}
            />
            <Route
              path="/dashboard/settings"
              render={props => (
                <Settings {...props} currentUser={currentUser} />
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

const mapStateToProps = state => ({
  userNotifications: state.notificationsReducer.userNotifications,
  currentUser: state.authReducer.currentUser,
  analytics: state.analyticsReducer.analytics,
  offers: state.offersReducer.offers,
  agreements: state.agreementsReducer.agreements
});

export default connect(
  mapStateToProps,
  {
    getAnalytics,
    getOffers,
    getUserData,
    getAgreements,
    getUserNotifications,
    updateUserNotification
  }
)(privateRoute(Dashboard));

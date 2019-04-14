import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LinearLoader from "../../loader/LinearLoader";
import MobileMenu from "./mobile-navigation/MobileMenu.js";
import MobileMenuButtons from "./mobile-navigation/MobileMenuButtons.js";
import AnalyticsDropdown from "./dropdowns/AnalyticsDropdown.js";
import NotificationDropdown from "./dropdowns/NotificationDropdown.js";
import UserDropdown from "./dropdowns/UserDropdown.js";

import {
  NavContainer,
  LeftSection,
  RightSection,
  Header
} from "../dashboardStyles.js";

class DashboardTop extends React.Component {
  state = {
    movileNavOpen: false,
    userMenuOpen: false,
    notificationsMenuOpen: false
  };

  toggleNav = () => {
    this.setState({ movileNavOpen: !this.state.movileNavOpen });
  };

  handleUserMenuToggle = () => {
    this.setState(state => ({ userMenuOpen: !state.userMenuOpen }));
  };

  handleNotificationsToggle = () => {
    this.setState(state => ({
      notificationsMenuOpen: !state.notificationsMenuOpen
    }));
  };

  handleUserMenuClose = e => {
    e.stopPropagation();

    this.setState({ userMenuOpen: false });
  };

  handleNotificationsClose = e => {
    e.stopPropagation();
    const { userNotifications, updateUserNotification } = this.props;

    this.setState({ notificationsMenuOpen: false });

    userNotifications &&
      userNotifications
        .filter(n => n.unread !== false)
        .map(n => updateUserNotification({ ...n, unread: false }));
  };

  render() {
    const {
      currentUser,
      userNotifications,
      handleOfferSelect,
      currentOffer,
      offers,
      agreements,
      isLoadingAds,
      isLoadingAgreements,
      isLoadingOffers,
      isLoadingStripe,
      isLoadingAnalytics,
      isLoadingNotifications,
      auth
    } = this.props;

    const { userMenuOpen, notificationsMenuOpen, movileNavOpen } = this.state;

    return (
      <>
        <NavContainer>
          {/* --------------------- Mobile Hamburger Menu ------------------ */}
          <MobileMenu
            movileNavOpen={movileNavOpen}
            toggleNav={this.toggleNav}
          />
          <LeftSection>
            {/* --------------------- Mobile Hamburger and Create Ad buttons ------------------ */}
            <MobileMenuButtons
              movileNavOpen={movileNavOpen}
              location={this.props.location}
              toggleNav={this.toggleNav}
              currentUser={currentUser}
            />
            {/* --------------------- Conditional Header Rendering ------------------ */}
            <Header>
              {this.props.location.pathname.includes("offers") ? (
                <>
                  <i className="fas fa-list" /> Offers
                </>
              ) : this.props.location.pathname.includes("settings") ? (
                <>
                  <i className="fas fa-cog" /> Settings
                </>
              ) : this.props.location.pathname.includes("create") ? (
                <>
                  <i className="fas fa-pencil-alt" /> Create Ad
                </>
              ) : (
                <>
                  <i className="fas fa-chart-line" /> Dashboard
                </>
              )}
            </Header>
            {/* --------------------- Analytics selector ------------------ */}
            <AnalyticsDropdown
              currentUser={currentUser}
              handleOfferSelect={handleOfferSelect}
              location={this.props.location}
              currentOffer={currentOffer}
              offers={offers}
              agreements={agreements}
            />
            {/* --------------------- Create Advertisement Button ------------------ */}
            {currentUser.acct_type === "advertiser" && (
              <Link data-btn="create_ad-button" to="/dashboard/create-ad">
                Create Advertisement
              </Link>
            )}
          </LeftSection>
          <RightSection>
            {currentUser && (
              <>
                {/* --------------------- Notifications Menu ------------------ */}
                <NotificationDropdown
                  notificationsMenuOpen={notificationsMenuOpen}
                  userNotifications={userNotifications}
                  handleToggle={this.handleNotificationsToggle}
                  handleClose={this.handleNotificationsClose}
                  location={this.props.location}
                />
                {/* --------------------- User menu ------------------ */}
                <UserDropdown
                  auth={auth}
                  userMenuOpen={userMenuOpen}
                  currentUser={currentUser}
                  handleToggle={this.handleUserMenuToggle}
                  handleClose={this.handleUserMenuClose}
                />
              </>
            )}
          </RightSection>
        </NavContainer>
        {!isLoadingNotifications &&
          !isLoadingAnalytics &&
          (isLoadingAds ||
            isLoadingAgreements ||
            isLoadingOffers ||
            isLoadingStripe ||
            isLoadingAnalytics) && <LinearLoader />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingAnalytics: state.analyticsReducer.isLoading,
  isLoadingAds: state.adReducer.isLoading,
  isLoadingAgreements: state.agreementsReducer.isLoading,
  isLoadingOffers: state.offersReducer.isLoading,
  isLoadingStripe: state.stripeReducer.isLoading,
  isLoadingNotifications: state.notificationsReducer.isLoading
});

export default connect(
  mapStateToProps,
  null
)(DashboardTop);

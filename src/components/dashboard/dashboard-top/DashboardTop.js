import React from "react";
import { Link } from "react-router-dom";

import {
  NavContainer,
  LeftSection,
  RightSection,
  Header,
  MobileHamburger,
  MobileCreate,
  MobileNav,
  MobileNavButton
} from "../dashboardStyles.js";

class DashboardTop extends React.Component{
  state = {
    movileNavOpen: false
  }

  toggleNav = () => {
    this.setState({ movileNavOpen: !this.state.movileNavOpen })
  }

  render(){
    return (
      <NavContainer>
        <MobileNav status={this.state.movileNavOpen}>
          <button onClick={() => this.toggleNav()}>
            <i className="fas fa-times"/>
          </button>
          <MobileNavButton onClick={() => this.toggleNav()}>
            <Link to="/dashboard">
              <i className="fas fa-chart-line"/>
              Dashboard
            </Link>
          </MobileNavButton>
          <MobileNavButton onClick={() => this.toggleNav()}>
            <Link to="/dashboard/offers">
              <i className="fas fa-list"/>
              Offers
            </Link>
          </MobileNavButton>
          <MobileNavButton onClick={() => this.toggleNav()}>
            <Link to="/dashboard/settings">
              <i className="fas fa-cog"/>
              Settings
            </Link>
          </MobileNavButton>
        </MobileNav>
        <LeftSection>
        {/* --------------------- Mobile navigation ------------------ */}
        <div>
          <MobileHamburger>
            <a onClick={() => this.setState({ movileNavOpen: !this.state.movileNavOpen })}>
              <i className="fas fa-bars"/>
            </a>
          </MobileHamburger>
          {!this.props.location.pathname.includes("dashboard/") &&
          <MobileCreate>
            <Link to="/dashboard/create-ad">
              <i class="fas fa-pencil-alt"/>
            </Link>
          </MobileCreate>}
        </div>
        {/* ---------------------------------------------------------- */}
          <Header>
            {this.props.location.pathname.includes("offers") ? <><i className="fas fa-list" /> Offers</>
            : this.props.location.pathname.includes("settings") ? <><i className="fas fa-cog" /> Settings</>
            : this.props.location.pathname.includes("create") ? <><i className="fas fa-pencil-alt" /> Create Ad</>
            :<><i className="fas fa-chart-line" /> Dashboard</>}
          </Header>
          {!this.props.location.pathname.includes("dashboard/") &&
          <select
            name="selected_offer"
            value={this.props.currentOffer}
            onChange={this.props.handleOfferSelect}
            required
          >
          {this.props.currentUser.acct_type === "advertiser" ?
            <>
            <option value="">All Offers</option>
            {this.props.userOffers.length &&
              this.props.userOffers.map(offer => {
                return (
                  <option key={offer.id} value={offer.id}>
                    {offer.name}
                  </option>
                );
              })}
            </>:
            <>
            <option value="">All Agreements</option>
            {this.props.agreements.length && 
              this.props.agreements.map(a => {
                return(
                  <option key={a.id} value={a.id}>
                    {a.name}
                  </option>
                )
              })
            }
            </>
              }
          </select>
          }
          {this.props.currentUser.acct_type === "advertiser" &&
          <Link to="/dashboard/create-ad">Create Advertisement</Link>}
        </LeftSection>
        <RightSection>
          {this.props.currentUser && (
            <>
              <i
                className="fas fa-bell"
                onClick={() => {
                  localStorage.clear();
                  this.props.history.push("/");
                }}
              />
              <div>
                <img src={this.props.currentUser.image_url} alt="" />
                <h2>{this.props.currentUser.name}</h2>
              </div>
            </>
          )}
        </RightSection>
      </NavContainer>
    );
  }
};

export default DashboardTop;

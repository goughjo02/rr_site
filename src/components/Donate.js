import React, { Component } from "react";
// Material UI stuff
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
// Images
import DonateOptionEducation from "../assets/donate/donate_option_eduction.jpg";
import DonateOptionGodParent from "../assets/donate/donate_option_godparent.jpg";
import DonateOptionMicrofinance from "../assets/donate/donate_option_microfinance.jpg";
import GiftOptionsBook from "../assets/donate/gift_options_books.png";
import GiftOptionsMedical from "../assets/donate/gift_options_medical.png";
import GiftOptionsSchoolMeals from "../assets/donate/gift_options_school_meals.png";
import GiftOptionsUniforms from "../assets/donate/gift_options_uniforms.png";
import ButcherThankYou from "../assets/donate/butcher_thank_you.jpg";
import OneHundredPercent from "../assets/donate/one_hundred_percent_funds.png";

const styles = ({ theme }) => ({
  spacer: {
    height: "140px"
  },
  alloptions: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  option: {
    width: "100vw",
    marginBottom: 0
  },
  donateOptions: {
    textAlign: "center",
    fontSize: "38px",
    marginBottom: "30px",
    fontWeight: "bold",
    color: "green"
  },
  donaterow: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "space-around",
    justifyContent: "space-around",
    width: "auto",
    paddingBottom: 0
  },
  donateimage: {
    position: "relative",
    cursor: "pointer",
    marginTop: "20px",
    overflow: "hidden",
    height: "150px",
    width: "340px"
  },
  donateitem: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 1
  },
  donatetext: {
    position: "absolute",
    fontWeight: "bold",
    color: "white",
    fontSize: "35px",
    top: "45px",
    left: "42px",
    width: "75%",
    textAlign: "center",
    "&:before": {
      overflow: "hidden",
      width: "100%",
      content: "",
      display: "block",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: "green",
      opacity: 0.5,
      transition: "all .3s linear"
    }
  }
});

class Donate extends Component {
  render() {
    return (
      <div>
        <div className="alloptions">
          <div className="option">
            <div id="donateOptions">Donation options</div>
            <div>
              RiseRwanda provides you with the option to choose which way you
              would like to help out.
            </div>
            <div className="donaterow">
              <img src={DonateOptionEducation} alt="donate_options" />
              <div className="donateitem">
                <a
                  className="nolink"
                  href="http://riserwanda.com/donate/the-education-fund/"
                >
                  <div className="donateimage">
                    <p className="donatetext">Education</p>
                  </div>
                </a>
              </div>
              <img src={DonateOptionGodParent} alt="donate_options_godparent" />
              <div className="donateitem">
                <a
                  className="nolink"
                  href="http://riserwanda.com/donate/become-a-godparent/"
                >
                  <div className="donateimage">
                    <p className="donatetext">Godparent</p>
                  </div>
                </a>
              </div>
              <img
                src={DonateOptionMicrofinance}
                alt="donate_options_microfinance"
              />
              <div className="donateitem">
                <a
                  className="nolink"
                  href="http://riserwanda.com/donate/the-microfinance-fund/"
                >
                  <div className="donateimage">
                    <p className="donatetext">Microfinance</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="option">
            <div id="gifts">Gift options</div>
            <div className="giftrow">
              <div className="giftrowitem">
                <div className="giftimage tint1">
                  <img src={GiftOptionsMedical} alt="gift_option_medical" />
                  <p className="gifttext">Medical</p>
                </div>
              </div>
              <div className="giftrowitem">
                <div className="giftimage tint1">
                  <img src={GiftOptionsUniforms} alt="gift_option_uniforms" />
                  <p className="gifttext">Uniforms</p>
                </div>
              </div>
              <div className="giftrowitem">
                <div className="giftimage tint1">
                  <img src={GiftOptionsBook} alt="gift_option_book" />
                  <p className="gifttext">Books</p>
                </div>
              </div>
              <div className="giftrowitem">
                <div className="giftimage tint1">
                  <img src={GiftOptionsSchoolMeals} alt="gift_option_meals" />
                  <p className="gifttext">School Meals</p>
                </div>
              </div>
            </div>
          </div>
          <div className="option">
            <div id="microfinance">Microfinance option</div>
            <div className="microfinance">
              <div className="microimage">
                <img src={ButcherThankYou} alt="butcher_thank_you" />
              </div>
              <div className="microfinancetext">
                €250 = full capital requirement to finance a business venture.
                This will stimulate economic growth, boost household income,
                empower a female role model. You will be kept up to date on the
                performance and impact of your investment.
                <div className="microchoose">Choose</div>
              </div>
            </div>
          </div>
        </div>
        <h3>Transparency</h3>
        <img
          className="  wp-image-2063 alignright"
          src={OneHundredPercent}
          alt="transparecy with logo"
          width="348"
          height="325"
        />
        <div>
          Rise Rwanda, a.k.a. Rwamagana School Children’s Fund, is a registered
          Irish charity. Our charity number is CHY20665. As a registered Irish
          charity, your support is essential to us. We strive for the up most
          standard of governance, accountability and transparency. Transparency
          has a key role in maintaining and building trust. Our Board of
          Directors are unpaid volunteers who receive no salary for their time
          given to the charity.  All work is carried out on a voluntary basis.
           100% of donations received go directly to the fund.  All and all
          administrative costs, travel costs and time are covered by the
          founders.
        </div>
      </div>
    );
  }
}

export default withWidth()(withStyles(styles, { withTheme: true })(Donate));

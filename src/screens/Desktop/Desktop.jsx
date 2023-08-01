import React from "react";
import { Button } from "../../components/Button";
import "./style.css";
import evenstan from "../../images/evenstan-icon-2.png";
import Dropdown from "react-bootstrap/Dropdown";
import DatePicker from "react-date-picker";
import calendorIcon from "../../images/material-symbols-calendar-month.svg";
import downArrow from "../../images/material-symbols-keyboard-arrow-down-rounded.svg";
import clock from "../../images/ic-sharp-access-time.svg";
import "./DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Desktop = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="desktop">
        <div className="div">
          <header className="header">
            <div className="logo">
              <div className="vertical-container">
                <img
                  className="evenstan-icon"
                  alt="Evenstan icon"
                  src={evenstan}
                />
              </div>
              <div className="div-2">
                <div className="event-stan">
                  <span className="text-wrapper">Event</span>
                  <span className="span">Stan</span>
                </div>
              </div>
            </div>
            <div className="horizontal-container">
              <div className="div-2">
                {/* <a href="https://twitter.com/" className="text-wrapper-2">
                About
              </a> */}
                <Link
                  to="/about"
                  className="text-wrapper-2"
                  style={{ textDecoration: "none" }}
                >
                  About
                </Link>
                <Link
                  to="/about"
                  className="text-wrapper-2"
                  style={{ textDecoration: "none" }}
                >
                  Partner with us
                </Link>
                <Link
                  to="/about"
                  className="text-wrapper-2"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </Link>
              </div>
              <div className="button-container">
                <Link
                  to="/about"
                  className="text-wrapper-2"
                  style={{ textDecoration: "none" }}
                >
                  Blog
                </Link>
                <button className="div-wrapper text-wrapper-4 ">
                  Login/ Register
                </button>
                {/* <div className="div-wrapper">
                <button className="div-wrapper text-wrapper-4 ">
                  Login/ Register
                </button>
              </div> */}
              </div>
            </div>
          </header>
          <footer className="footer">
            <div className="overlap-group">
              <div className="footer-container">
                <div className="links-divider">
                  <div className="main-menu">
                    <div className="menu-container">
                      <div className="links-wrapper">
                        <div className="links">
                          <div className="HELP-MENU">Company</div>
                          <div className="flex-container">
                            <div className="text">
                              <span className="span-2">
                                About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <br />
                              </span>
                            </div>
                            <div className="text">
                              <span className="span-2">
                                Blog&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <br />
                              </span>
                            </div>
                            <div className="text">
                              <span className="span-2">
                                Vendor Portal
                                <br />
                              </span>
                            </div>
                            <div className="text">
                              <span className="span-2">
                                Careers&nbsp;&nbsp;
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="links-wrapper">
                        <div className="links">
                          <div className="HELP-MENU-2">More</div>
                          <div className="flex-container-2">
                            <div className="text">
                              <span className="span-2">
                                Contact Us
                                <br />
                              </span>
                            </div>
                            <div className="text">
                              <span className="span-2">
                                FAQs
                                <br />
                              </span>
                            </div>
                            <div className="text">
                              <span className="span-2">
                                Partner with us
                                <br />
                              </span>
                            </div>
                            <div className="text">
                              <span className="span-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="links-wrapper">
                        <div className="links">
                          <div className="HELP-MENU-3">Services</div>
                          <div className="flex-container-3">
                            <div className="text">
                              <span className="span-2">
                                Book an Event
                                <br />
                              </span>
                            </div>
                            <div className="text">
                              <span className="span-2">
                                Hire a Professional
                                <br />
                              </span>
                            </div>
                            <div className="text">
                              <span className="span-2">
                                Corporate Bookings
                                <br />
                              </span>
                            </div>
                            <div className="text">
                              <span className="span-2">Trending Packages</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="div-3">
                        <div className="div-3">
                          <div className="HELP-MENU-3">Legal</div>
                          <div className="flex-container-2">
                            <div className="text">
                              <span className="span-2">
                                Legal agreements
                                <br />
                              </span>
                            </div>
                            <div className="text">
                              <span className="span-2">
                                Terms &amp; Conditions
                                <br />
                              </span>
                            </div>
                            <div className="text">
                              <span className="span-2">Privacy Policy</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="divider"
                    alt="Divider"
                    src="/img/divider.svg"
                  />
                </div>
                <div className="legal-links">
                  <img
                    className="container"
                    alt="Container"
                    src="/img/container.svg"
                  />
                  <div className="frame">
                    <p className="p">
                      © Copyright 2023 EventStan, All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className="overlap">
            <div className="frame-2">
              <div className="notification-action">
                <div className="group">
                  <div className="text-wrapper-5">Name your event</div>
                  <div className="text-wrapper-6">My Event</div>
                </div>
              </div>
              <div className="notification-action-2">
                <div className="group-2">
                  {/*<div className="text-wrapper-7">Location</div>
                <div className="text-wrapper-6">Dubai</div>
              </div>
              <img
                className="material-symbols"
                alt="Material symbols"
                src="/img/material-symbols-keyboard-arrow-down-rounded.svg"
              /> */}
                  <label className="text-wrapper-7">Location</label>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="warning"
                      className="text-wrapper-6"
                      style={{ background: "transparent", border: "none" }}
                      id="dropdown-basic"
                    >
                      Dubai
                      <img src={downArrow} style={{ marginLeft: "10px" }} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Abu Dhabi</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">London</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Paris</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="notification-action-3">
                <div className="group-3">
                  <div className="text-wrapper-7">Age Group</div>
                  <div className="text-wrapper-6">Kids</div>
                </div>
                <img className="img" alt="Material symbols" src={downArrow} />
              </div>
              <div className="notification-action-4">
                <div className="group-4">
                  <div className="text-wrapper-7">Guest Count</div>
                  <div className="text-wrapper-6">1-25</div>
                </div>
                <img
                  className="material-symbols-2"
                  alt="Material symbols"
                  src={downArrow}
                />
              </div>
              <div className="notification-action-5">
                <div className="group-5">
                  <div className="text-wrapper-5">Tentative Date</div>
                  {/* <div className="text-wrapper-6">21/12/2023</div> */}
                  <DatePicker
                    value={startDate}
                    clearIcon={null}
                    className="text-wrapper-6"
                    calendarIcon={
                      <img src={calendorIcon} height="20px" width="20px" />
                    }
                  />
                </div>
                {/* <img
                className="material-symbols-3"
                alt="Material symbols"
                src="/img/material-symbols-calendar-month.svg"
              /> */}
              </div>
              <div className="notification-action-6">
                <div className="group-6">
                  <div className="text-wrapper-7">Start Time</div>
                  <div className="text-wrapper-6">10:00</div>
                </div>
                <img
                  className="ic-sharp-access-time"
                  alt="Ic sharp access time"
                  src={clock}
                />
              </div>
              <div className="notification-action-7">
                <div className="group-7">
                  <div className="text-wrapper-7">End Time</div>
                  <div className="text-wrapper-6">15:00</div>
                </div>
                <img
                  className="ic-sharp-access-time"
                  alt="Ic sharp access time"
                  src={clock}
                />
              </div>
              <Button
                className="button-instance"
                createAnAccountClassName="design-component-instance-node"
                property1="button-primary"
                text="Edit"
              />
            </div>
            <div className="frame-3">
              <div className="frame-4">
                <div className="auto-layout">
                  <div className="frame-5">
                    <div className="frame-wrapper">
                      <div className="frame-6" />
                    </div>
                    <div className="auto-layout-2">
                      <Link
                        to="/about"
                        className="text-wrapper-8"
                        style={{ textDecoration: "none" }}
                      >
                        Venue
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="auto-layout-3">
                  <div className="frame-5">
                    <div className="frame-7">
                      <div className="frame-8" />
                    </div>
                    <div className="auto-layout-2">
                      <Link
                        to="/about"
                        className="text-wrapper-8"
                        style={{ textDecoration: "none" }}
                      >
                        Decor
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="auto-layout-4">
                  <div className="frame-5">
                    <div className="frame-9">
                      <div className="frame-10" />
                    </div>
                    <div className="auto-layout-2">
                      <Link
                        to="/about"
                        className="text-wrapper-8"
                        style={{ textDecoration: "none" }}
                      >
                        Catering
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-11">
                <div className="auto-layout-5">
                  <div className="frame-5">
                    <div className="frame-12">
                      <div className="frame-13" />
                    </div>
                    <div className="auto-layout-2">
                      <Link
                        to="/about"
                        className="text-wrapper-8"
                        style={{ textDecoration: "none" }}
                      >
                        Photographer
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="auto-layout-6">
                  <div className="frame-5">
                    <div className="frame-14">
                      <div className="frame-15" />
                    </div>
                    <div className="auto-layout-2">
                      <Link
                        to="/about"
                        className="text-wrapper-8"
                        style={{ textDecoration: "none" }}
                      >
                        Gifting
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="auto-layout-7">
                  <div className="frame-5">
                    <div className="frame-16">
                      <div className="frame-17" />
                    </div>
                    <div className="auto-layout-2">
                      <Link
                        to="/about"
                        className="text-wrapper-9"
                        style={{ textDecoration: "none" }}
                      >
                        DJ
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-18">
                <div className="auto-layout-8">
                  <div className="frame-5">
                    <div className="frame-19">
                      <div className="frame-20" />
                    </div>
                    <div className="auto-layout-2">
                      <Link
                        to="/about"
                        className="text-wrapper-9"
                        style={{ textDecoration: "none" }}
                      >
                        Singer
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="auto-layout-9">
                  <div className="frame-5">
                    <div className="frame-21">
                      <div className="frame-22" />
                    </div>
                    <div className="auto-layout-2">
                      <Link
                        to="/about"
                        className="text-wrapper-9"
                        style={{ textDecoration: "none" }}
                      >
                        Magician
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="auto-layout-10">
                  <div className="frame-5">
                    <div className="frame-23">
                      <div className="frame-24" />
                    </div>
                    <div className="auto-layout-2">
                      <Link
                        to="/about"
                        className="text-wrapper-9"
                        style={{ textDecoration: "none" }}
                      >
                        Videographer
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-25">
                <div className="auto-layout-11">
                  <div className="frame-5">
                    <div className="frame-26">
                      <div className="frame-27" />
                    </div>
                    <div className="auto-layout-2">
                      <Link
                        to="/about"
                        className="text-wrapper-9"
                        style={{ textDecoration: "none" }}
                      >
                        Emcee
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="auto-layout-12">
                  <div className="frame-5">
                    <div className="frame-28">
                      <div className="frame-29" />
                    </div>
                    <div className="auto-layout-2">
                      <Link
                        to="/about"
                        className="text-wrapper-9"
                        style={{ textDecoration: "none" }}
                      >
                        Face Painter
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="auto-layout-13">
                  <div className="frame-5">
                    <div className="frame-30">
                      <div className="frame-31" />
                    </div>
                    <div className="auto-layout-2">
                      <Link
                        to="/about"
                        className="text-wrapper-9"
                        style={{ textDecoration: "none" }}
                      >
                        Choreographer
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-10">Primary</div>
              <div className="text-wrapper-11">Add-ons</div>
            </div>
            <div className="text-wrapper-12">Services</div>
          </div>
          <h1 className="h-1">Packages</h1>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="component">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="frame-32">
                      <Link
                        to="/about"
                        className="text-wrapper-13"
                        style={{ textDecoration: "none" }}
                      >
                        House party package
                      </Link>
                      <div className="frame-33">
                        <div className="text-wrapper-14">AED 2999</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-34">
                <div className="frame-33">
                  <div className="text-wrapper-15">Trending</div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-8">
            <div className="overlap-2">
              <div className="component">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-3">
                    <div className="frame-32">
                      <div className="text-wrapper-13">House party package</div>
                      <div className="frame-33">
                        <div className="text-wrapper-14">AED 2999</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-34">
                <div className="frame-33">
                  <div className="text-wrapper-15">Trending</div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-9">
            <div className="group-wrapper">
              <div className="group-10">
                <div className="overlap-group-4">
                  <div className="frame-32">
                    <Link
                      to="/about"
                      className="text-wrapper-13"
                      style={{ textDecoration: "none" }}
                    >
                      Club Package
                    </Link>
                    <div className="frame-33">
                      <div className="text-wrapper-14">AED 2999</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-11">
            <div className="group-wrapper">
              <div className="group-10">
                <div className="overlap-group-5">
                  <div className="frame-32">
                    <Link
                      to="/about"
                      className="text-wrapper-13"
                      style={{ textDecoration: "none" }}
                    >
                      Tents under the sky
                    </Link>
                    <div className="frame-33">
                      <div className="text-wrapper-14">AED 2999</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-12">
            <div className="group-wrapper">
              <div className="group-10">
                <div className="overlap-group-6">
                  <div className="frame-32">
                    <Link
                      to="/about"
                      className="text-wrapper-13"
                      style={{ textDecoration: "none" }}
                    >
                      Pool Party Package
                    </Link>
                    <div className="frame-33">
                      <div className="text-wrapper-14">AED 2999</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/**
 *
 * Tabs
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  TabContent,
  Container,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from 'reactstrap';
import classnames from 'classnames';

import StyledTabs from './StyledTabs';
import Informations from '../Informations';
import Reviews from '../Reviews';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { reviews } = this.props;

    return (
      <React.Fragment>
        <StyledTabs />
        <div className="tabs-wrapper">
          <Nav tabs>
            <Container>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === '1'
                  })}
                  onClick={() => {
                    this.toggle('1');
                  }}
                >
                  <p>
                    <span>Informations</span>
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === '2'
                  })}
                  onClick={() => {
                    this.toggle('2');
                  }}
                >
                  <p>
                    <span>Reviews</span>
                  </p>
                </NavLink>
              </NavItem>
            </Container>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1" className="informations-pane">
              <Container>
                <Row>
                  <Col sm="12">
                    <Informations />
                  </Col>
                </Row>
              </Container>
            </TabPane>
            <TabPane tabId="2" className="reviews-pane">
              <Container>
                <Row>
                  <Col sm="12">
                    <Reviews reviews={reviews} />
                  </Col>
                </Row>
              </Container>
            </TabPane>
          </TabContent>
        </div>
      </React.Fragment>
    );
  }
}

Tabs.defaultProps = {
  reviews: []
};

Tabs.propTypes = {
  reviews: PropTypes.array
};

export default Tabs;

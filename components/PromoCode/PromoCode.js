import React, { Component } from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';

import { connect } from 'react-redux';
import { handleChange } from '../../actions/promoCodeActions';
import Accordion from "../ItemDetails/ItemDetails";

const SECTION2 = [
  {
    title: 'Show Promo Code',
  },
];

export class PromoCodeDiscount extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        open: false,
        value: '',
        promoCode: {value :''}
    };
  }

  handleChange = e => {
    // the setState below will be sent to redux
    // this.setState({ value: e.target.value });
    this.props.handleChange(e);
  };

  _renderHeader = () => {
    return (
        <View style={styles.header}>
          <Text style={styles.headerText}>Show Promo Code</Text>
        </View>
    );
  };

  _renderContent = () => {
    return (
        <Grid>
          <Row>
          <Text>Promo Code</Text>
          </Row>
          <Row>
            <Col size={70}>
            <TextInput
                style={{height: 40}}
                placeholder="Enter promo code"
                value={this.props.promoCode}
                onChange={this.handleChange}
            />
            </Col>
            <Col size={30}>
              <Button
                  block
                  title={'Apply'}
                  className="btn-round"
                  disabled={this.props.isDisabled}
                  onPress={this.props.giveDiscount}
              />
            </Col>
          </Row>
        </Grid>
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
        <Grid style={styles.container}>
          <Col>
            <Accordion
                sections={SECTION2}
                activeSections={this.state.activeSections}
                renderHeader={this._renderHeader()}
                renderContent={this._renderContent()}
                onChange={this._updateSections}
            />
          </Col>
        </Grid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFC',
    // margin:20,
  },
});

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

const PromoCodeComponent = connect(mapStateToProps, { handleChange })(PromoCodeDiscount);

export default PromoCodeComponent;

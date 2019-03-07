import React, { Component } from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import {Text, View, Image, StyleSheet} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
  {
    title: 'See Item details',
  },
];

export default class ItemDetails extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      activeSections: [],
    };
  }

  _renderHeader1 = () => {
    return (
        <View style={styles.header}>
          <Text style={styles.headerText}>See Item Details</Text>
        </View>
    );
  };

  _renderContent1 = () => {
    return (
        <Grid>
          <Col>
            <Image
                style={{width: 100, height: 100}}
                source={{uri: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/29365_XXX_v1.tif&wid=650&cvt=jpeg'}}
            />
          </Col>
          <Col>
            <Row>
              <Text> Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red</Text>
            </Row>
            <Row>
              <Row>
              <Text>{`$${this.props.price}`}</Text>
              </Row>
              <Row>
                <Text>Qty: 1</Text>
              </Row>
            </Row>
            <Row>
              <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>
                {`$${
                    this.props.price
                    }`}
              </Text>

            </Row>
          </Col>
        </Grid>
    );
  };

  _updateSections1 = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
        <Grid style={styles.container}>
          <Row>
            <Col>
              <Accordion
                  sections={SECTIONS}
                  activeSections={this.state.activeSections}
                  renderHeader={this._renderHeader1}
                  renderContent={this._renderContent1}
                  onChange={this._updateSections1}
              />
            </Col>
          </Row>
          <Row>

          </Row>
        </Grid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFC',
    margin:20,
  },
});
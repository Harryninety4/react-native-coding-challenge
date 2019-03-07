import React, { Component } from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import {StyleSheet, View, Text} from 'react-native';
import { Tooltip } from 'react-native-elements';

export default class PickupSavings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSavings: 3.85
    };
  }

  render() {
    return (
      <Grid className="show-grid" style={styles.container}>
        <Col>
            <Tooltip popover={
                <Text>
                    Picking up your order in store helps us cut costs and we pass the savings onto you!
                </Text>}
                     width={300}
                     height={70}
            >
                <Text>Pickup Savings</Text>
            </Tooltip>
        </Col>
        <Col style={styles.totalSavings}>
          <Text style={styles.totalSavings}>
            {`$${this.props.price}`}
          </Text>
        </Col>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#F5FCFC',
        margin:20,
    },
    totalSavings: {
        color: 'red',
        fontWeight: 'bold'
    }
});
import React, { Component } from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import {StyleSheet, Text, View} from 'react-native';


export default class TaxesFees extends Component {
  render() {
    return (
      <Grid className="show-grid" style={styles.container}>
        <Col >
            <Text>
                Est. taxes & fees
            </Text>
        </Col>
        <Col >
          <Text>
              {`$${this.props.taxes}`}
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
});
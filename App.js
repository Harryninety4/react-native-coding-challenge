import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCodeComponent from './components/PromoCode/PromoCode';
import { Col, Row, Grid } from "react-native-easy-grid";

// Import redux provider
import { connect } from 'react-redux';
import { handleChange } from './actions/promoCodeActions';

type Props = {};
class App extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            total: 108.03,
            taxes: 8.92,
            pickupSavings: -3.85,
            estimatedTotal: 0,
        };
    }

    componentDidMount = () => {
        this.setState(
            { taxes: (this.state.total + this.state.pickupSavings) * 0.0875 },
            function() {
                this.setState({
                    estimatedTotal:
                        this.state.total + this.state.pickupSavings + this.state.taxes
                });
            }
        );
    };

    giveDiscountHandler = () => {
        if (this.props.promoCode === 'DISCOUNT') {
            this.setState(
                { estimatedTotal: this.state.estimatedTotal * 0.9 },
                function() {
                    this.setState({
                        disablePromoButton: true
                    });
                }
            );
        }
    };

  render() {
    return (
      <View style={styles.container}>
          <Grid style={styles.grid}>
              <Row/>

              <Row size={1} style={{marginTop:50}}>
                  <SubTotal price={this.state.total.toFixed(2)} />
              </Row>
              <Row size={1}>
                  <PickupSavings price={this.state.pickupSavings} />
              </Row>
              <Row size={1}>
                  <TaxesFees taxes={this.state.taxes.toFixed(2)} />
              </Row>
              <Row size={1}>
                  <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
              </Row>
              <Row size={3}>
                  <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
              </Row>
              <Row size={5}>
                  <PromoCodeComponent
                      giveDiscount={() => this.giveDiscountHandler()}
                      isDisabled={this.state.disablePromoButton}
                  />
              </Row>
              <Row/>
          </Grid>
      </View>
    );
  }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
});

export default connect(mapStateToProps, {handleChange})(App);

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFC',
  },
    grid:{
        width: 300,
        marginLeft: 65,
    }
});

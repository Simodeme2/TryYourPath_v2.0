/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Material UI
*/
import Grid from '@material-ui/core/Grid';

/*
Components
*/
import OrderForm from '../../components/order-form';

class OrderFormPage extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              {id ? (
              <OrderForm orderId={id} />
              ) : (
              <OrderForm />
              )}
          </Grid>
      </Grid>
    )
  }
}

export default (OrderFormPage);
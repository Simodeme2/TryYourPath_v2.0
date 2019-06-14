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
import MuseumForm from '../../components/museum-form';

class MuseumFormPage extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              {id ? (
              <MuseumForm museumId={id} />
              ) : (
              <MuseumForm />
              )}
          </Grid>
      </Grid>
    )
  }
}

export default (MuseumFormPage);
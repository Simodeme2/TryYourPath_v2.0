/*
External libraries
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Enum from "es6-enum";

/*
Material UI
*/
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import IconCreate from '@material-ui/icons/Create';
import IconDelete from '@material-ui/icons/Delete';
import IconDeleteForever from '@material-ui/icons/DeleteForever';
import Paper from '@material-ui/core/Paper';

const MUSEUMACTIONSENUM = Enum('DELETE', 'SOFTDELETE', 'SOFTUNDELETE');

/*
Styles
*/
const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
  },
});

class MuseaTable extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = {
    musea: null,
    museumId: null,
    museumAction: null,
    dialogOpen: false,
    dialogTitle: '',
    dialogMessage: ''
  };

  

  handleDialogOpen = (museumId, museumAction) => {
    let title = '';
    let message = '';

    switch(museumAction) {
      case MUSEUMACTIONSENUM.DELETE:
        title = 'Delete from the database?';
        message= `Do you wish permenantly delete the museum with id ${museumId}?`;
        break;
      case MUSEUMACTIONSENUM.SOFTDELETE:
        title = 'Soft-delete from the database?';
        message= `Do you wish to soft-delete the museum with id ${museumId}?`;
        break;
      case MUSEUMACTIONSENUM.SOFTUNDELETE:
        title = 'Soft-undelete from the database?';
        message= `Do you wish to soft-undelete the museum with id ${museumId}?`;
        break;
    }

    this.setState({
      museumId: museumId,
      museumAction: museumAction,
      dialogOpen: true,
      dialogTitle: title,
      dialogMessage: message
    });
  };

  handleDialogClose = () => {
    this.setState({dialogOpen: false});
  };

  handleDialogSubmit = () => {
    let url = '';
    let options = {};

    switch(this.state.museumAction) {
      case MUSEUMACTIONSENUM.DELETE:
        url = `/api/v1/musea/${this.state.museumId}`;
        options = {
          method: 'DELETE'
        }
        break;
      case MUSEUMACTIONSENUM.SOFTDELETE:
        url = `/api/v1/musea/${this.state.museumId}?mode=softdelete`;
        options = {
          method: 'DELETE'
        }
        break;
      case MUSEUMACTIONSENUM.SOFTUNDELETE:
        url = `/api/v1/musea/${this.state.museumId}?mode=softundelete`;
        options = {
          method: 'DELETE'
        }
        break;
    }

    fetch(url, options)
      .then(res => res.json())
      .then(results => {
        if(results.mode && results.mode === 'delete') {
          this.loadMusea();
        } else {
          const museum = results.museum;
          const i = this.state.musea.findIndex((obj, index, array) => {
            return obj._id === museum._id;
          });
          const musea = this.state.musea;
          musea[i] = museum;
  
          this.setState(prevState => ({
            ...prevState,
            musea: musea
          }));
        }
        }
      );

    this.handleDialogClose();
  }

  componentWillMount() {
    this.loadMusea();
  }

  loadMusea = () => {
    fetch('/api/v1/musea')
      .then( response => console.log(response))
      .then( item => this.setState({ musea: item })); 
  }
  

  render() {
    const { classes } = this.props;
    const { musea } = this.state;

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Synopsis</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Created</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {musea && musea.map( (museum, index) => (
                <TableRow key={museum.id}>
                  <TableCell>{museum.title}</TableCell>
                  <TableCell>{museum.synopsis}</TableCell>
                  <TableCell>{museum.category && museum.category.name}</TableCell>
                  <TableCell>{museum.created_at}</TableCell>
                  <TableCell>
                    <IconButton
                      component={Link} to={ `/admin/musea/${museum.id}/edit`}>
                      <IconCreate />
                    </IconButton>
                    <IconButton
                      onClick={() => this.handleDialogOpen(museum.id, (museum.deleted_at)?MUSEUMACTIONSENUM.SOFTUNDELETE:MUSEUMACTIONSENUM.SOFTDELETE)} style={{ opacity: ((museum.deleted_at)?0.3:1) }}>
                      <IconDelete/>
                    </IconButton>
                    <IconButton
                      onClick={() => this.handleDialogOpen(museum.id, MUSEUMACTIONSENUM.DELETE)}>
                      <IconDeleteForever />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Dialog
          fullScreen={false}
          open={this.state.dialogOpen}
          onClose={this.handleDialogClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{this.state.dialogTitle}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.state.dialogMessage}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleDialogClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.handleDialogSubmit()} color="primary" autoFocus>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    );  
  }
}

export default withStyles(styles)(MuseaTable);

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

const COMPANYACTIONSENUM = Enum('DELETE', 'SOFTDELETE', 'SOFTUNDELETE');

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

class CompaniesTable extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = {
    companies: null,
    companyId: null,
    companyAction: null,
    dialogOpen: false,
    dialogTitle: '',
    dialogMessage: ''
  };

  

  handleDialogOpen = (companyId, companyAction) => {
    let title = '';
    let message = '';

    switch(companyAction) {
      case COMPANYACTIONSENUM.DELETE:
        title = 'Delete from the database?';
        message= `Do you wish permenantly delete the company with id ${companyId}?`;
        break;
      case COMPANYACTIONSENUM.SOFTDELETE:
        title = 'Soft-delete from the database?';
        message= `Do you wish to soft-delete the company with id ${companyId}?`;
        break;
      case COMPANYACTIONSENUM.SOFTUNDELETE:
        title = 'Soft-undelete from the database?';
        message= `Do you wish to soft-undelete the company with id ${companyId}?`;
        break;
    }

    this.setState({
      companyId: companyId,
      companyAction: companyAction,
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

    switch(this.state.companyAction) {
      case COMPANYACTIONSENUM.DELETE:
        url = `/api/v1/companies/${this.state.companyId}`;
        options = {
          method: 'DELETE'
        }
        break;
      case COMPANYACTIONSENUM.SOFTDELETE:
        url = `/api/v1/companies/${this.state.companyId}?mode=softdelete`;
        options = {
          method: 'DELETE'
        }
        break;
      case COMPANYACTIONSENUM.SOFTUNDELETE:
        url = `/api/v1/companies/${this.state.companyId}?mode=softundelete`;
        options = {
          method: 'DELETE'
        }
        break;
    }

    fetch(url, options)
      .then(res => res.json())
      .then(results => {
        if(results.mode && results.mode === 'delete') {
          this.loadCompanies();
        } else {
          const company = results.company;
          const i = this.state.companies.findIndex((obj, index, array) => {
            return obj._id === company._id;
          });
          const companies = this.state.companies;
          companies[i] = company;
  
          this.setState(prevState => ({
            ...prevState,
            companies: companies
          }));
        }
        }
      );

    this.handleDialogClose();
  }

  componentWillMount() {
    this.loadCompanies();
  }

  loadCompanies = () => {
    fetch('/api/v1/companies')
      .then( response => response.json())
      .then( item => this.setState({ companies: item })); 
  }

  render() {
    const { classes } = this.props;
    const { companies } = this.state;

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
              {companies && companies.map( (company, index) => (
                <TableRow key={company.id}>
                  <TableCell>{company.title}</TableCell>
                  <TableCell>{company.synopsis}</TableCell>
                  <TableCell>{company.category && company.category.name}</TableCell>
                  <TableCell>{company.created_at}</TableCell>
                  <TableCell>
                    <IconButton
                      component={Link} to={ `/admin/companies/${company.id}/edit`}>
                      <IconCreate />
                    </IconButton>
                    <IconButton
                      onClick={() => this.handleDialogOpen(company.id, (company.deleted_at)?COMPANYACTIONSENUM.SOFTUNDELETE:COMPANYACTIONSENUM.SOFTDELETE)} style={{ opacity: ((company.deleted_at)?0.3:1) }}>
                      <IconDelete/>
                    </IconButton>
                    <IconButton
                      onClick={() => this.handleDialogOpen(company.id, COMPANYACTIONSENUM.DELETE)}>
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

export default withStyles(styles)(CompaniesTable);

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import { Divider, Grid, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import { Box } from '@mui/system';
import InvoiceText from './Invoice/InvoiceText';
import Item from './Invoice/Item';

const mockData = {
  route: 'Route #1533q83q9',
  totalSteps: 2,
  travelTime: 3,
  products: [
    {
      productName: 'DKLAB TIRE - 679',
      deliveryAddress: 'testMe checking',
      invoiceNumber: '#8w48978464',
      po: 'PO #02946353',
      parts: [{
        item: 'ITEM#',
        line: 'LINE',
        description: 'DESCRIPTION',
        qty: 'QTY',
        code: 'CODE'
      },
      {
        item: 'ITEM#',
        line: 'LINE',
        description: 'DESCRIPTION',
        qty: 'QTY',
        code: 'CODE'
      }]
    }
  ]
 
  
}

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderInvoiceAndPO = (item: any) => {
    return (

      <Grid container columns={{ xs: 12, md: 44 }}>
        <Grid item xs={0}>
          <InvoiceText text={`Inv ${item.invoiceNumber}`} />
        </Grid>
        <Grid item xs={2} />
        <InvoiceText text={`$PO ${item.po}`} />
      </Grid>
    )
  }
  const renderInvoice = () => {
    const invoice = mockData.products.map((item) => {
      return(
        <>
         <NameContainer>
           {item.productName}
          </NameContainer>
          <AddressContainer>
            {item.deliveryAddress}
          </AddressContainer>
          {renderInvoiceAndPO(item)}
          {
            item.parts.map(() => {
              return(
                <>
                <Item />
                <Divider />
                </>
              )
            })
          }
          
        </>
      )
    })
    return invoice;
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={'md'}
        open={open}
        onClose={handleClose}
      >
        <CustomizedTitle>
          {mockData.route}
          <DialogContentText>
            Total Steps: {mockData.totalSteps}
          </DialogContentText>
          <DialogContentText>
            Estimate Travel time: {mockData.travelTime}
          </DialogContentText>
        </CustomizedTitle>
        <CustomisedDialogContent>
         {renderInvoice()}
        </CustomisedDialogContent>
        <Grid container columns={{ xs: 8}}>
        <Grid item xs={4}>
          <AddInvoice variant="outlined" autoFocus onClick={handleClose}>
            Add Invoice
          </AddInvoice>
          </Grid>
          <Grid item xs={4}>
          <SaveButton onClick={handleClose} autoFocus>
            Save
          </SaveButton>
          </Grid>
          </Grid>
          <Box sx={{ width: 170, marginLeft: 2, paddingTop: 4, paddingBottom: 4 }}>
          <InputLabel style={{marginBottom: 4}} id="demo-simple-select-label">Driver</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={'20'}
          label="Driver"
          style={{width: 150, height: 48}}
      //    onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </Box>
      </Dialog>
      
    </div>
  );
}

const CustomizedTitle = styled(DialogTitle)`
  color: blue;
`;

const CustomisedDialogContent = styled(DialogContent)`
border-width: 1px;
borderc-color: red;
border-width-color: blue;
margin: 16px;
`
const NameContainer = styled(DialogContentText)`
font-size: 14px;
padding-top: 12px;
color: blue;
  `
const AddressContainer = styled(DialogContentText)`
font-size: 14px;
`

const AllItemText = styled(DialogContentText)`
font-size: 16px;
margin-top: 12px;
`
const AddInvoice = styled(Button)`
margin-top: 12px;
width: 97%;
color: blue;
border-color: blue;
margin-left: 8px;
`

const SaveButton = styled(Button)`
background-color: blue;
margin-top: 12px;
width: 97%;
color: white;
`



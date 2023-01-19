import { Box, textAlign } from "@mui/system"
import { Divider, Grid, Paper } from '@mui/material';
import InvoiceText from "./InvoiceText";

const Item = () => {
    return(
        <Box>
        <Grid container spacing={2} paddingBottom={2}>
          <Grid item xs={1}>
            <InvoiceText text='Item #' />
          </Grid>
          <Grid item xs={1}>
          <InvoiceText text='Item #' />
          </Grid>
          <Grid item xs={3}>
          <InvoiceText text='Description' />
          </Grid>
          <Grid item xs={2}>
          <InvoiceText text='QTY' />
          </Grid>
          <Grid item xs={2}>
          <InvoiceText text='CODE' />
          </Grid>
          <Grid item xs={3} style={{textAlign: 'end', color: 'blue'}}>
          <InvoiceText text='Remove' isRemove={true} />
          </Grid>
        </Grid>
      </Box>
    )
}

export default Item;
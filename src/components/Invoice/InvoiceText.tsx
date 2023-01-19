import { DialogContentText } from "@mui/material"
import { styled } from "@mui/system"

const InvoiceText = ({text, isRemove}: {text: string, isRemove?: boolean}) => {
    return (
        <AllItemText isRemove={isRemove}>
            {text}
        </AllItemText>
    )
}

export default InvoiceText;

const AllItemText = styled(DialogContentText)`
font-size: 16px;
margin-top: 12px;
color: ${(props: {isRemove?: boolean}) => props.isRemove ? 'blue': 'black'};
`
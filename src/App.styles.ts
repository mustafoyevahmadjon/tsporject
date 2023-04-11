import styled from "styled-components"
import IconButton from '@mui/material/IconButton';

export const Wrapper = styled.div`
    margin: 40px;
  font-family: 'Roboto', sans-serif;
`

export const StyledButton = styled(IconButton)`
    position: absolute;
    z-index: 9999;
    right: 20px;
    top: 20px;
`
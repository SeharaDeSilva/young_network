import { Box, Button, Container, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const DeleteAcc = () => {
    const navigate = useNavigate()
    return (
        <Container maxWidth={'lg'}>
            <Box height="100vh" width="100%" display='flex' justifyContent="center">
                <Box display="flex"
                    flexDirection="column"
                    justifyContent='center'
                    alignItems='center'
                    marginTop="40px"
                    sx={{
                        height: "50%",
                        width: "50%",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                    }}
                >
                    <Typography variant='h5' color={red['600']}>
                        Account Deleted
                    </Typography>
                    <Typography fontSize={'12px'}>
                        Your account has been successfully deleted.
                    </Typography>
                    <Button sx={{ textTransform: 'capitalize', fontSize: "12px" }} onClick={() => navigate('/login')}>
                        Go to Sign-up
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default DeleteAcc
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';


function Logo(){
  const url = "https://z3.ax1x.com/2021/11/23/o9YGwt.png"
  return (
    <img src={url} style={{width: "30" + "%"}}></img>
  )
}

export default function Home() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      
      <Container maxWidth="sm" align="center">
        <Logo />
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          
          Ballot Dapp
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph >
          基于以太坊网络的区块链安全隐私保护投票系统
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph >
          Ethereum-Based Security & Privacy Reserved Ballot App
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="outlined" size="large" href="./ballot">Getting Start</Button>
        </Stack>
      </Container>
    </Box>
  )
}

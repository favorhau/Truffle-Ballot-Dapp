import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import React, { Component } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Chip from '@mui/material/Chip';
import Election from "./contracts/Election.json"
import getWeb3 from "./getWeb3";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

let webget = null;
let allvote = 0;
class MyBotton extends Component{
    constructor(props)
    {
        super(props);
        this.state = { text: "确定",isable : false };
        
    }
    componentDidMount = async ()=>
    {
        
        try {
            // Get network provider and web3 instance.
            
            const web3 = webget;
            
            const accounts = await web3.eth.getAccounts();
            // Use web3 to get the user's accounts.
            // Get the contract instance.
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = Election.networks[networkId];
            const instance = new web3.eth.Contract(
                Election.abi,
                deployedNetwork && deployedNetwork.address,
                );
                // instance.methods.vote(0).send({from: accounts[0]});
                const isvoted = await instance.methods.voters(accounts[0]).call();
                if(isvoted)
                {
                    this.setState({text:"已进行", isable : true});
                }
            }
            catch(error)
            {
                console.error(error);
            }
    }
    handleBtnClick = async () => 
    {   

        try {
        // Get network provider and web3 instance.
        
        const web3 = webget;
        
        const accounts = await web3.eth.getAccounts();
        // Use web3 to get the user's accounts.
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = Election.networks[networkId];
        const instance = new web3.eth.Contract(
            Election.abi,
            deployedNetwork && deployedNetwork.address,
            );
        const send = await instance.methods.vote(allvote).send({from: accounts[0]});
        console.log(send)
            
        }
        catch(error)
        {
            console.error(error);
        }
    };
    
    render(){
        return(
            <Button variant="outlined" size="large" disabled= {this.state.isable} onClick = { this.handleBtnClick }>{ this.state.text }</Button> 
        );
    }
}

function BasicCard() {
    return (
        
      <Card sx={{ minWidth: 400, maxWidth:500 ,border:2, borderColor: "#1a237e"}}>
        <CardContent>
          <Typography variant="h5" color="primary" gutterBottom>
            请选择投票的候选人
          </Typography>
          <Typography variant="h6" component="div">
           Select The Candidate Please
          </Typography>
        </CardContent>
        <CardActions sx={{
            marginTop: 1,
            marginBottom: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Stack direction="row" spacing={2}>
            <BasicSelect />
            <MyBotton />
        </Stack>
        </CardActions>
      </Card>
    );
}
class BasicSelect extends Component{
  
    constructor(props)
    {
        super(props);
        this.state = { value: 0};
    }
    
    handle = () => {
        if(this.state.value == 0)
        {
            this.setState( { value: 1 })
            allvote = 1;
        }
        else
        {
            this.setState( { value: 0 })
            allvote = 0
        }
    }
    render() {
    return(
      <Box sx={{ minWidth: 120, maxWidth:120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Candidate</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="candidate"
            onChange={ this.handle }
            value={ this.state.value }
          >
            <MenuItem value={0}>Alice</MenuItem>
            <MenuItem value={1}>Bob</MenuItem>
          </Select>
        </FormControl>
      </Box>
      )
    };
  }
  
function Grid(props){
    console.log(props)
    let Alice = 0;
    let Bob = 0;
    if (props.data){
        Alice = props.data[0];
        Bob = props.data[1];
    }
    const rows: GridRowsProp = [
        { id: 1, col0:'-', col1: 'Alice', col2: Alice },
        { id: 2, col0:'-', col1: 'Bob', col2:Bob },
        ];
        
        const columns: GridColDef[] = [
        { field: 'col0', headerName: '#', width:300, minWidth:100},
        { field: 'col1', headerName: '候选人', width: 600, minWidth:100},
        { field: 'col2', headerName: '得票数', width: 600, minWidth:100},
    ];
    return (
    <div style={{ height: 250, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
    </div>
    )
    
}
    
class App extends Component {
    state = {web3: null, accounts: null, contract: null , data:null};
  
    componentDidMount = async () => {
      try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();
        webget = web3;
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
  
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = Election.networks[networkId];
        const instance = new web3.eth.Contract(
          Election.abi,
          deployedNetwork && deployedNetwork.address,
        );
  
        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        const AvoteNum = await instance.methods.getVote(0).call()
        const BvoteNum = await instance.methods.getVote(1).call()
        
        this.setState({ web3, accounts, contract: instance, data:[AvoteNum,BvoteNum] });
      } catch (error) {
        // Catch any errors for any of the above operations.
        alert(
          `Failed to load web3, accounts, or contract. Check console for details.`,
        );
        console.error(error);
      }
    };
  
    render() {
      if (!this.state.web3) {
        return <div style={{textAlign: "center"}}>Loading Web3, accounts, and contract...</div>;
      }
      return (
        <div style={{textAlign:"center"}}>
        <Grid data={this.state.data}/>
        <Box sx={{
            marginTop: 2,
            marginBottom: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <BasicCard justify-center/>
        </Box>
        <div><Chip icon={<AccountCircleIcon />} label={this.state.accounts[0]} variant="outlined" /></div>
        <br />
        </div>
        
      );
    }
};
  
export default App;

import React,{useState,useEffect,useRef} from 'react';
import './getAccountDetails.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import configUrl from '../../config/BaseUrl';
import 'bootstrap/dist/css/bootstrap.min.css';


const GetAccountDetails = () => {
        //  const [bankdata, setbankdata] = useState()
        //  const [loading, setLoading] = useState(false);
        //  const [error, setError] = useState();

        const accountnumber=  window.localStorage.getItem('AccountNumber')
        const componentRef =useRef()
        const handlePrint =useReactToPrint({
                content: () => componentRef.current,
            });
                        // useEffect(() => {
                        //         const fetchUser = async () => {
                        //           try {
                        //               const response = await fetch(`${configUrl.ApiUrl}/transaction/?AccountNumber=${accountnumber*1}`, {
                        //                   credentials: 'include'
                        //               });
                        
                        //               const data = await response.json();
                        
                        //               setbankdata(data.doc);
                        //               setLoading(false)
                                
                        //           } catch (error) {
                        //               console.log(error);
                        //               setError(error.message)
                        //               setLoading(false)
                                
                        //           }
                        //       }
                        
                        //       fetchUser()
                                
                        //       },[accountnumber]) 


                        //   if(loading){
                        //         return (
                        //                 <Box sx={{ width: '100%' }}>
                        //                   <LinearProgress />
                        //                 </Box>
                        //         );
                        //   }

                        //   if (error) {
                        //         return <p>There was an error loading your data!</p>;
                        //   }
                        

                        //  const Editdata =(id)=>{
                        //        alert(id)
                        //  }
                        //  const deltedata =(id)=>{
                        //         alert(id)
                        //  }
                
        return (
                <>   

                <Stack direction="row" spacing={2} >
                        <Link to ="/desposit"><Button variant="contained">Deposit amt.</Button></Link> 
                <Link to ="/withdrawal"><Button variant="contained">
                        Withdrawal amt.
                </Button></Link> 
                </Stack>

                <Button variant="contained" color="success" style={{"position":"relative","left":"1250px"}}  onClick={handlePrint}>
                                Print 
                        </Button>
  
    <br/><br/>
        {/* <div ref={componentRef}>*/}
         
     <div class="grid-container" ref={componentRef} style={{"display":"grid","gridTemplateColumns":"auto auto","alignContent":"center","gap":"10px","padding":"10px"}} >
        <div class="left-container"style={{"border":"1px solid black" ,"background-color": "#DEE2E6","text-align": "center", "padding": "20px 0","font-size": "30px","height":"400px"}}>
        <div class="column" style={{"float":"left", "width": "50%","padding": "10px", "height": "300px"}}>
                   <ul style={{"list-style-type":"none","text-align":"left"}}>
                          <pre><li><b>Name: </b></li>
                           <li><b>Address:</b></li>
                        </pre>
                   </ul>
                   </div>
                   <div class="column" style={{"text-align":"left","float": "left","width":"50%","padding":"10px","height":"300px"}}>
                   <ul style={{"list-style-type": "none"}}>
                        <li>**********</li>
                        <li>**********</li>
                      
                       
            </ul>
              
               </div>
        </div>
        <div class="right-container" style={{"background-color": "rgba(255, 255, 255, 0.8)","text-align": "center" ,"padding": "20px 0;"}} >
             
                   <div class="column" style={{"float":"left", "width": "50%","padding": "10px", "height": "300px"}}>
                   <ul style={{"list-style-type":"none","text-align":"left"}}>
                          <pre><li><b>Name: </b></li>
                           <li><b>Address:</b></li>
                        <li><b>Branch of Ownership :</b></li>
                        <li><b>Branch Phone Number:</b></li>
                        <li><b>Email Address:</b></li>
                        <li><b>Branch Id:</b></li>
                        <li><b>Branch Address:</b></li>
                        <li><b>IFSC:</b></li>
                        <li><b>Branch MICR Code:</b></li>
                        <li><b>Branch GSTIN:</b></li>
                        <li><b>Contact Number:</b></li>
                        <li><b>Account Number:</b></li>
                        <li><b>Product Type:</b></li>
                        <li><b>Account Type:</b></li>
                        <li><b>MAB/QAB Requirement:</b></li>
                        <li><b>Nominee Registration :</b></li>
                        </pre>
                   </ul>
                   </div>
                   <div class="column" style={{"text-align":"left","float": "left","width":"50%","padding":"10px","height":"300px"}}>
                   <ul style={{"list-style-type": "none"}}>
                        <li>**********</li>
                        <li>**********</li>
                        <li>**********</li>
                        <li>**********</li>
                        <li>**********</li>
                        <li>**********</li>
                        <li>**********</li>
                        <li>**********</li>
                        <li>**********</li>
                        <li>**********</li>
                        <li>**********</li>
                        <li>**********</li>
                        <li>**********</li>
                        <li>**********</li>
                        <li>**********</li>
                        <li>**********</li>
                       
            </ul>
              
               </div>
        </div>
        
     </div>
     <div class="row" style={{"text-align":"center"}}>
        Statement of Account
        </div>

                </>
        );
};



export default GetAccountDetails;
import { useContext,useEffect, useState } from "react";
import { Context } from "./main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import WhoIAm from "./Pages/WhoIAm";
import Collection from "./Pages/Collection";
import Cart from './Pages/Cart'
import abi from './contractJson/shoe.json'
import {ethers} from 'ethers';
import { toast } from "react-toastify";
import MyTransaction from "./Pages/MyTransaction";
import axios from "axios";

function App() {
  const { isUserAuthenticated, setIsUserAuthenticated, setUser } =
    useContext(Context);
    const [state,setState] = useState({
      provider:null,
      signer:null,
      contract:null
    })

    const[account,setAccount] = useState("Not Connected");
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/user/getUserProfile",
          {
            withCredentials: true,
          }
        );

        setIsUserAuthenticated(true);
        setUser(data.user);
      } catch (error) {
        setIsUserAuthenticated(false);
        setUser({});
      }
    };
    fetchUsers();
  }, [isUserAuthenticated]);

  useEffect(()=>{
    const template = async()=>{
      const contractAddress = "";
      const contractABI = abi.abi;

      try{
        const{ethereum} = window;

      const account = await ethereum.request({
        method:"eth_requestAccounts"
      })

      window.ethereum.on("accountsChanged",()=>{
        window.location.reload();
      })

      setAccount(account);

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      )
      setState({provider,signer,contract})
      }
      catch(error){
        toast.error(error);
      }
    }
    template()
  },[])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/who" element={<WhoIAm />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/:id" element={<Cart />} state={state} />
        <Route path="/myTransaction" element={<MyTransaction />} state={state} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

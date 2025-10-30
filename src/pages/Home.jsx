import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClinicOwner } from "../redux/actions/clinicActions";
import Hero from "../components/HeroSection/Hero";
import OurSevices from "../components/ourServices/OurSevices";
import ClinicOwnerInfo from "../components/clinicOwnerInfo/ClinicOwnerInfo";

const Home = () => {
  const dispatch = useDispatch();
  const { clinicInfo } = useSelector((state) => state.clinicReducer);
  const {isAuth}= useSelector((state)=>state.authReducer)
  useEffect(() => {
    dispatch(getClinicOwner());
  }, [dispatch]);

  const { clinicOwner } = useSelector((state) => state.clinicReducer);

  console.log(clinicOwner);
  return (
    <div>
      <Hero clinicInfo={clinicInfo} clinicOwner={clinicOwner} isAuth={isAuth}/>    
      <OurSevices/>
      <ClinicOwnerInfo/>
    </div>
  );
};

export default Home;

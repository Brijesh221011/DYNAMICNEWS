import ButtonNavBar from '@/components/shared/ButtonNavBar';
 import DashboardComments from '@/components/shared/DashboardComments';
import DashboardPosts from '@/components/shared/DashboardPosts';
import DashboardProfile from '@/components/shared/DashboardProfile';
import DashboardSidebar from '@/components/shared/DashboardSidebar'
import DashboardUsers from '@/components/shared/DashboardUsers';
import MainDashboard from '@/components/shared/MainDashboard';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'



export default function Dashboard() {
  const location=useLocation();
  const [tab,setTab]=useState("");

  useEffect(()=>{
    const urlParams=new URLSearchParams(location.search);
    const tabFromUrl=urlParams.get("tab");
    // console.log(tabFromUrl);

    if(tabFromUrl){
      setTab(tabFromUrl);
    }
  },[location.search])
  return (
    <div className='min-h-screen flex flex-col md:flex-row w-full'>
      {/* Sidebar */}
      <div className="hidden md:block">
        <DashboardSidebar/>
      </div>
         
         <ButtonNavBar/>

      {/* profile */}
      <div className="w-full">
        {tab==="profile" && <DashboardProfile/>}

        {/* news article */}
        {tab==="posts" && <DashboardPosts/>}

        {/* users */}
        {tab==="users" && <DashboardUsers/>}

        {/* comments */}
        {tab==="comments" && <DashboardComments/>}

         {/* Dashboard main component */}
         {tab==="dashboard" && <MainDashboard/>}

      </div>
    </div>
  )
}

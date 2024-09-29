"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';


function page() {
const route=useRouter();
   const backgroundStyle={
    backgroundImage: 'url("https://img.freepik.com/free-vector/circles-background-dark-tones_60389-166.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1727308800&semt=ais_hybrid")',
    backgroundSize:"cover",
    // height:"100vh",
   color:"white"

 };
 return(
 <>
 <div style={backgroundStyle}>
   
    <div style={{display:"flex",justifyContent:"center",gap:"30px",backgroundColor:"black", color:"white",lineHeight:"35px"}}>
    <Link href="/Home">Home </Link><br />
    <Link href="/about">About</Link><br/>
    <Link href="/Contact">Contact</Link><br/>
</div>
    <div style={{textAlign:"center"}}>
    <h2>welcome to My  Website</h2>
    <div style={{display:"flex",flexDirection:"column",position:"fixed",top:"55px",transform:"translatey(-50%)",right:"10px",gap:"6px",marginTop:"5%"}}>
    <button onClick={()=>route.push("/Home")}>Home</button>
    <button onClick={()=>route.push('/about')}>About</button>
    <button onClick={()=>route.push('/Contact')}>Contact</button>
    </div>
    </div>
    <h4>Until We become a Programmer keep Learning keep Coding!!!!!! </h4> 
    {/* </div> */}
 <div style={{textAlign:"center",marginTop:"28%",width:"100%", backgroundColor:"black",color:"white",lineHeight:"25px",marginBottom:"50px"}}>
    <Link href="/Footer" ><button>Click Here</button></Link>    </div>
    
</div>
    </>
    
  )
}

export default page
























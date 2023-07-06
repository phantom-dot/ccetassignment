
import NavBar from "../components/Navbar/nav"
import Footer from "../components/footer/footer"
import React, { useEffect, useState } from "react";
import "./books.css"





function Book(props) {
    

    const { img, title, alt, link } = props;

    return <div className="book-item">
        
        <a href={link} title={title}>


            <img src={img} width="160"
                alt={alt} className="book-cover" />

        </a>
        <a className="book-title" href={link}>
            {title}
        </a>
    </div>
}



function Dashboard(props)  {

    const [user, setUser] = useState([]);
    

   

    const fetchData = async () => {
        const response = await fetch("https://jnana-backend.onrender.com/api/books?populate=*")
        const data = await response.json()
        setUser(data.data)

        console.log(Array.isArray(data.data)) ; 
        // console.log(data) ; 
        
     
        
    }
    
    
    useEffect(() => { 
        fetchData();
    }, []);
    
        




    
    
    return (
        <>
            <NavBar />

            <div className="container">

                <div className="row" id="content" tabIndex="-1">
                    <div className="library">
                        <h1>Library  </h1>
                
                    </div>


                    {user.map((item)=>{
                        
                     return  <Book img={item.attributes.Img.data.attributes.url}
                        title={item.attributes.Subject} alt={item.attributes.Img.data.attributes.alternativeText}
                        link={item.attributes.Link} key={item.id} />
                     

                    })} 


                    {/* <Book img="https://th.bing.com/th/id/OIP.M7KKYDGqTkdrGxx7GczFGQHaJx?pid=ImgDet&rs=1"
                        title="Computer Networks" alt="Computer Networks"
                        link="https://drive.google.com/file/d/1nj7wYdRg38IyJdpr2VY3MHiBDLQrjsN-/view?usp=sharing" />

                    <Book img="https://th.bing.com/th/id/R.c92bbfefd9e343b27e6829a6ecd6e897?rik=u4pkT5z4IvGhYQ&riu=http%3a%2f%2fholub.com%2fwp%2fwp-content%2fuploads%2f2017%2f03%2fcompiler.design.in_.c.jpg&ehk=mQSPXS7JvukemB7SUE2zag54MJVBBYEp%2b%2bukCT9oJOs%3d&risl=&pid=ImgRaw&r=0"
                        title="Compiler Design in C" alt="Compiler Design in C"
                        link="https://drive.google.com/file/d/105BiGrHO7h4FSLuLRhDAIAFvf0I82Nlz/view?usp=sharing" />


                    <Book img="https://th.bing.com/th/id/OIP.Wc2S-UzxImOK2wqBmplldQHaLO?pid=ImgDet&rs=1"
                        title="Compilers" alt="Compilers"
                        link="https://drive.google.com/file/d/169X_G2M2YPhna-HBcq6zNkE6oX23wsK9/view?usp=sharing" />


                    <Book img="https://th.bing.com/th/id/R.5e68150586eb982d1d5ed8501e010a04?rik=He%2bsj1ERNuUcCA&riu=http%3a%2f%2fimages.awesomebooks.com%2fimages%2fbooks%2flarge%2f97801%2f9780123814791.jpg%3fihtml%3dABLIST20200917&ehk=yzNTJRPd6vLN41FIurXbIq0IKs1V4uamWhUNpwZ8juc%3d&risl=&pid=ImgRaw&r=0"
                        title="Data-Mining" alt="Data-Mining"
                        link="https://drive.google.com/file/d/1gdWnrvC_dcuxMbgso-1mPBRV23U0gJyZ/view?usp=sharing" />


                    <Book img="https://th.bing.com/th/id/OIP.mC02CsUM8Q6eYNe1sgrZ6AHaKL?pid=ImgDet&rs=1"
                        title="Dunham's Data Mining" alt="Dunham's Data Mining"
                        link="https://drive.google.com/file/d/12Gq9TMAUZvaiIXVlB811r0-A9BgxMUIN/view?usp=sharing" />



                    <Book img="https://th.bing.com/th/id/OIP.vS1duLMd1IGsXaZNkiQEjQHaJw?pid=ImgDet&rs=1"
                        title="Linear Algebra" alt="Linear Algebra"
                        link="https://drive.google.com/file/d/1WYuU_l_z_TP_i-LC-3XDY01CvobiC833/view?usp=sharing" />

                    <Book img="https://th.bing.com/th/id/R.c62fc1bf798cbac3cfd61a6579a88323?rik=YhXCFgqCiLrBfQ&riu=http%3a%2f%2fecx.images-amazon.com%2fimages%2fI%2f41Mf6xABXtL._SY344_BO1%2c204%2c203%2c200_.jpg&ehk=hoSM8hwmj%2bjNiLRCWsdwinPvZWigHwDcZOPOJC6Bn%2fI%3d&risl=&pid=ImgRaw&r=0"
                        title="Introduction to Linear Algebra" alt="Intro to Linear Algebra"
                        link="https://drive.google.com/file/d/1sat90DT79VzcKEYKaFXCmg0F4gWqz_YB/view?usp=sharing" />


                    <Book img="https://covers.openlibrary.org/b/id/8078383-L.jpg"
                        title="Simulation Modeling and Analysis" alt="Modeling and Simulation"
                        link="https://drive.google.com/file/d/1lj0bXalAiTgmfB6k08ABgSim-vGfkgkL/view?usp=sharing" />

                    <hr />

                    <Book img="https://th.bing.com/th/id/OIP.zT4LZ5TpYWnyHj325m4VygAAAA?pid=ImgDet&rs=1"
                        title="Fundamentals of Data Structures" alt="Data Structures"
                        link="https://drive.google.com/file/d/1yJBvvPUzWFJIb3AFh_e5nAXB3KfiGDQY/view?usp=sharing" />

                    <Book img="https://covers.openlibrary.org/b/id/8078383-L.jpg"
                        title="Art-of-Computer-Programming" alt="Art of Computer Programming"
                        link="https://drive.google.com/file/d/1lj0bXalAiTgmfB6k08ABgSim-vGfkgkL/view?usp=sharing" />

                    <Book img="https://covers.openlibrary.org/b/id/8078383-L.jpg"
                        title="Simulation Modeling and Analysis" alt="Modeling and Simulation"
                        link="https://drive.google.com/file/d/1lj0bXalAiTgmfB6k08ABgSim-vGfkgkL/view?usp=sharing" />


                    <Book img="https://covers.openlibrary.org/b/id/8078383-L.jpg"
                        title="Simulation Modeling and Analysis" alt="Modeling and Simulation"
                        link="https://drive.google.com/file/d/1lj0bXalAiTgmfB6k08ABgSim-vGfkgkL/view?usp=sharing" /> */}

                   
                </div>



            </div>

            <Footer />
        </>
    )

                    }
    
    





    

          


export default Dashboard;

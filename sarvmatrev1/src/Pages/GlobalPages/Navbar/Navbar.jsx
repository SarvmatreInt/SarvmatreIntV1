import "./Navbar.css";
import { Link } from 'react-router-dom';
import Logo from "./Image/Asset 1.png"


export const Navbar = () =>{
      
var  openNav = ()=>{
    var lastScrollTop = 0;
    var  navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function(){
        var scrollTop = window.pageYOffset || document.createElement.scrollTop;
    if(scrollTop > lastScrollTop){
        navbar.style.top="80px";
    }else{
        navbar.style.top="0";  
    }lastScrollTop=scrollTop    
})
}

return(
        <>
    <nav className="navbar navbar-expand-sm navbar-light" onScroll={openNav}>
        <div className="container" data-aos="fade-down">
            <Link className="navbar-brand" to="/"> <img src={Logo} alt="" /></Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collape navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto ">
                    <li className="nav-item">
                        <Link to="/" className="nav-link"><span data-hover="Home" className="">Home</span></Link>
                    </li><li className="nav-item">
                        <Link to="../../AboutMe/AboutMe" className="nav-link"><span data-hover="About">About</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/project" className="nav-link"><span data-hover="Projects">Projects</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resume" className="nav-link"><span data-hover="Resume">Resume</span></Link>
                    </li>

                </ul>

                <ul className="navbar-nav ml-lg-5">
                      <Link to="/contact" className="nav-link"><span data-hover="Contact">Contact</span></Link>
                </ul>
            </div>
        </div>
    </nav>
    
        </>
        
    )

}

export default Navbar

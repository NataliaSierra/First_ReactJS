import './Header.css';
import imgLogo from '../../../../../Images/img1.png';

export const Header=()=> {
    return (
    <div className="header">
        <img className="logo" src={imgLogo} alt="LogoSierra" />            <div className="navigate">
            <a className='#'>Home</a>
            <a className='#'>Products</a>
            <a className='#'>About</a>
            <a className='#'>Contact</a> 
        </div>
    </div>
    )
}

  
  
  
import Recat from "react"
import './Signup.css'

function Signup(){
    return(
        <div class='main_div'>
        <p id='header'>I make this beautifull Signup Page
        SignUp for free</p>
        <div id='inner_div'>
        <div id='Signuplogo'>
        <h1 style={{display:'flex',justifyContent:'center',color:'White'}}>Signup</h1>
        </div>
        <form class='form'>
            <div>
        
            <input type="text" name="name" placeholder="Enter Name"  maxLength={12}/>
            </div>
            <div>
            
            <input type="email" name="email" placeholder="Enter Email"  maxLength={12}/>
            </div>
            <div>
            
            <input type="number" name="password" placeholder="Enter Password"  maxLength={8}/>
            </div>
            <div>
            
            <input type="number" name="password" placeholder="Confirm Password"  maxLength={8}/>
            </div>
            <div>
            <button id='Signup' style={{color:'white'}}>Signup</button>
            <p>Do you have an account?<button id='login'>login</button></p>
            </div>
            <div class="social-media-buttons">
  <a href="#" class="facebook"></a>
  <a href="#" class="twitter"></a>
  <a href="#" class="instagram"></a>
</div>
        </form>
        </div>
        </div>
    );
}

export default Signup;
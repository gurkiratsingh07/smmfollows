import { Form } from "react-router-dom";
import Media from "../components/media/media";
export default function NewOrder() {
    return(
        < Form method="post">
        <div id="smmfollows__welcome_heading">
            <h1>Welcome Ro SmmFollows!</h1>
            <div className="smmfollows__account_properties">
                <p><a href="#home">Account Status</a></p>
                <p><a href="#wgpt3">Account Points</a></p>
                <p><a href="#possibility">Account Spending</a></p>
                <p><a href="#features">Account Balance</a></p>
            </div>
            <Media/>
            <div className="smmfollows_options">
               <div className="smmfollows_options_neworder">
                    <div className="neworder_first_option">
                        <label>category </label>
                        <br></br>
                        <input name="myInput" defaultValue="Youtube Views [ Guaranteed ] AFTER THE UPDATE" />
                    </div>
                    <div className="neworder_second_option">
                        <label>service </label>
                        <br></br>
                        <input name="myInput" defaultValue="best service will be provided" />
                    </div>
                    <div className="neworder_third_option">
                        <label>link</label>
                        <br></br>
                        <input name="myInput" defaultValue="" />                        
                    </div>
                    <div className="neworder_fourth_option">
                        <label>quantity</label>
                        <br></br>
                        <input name="myInput" defaultValue="" />
                    </div>
                    <div className="neworder_charge_option">
                        <label>charge </label>
                        <br></br>
                        <input name="myInput" defaultValue="" />
                    </div>
                    <br></br>

            <button type="submit">Submit form</button>
                    
               </div> 
               <div className="smmfollows_options_massorder">


               </div>

            </div>

        </div>

      </Form>
    )

  
}

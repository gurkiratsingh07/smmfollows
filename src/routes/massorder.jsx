import { Form } from "react-router-dom";
export default function MassOrder() {
    return(
        < Form method="post">
        <div className="mass_order_box">
           <label>
            one order per line in format
            <br></br>
            <textarea name="postContent" rows={4} cols={ 40 }/>
           </label>
           <br></br>
           <button type="submit">Submit form</button>
        </div>
           
        </Form>
    )

  
}

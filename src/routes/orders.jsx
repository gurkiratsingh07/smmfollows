export default function Orders() {
   return(
    <div id="orders_container">
    <div className="searchbar">
    <form>
    <label for="search"></label>
    <input type="text" value="search"></input>
    <button>Search</button>
    </form>
    </div>
    <div className="request">
    <p><a href="#All">All</a></p>
        <p><a href="#Pending">Pending</a></p>
        <p><a href="#In progress">In progress</a></p>
        <p><a href="#Completed">Completed</a></p>
        <p><a href="#Partial">Partial</a></p>
        <p><a href="#Processing">Processing</a></p>
        <p><a href="#Canceled">Canceled</a></p>
    </div>
    <br></br>
    <div className="product_info">
    <p><a href="#ID">ID</a></p>
        <p><a href="#Date">Date</a></p>
        <p><a href="#Link"> Link</a></p>
        <p><a href="#Charge">Charge</a></p>
        <p><a href="#StartCount">start Count</a></p>
        <p><a href="#Quantity">Quantity</a></p>
        <p><a href="Service">Service</a></p>
        <p><a href="Remains">Remains</a></p>
        <p><a href="status">Status</a></p>

    </div>
 
        
    </div>
   )
}

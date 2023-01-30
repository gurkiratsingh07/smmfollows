import Media from "../components/media/media";

export default function Services(){
return(
  
   <div id="container">
       <Media/>
      <div className="search_bar">
      <label>
      <input placeholder="Search"/>
              <button name="button" >Search</button>
              <select name="category">Filter by category
              <option value="all">All</option>
              <option value="youtube views">youtube views</option>
              <option value="New SmmFollows Promo">New SmmFollows Promo</option>
              <option value="New Added Services">New Added Services</option>
              <option value="Facebook Spain services">Facebook Spain Services</option>
              <option value="Facebook Sweden Services">Facebook Sweden Services</option>
              <option value="TikTok Followers">TikTok Followers-targeted</option>
              <option value="TikTok Likes">Targeted</option>
              <option value="Kwai Services">Kwai Services</option>
              <option value="Reddit Services">Reddit Services</option>
              <option value="Kwai Comments">Kwai Comments - Arab</option>
              <option value="Google Maps Reviews">ARAB</option>
              <option value="orange">Orange</option>
              </select>

      </label>

        
      </div> 
      
   </div> 
   
)
    

}
import "./postcard.css";

function Postcard(){
    
    return(
        <div className="card post-card">
            <h5>Ramesh</h5>
            <div className="card-image">
                <img src="https://images.unsplash.com/photo-1518567730414-d34329607948?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                />
            </div>
            <div className="card-content">
               <i className="material-icons" style={{color:"red"}}>favorite</i>
               <h6>title</h6>
               <p>this is amazing post..</p>
               <input type="text" placeholder="add a comment"/>
            </div>
        </div>
    )
}


export default Postcard;
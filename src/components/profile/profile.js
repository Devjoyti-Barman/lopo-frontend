import "./profile.css";

function Profile(){

    return(

       <div>
            <div className="profile-container">
                <div className="profile-left-content">
                    <img  
                       className="profile-img"
                       src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                    />
                </div>
                <div className="profile-right-content">
                   <h4>Ramesh</h4>
                   <div className="follow-container">
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>
                   </div>
                </div>
            </div>
 
       </div>

    )
}
export default Profile;
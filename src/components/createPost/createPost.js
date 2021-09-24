import "./createPost.css"

function CreatePost(){

    return (
        <div className = "card input-field post-card-container">
            <input type="text" placeholder="title"/>
            <input type="text" placeholder="body"/>
            <div className="file-field input-field">
                <div className="btn">
                  <span>Upload Image</span>
                  <input type="file"/>
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text"/>

            </div>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-2">
                    Submit post
            </button>
        </div>
    )
}

export default CreatePost;
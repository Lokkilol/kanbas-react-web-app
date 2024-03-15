function Status() {
    return(
        <div>
            <button className="status-buttons">
                Unpublish
            </button>
            <button className="status-buttons">
                Published
            </button>
            
            <div className="status-list">

                <button> Import Existing Comments </button> <br />
                <button> Import From Commons </button> <br />
                <button> Choose Home Page </button> <br />
                <button>  View Course Stream </button> <br />
                <button> New Announcement </button> <br />
                <button>  New Analytics </button> <br />
                <button>  View Course Notifications </button>

            </div>

            <h2> Coming Up </h2>

            <div className="status-list">
                <ul>
                    <li> Lecture at 11:45am </li>
                    <li> Exam 2/29/2024 </li>
                    <li> Project 4 Due 3/1/2024</li>

                </ul>
            </div>


        </div>
    )
}

export default Status
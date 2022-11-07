<div className="page-container">
        <div className="link-wrapper">
          <Link className="link" to="createcard">
            Talk about your experience
          </Link>
        </div>
        <div className="card-group">
        {profile.map(({_id,bio,user,city})=>(
                          <Card key="s"  className="s" user={user} _id={_id} bio={bio} city={city}/>))}      
                          
        </div>
      </div>
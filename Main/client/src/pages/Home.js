import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache"
  });

  const matchupList = data?.matchups || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to MiDogApp</h1>
      </div>
      <div className="card-body m-5">
        <h2>Select a City Near You to Find Dog-Friendly Activities</h2> 
    
    //this section needs to be properly coded
    
    
    
      </div>
      <div className="card-footer text-center m-3">
        <h2>Want to add a dog-friendly place or activity to our database?</h2>
        <Link to="/matchup">
          <button className="btn btn-lg btn-danger">Add to our database!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

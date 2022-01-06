import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_PLACES } from '../utils/queries';
import { CREATE_MATCHUP } from '../utils/mutations';

const Matchup = () => {
  const { loading, data } = useQuery(QUERY_PLACES);

  const placesList = data?.places || [];

  const [formData, setFormData] = useState({
    places1: 'JavaScript',
    places2: 'JavaScript',
  });
  let history = useHistory();

  const [createMatchup, { error }] = useMutation(CREATE_MATCHUP);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createMatchup({
        variables: { ...formData },
      });

      history.push(`/matchup/${data.createMatchup._id}`);
    } catch (err) {
      console.error(err);
    }

    setFormData({
      tech1: 'JavaScript',
      tech2: 'JavaScript',
    });
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Dog-Friendly Places Near You</h1>
      </div>
      <div className="card-body m-5">

    
    //this section needs to be properly coded
    
    
      </div>
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default Matchup;

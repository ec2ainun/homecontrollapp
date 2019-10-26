import React, { useState } from 'react';

const MyProfile = () => {
  const [ name, setLName ] = useState("Moch. ainun najib");
  const [ facebook, setFB ] = useState("https://www.facebook.com/ec2ainun");
  const [ github, setGithub ] = useState("https://github.com/ec2ainun");
    return (
        <div>
          <h2>{name}</h2>
          <h2>{facebook}</h2>
          <h2>{github}</h2>
        </div>
      );
}

export default MyProfile;
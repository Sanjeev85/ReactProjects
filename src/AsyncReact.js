import React, { useEffect, useState } from "react";

const query = `
query {
  allLifts {
    name
    elevationGain
    status
  }
}
`;

const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query }),
};

// !!GraphQl Api
function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {elevationGain} {status}
      </p>
    </div>
  );
}

function GithubUser({ name, location, avatar_url }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img
        src={avatar_url}
        height={150}
        width={150}
        alt={name}
      />
    </div>
  );
}

function AsyncReact() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://snowtooth.moonhighway.com/`, opts)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;
  console.log(data, "HERE!!");
  return (
    <div>
      {data.data.allLifts.map((lift) => (
        <Lift
          name={lift.name}
          elevationGain={lift.elevationGain}
          status={lift.status}
        />
      ))}
    </div>
  );
}

export default AsyncReact;

/*useEffect(() => {
    setloading(true);

    fetch(`https://api.github.com/users/moonhighway`)
      .then((res) => res.json())
      .then(setdata)
      .then(() => setloading(false))
      .catch(seterror);
  }, []);
  */

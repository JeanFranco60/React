import React from "react";

const LooneyCard = ({ looney }) => {
  const { name, race, birthday, photo, friends, enemies } = looney;

  const friendsLimited = friends.slice(0, 4).join(", ");
  const enemiesLimited = enemies.slice(0, 4).join(", ");

  return (
    <div className="bg-white col-3 m-5 rounded-2">
      <div className="m-3 d-fel text-center">
        <h2>{name} </h2>
        <p>({race})</p>
        <p> Birthday: {birthday}</p>
        <img src={photo} alt={name} className="img-fluid" />
        <p>
          <strong>Friends:</strong> {friendsLimited}
        </p>
        <p>
          <strong>Enemies:</strong>
          {enemiesLimited}
        </p>
      </div>
    </div>
  );
};

export default LooneyCard;

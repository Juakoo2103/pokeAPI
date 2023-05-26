const typeToEmoji = {
  grass: "🌿",
  fire: "🔥",
  water: "💧",
  electric: "⚡️",
  poison: "☠️",
  bug:"🪲",
  flying:"🍃",
  normal:"💿",
  ground:"🌎",
  fairy:"🧚🏻‍♂️",
  psychic:"🔮",
  rock:"🪨",
  fighting:"🥋",
  steel:"🥄",
  ghost:"👻",
  ice:"❄️",
};

function PokeCard({ name, image, types }) {
  return (
    <div className="grid place-content-center bg-slate-500 p-2 font-bold  rounded-lg hover:bg-slate-700 hover:text-white hover:">
      <h1 className="capitalize font-bold text-2xl">{name}</h1>
      <img src={image} alt={name} />
      <h3>
        Types:{" "}
        {types.map((type) => (
          <span key={type} className="type-emoji">
            {typeToEmoji[type]}
          </span>
        ))}
      </h3>
    </div>
  );
}

export default PokeCard;

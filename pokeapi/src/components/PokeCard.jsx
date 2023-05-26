function PokeCard({pokemon}) {
    console.log(pokemon)
  return (
    <div className="bg-slate-500 p-4 font-bold rounded-lg hover:bg-slate-700">
        <h1>{pokemon}</h1>
        <h3>{}</h3>
    </div>
  );
}

export default PokeCard;

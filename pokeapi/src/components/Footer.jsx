function Footer() {
  return (
    <div className="grid grid-cols-3 gap-1 p-3 mt-4 ">
      <h1 className="align-middle bg-slate-700 rounded-sm p-4 text-white uppercase italic text-2xl">
        Web diseñada por Joaquin Gonzalez
      </h1>

      <div className="bg-slate-700 rounded-sm p-4 text-white">
        <h1 className="font-bold text-xl">Redes Sociales</h1>
        <h2>Github</h2>
        <h2>Linkedin</h2>
      </div>
      <div className="grid grid-rows-2 gap-3 bg-slate-700 rounded-sm p-4">
        <h1 className="font-bold text-xl text-center">Contacto</h1>
        <input
          type="email"
          name=""
          id=""
          placeholder="Ingrese Correo"
          className="bg-slate-600 text-white"
        />
        <textarea
          placeholder=" Ingrese asunto"
          className="bg-slate-600 text-white"
        />
        <button type="submit" className="bg-slate-100 hover:bg-slate-400">
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Footer;

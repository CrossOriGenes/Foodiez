function AppLoader() {
  return (
    <div className="app-loader">
      <h1 className="sm:text-5xl text-3xl">Cooking in progress</h1>
      <div id="cooking">
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div id="area" className="sm:right-0 right-18.75">
          <div id="sides">
            <div id="pan" />
            <div id="handle" />
          </div>
          <div id="pancake">
            <div id="pastry" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLoader;

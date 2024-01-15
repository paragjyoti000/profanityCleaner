function Profanities({ heading, profArr }) {
  return (
    <>
      <div className="w-full">
        <section className=" place-items-center p-5 w-full">
          <h1 className="text-lg">{heading}</h1>
          <div className="max-h-xs items-center border-l-8 border-emerald-500 bg-emerald-50 p-4 text-emerald-900 shadow-lg">
            <div className="min-w-0 text-center">
              <ol className="">
                {profArr
                  ? profArr.map((prof) => <li key={prof}>{prof}</li>)
                  : "This text does not contain any profanity"}
              </ol>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Profanities;

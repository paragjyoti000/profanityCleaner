function Paragraph({ heading, textData }) {
  return (
    <>
      <div className="w-full">
        <section className=" place-items-center p-5 w-full">
          <h1 className="text-lg">{heading}</h1>
          <div className=" max-w-xs items-center border-l-8 border-emerald-500 bg-emerald-50 p-4 text-emerald-900 shadow-lg">
            <div className="min-w-0">
              <p className=" text-ellipsis ">{textData}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Paragraph;

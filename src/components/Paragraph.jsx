function Paragraph({ heading, textData }) {
  return (
    <>
      <div className="w-full">
        <section className=" place-items-center p-5 w-full">
          <h1 className="text-lg">{heading}</h1>
          <div className=" items-center bg-emerald-50 p-4 text-emerald-900 shadow-lg">
            <div className="min-w-0">
              <p className="mb-3 text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {textData}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Paragraph;

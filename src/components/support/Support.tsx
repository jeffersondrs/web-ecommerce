import "./support.styles.scss";

export default function Support() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-5">
        <h1 className="text-6xl m-5 p-2">Help center</h1>
        <div className="flex flex-row flex-wrap w-[80%] justify-center ">
          <section className="bg-sky-100 w-96 border border-sky-900 rounded-md section-support">
            <h2 className="text-4xl">Support freedom</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam.Lorem ipsum dolor sit amet consectetur adipis
            </p>
          </section>
          <section className="bg-sky-100 w-96 border border-sky-900 rounded-md section-support">
            <h2 className="text-4xl">FAQ</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </section>
          <section className="bg-sky-100 w-96 border border-sky-900 rounded-md section-support">
            <h2 className="text-4xl">Terms of use</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </section>
          <section className="bg-sky-100 w-96 border border-sky-900 rounded-md section-support">
            <h2 className="text-4xl">Privacy policy</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </section>
        </div>
        <div className="border border-gray-600 p-3 m-2 bg-slate-400 text-white rounded-xl">
          <h2 className="text-4xl">Contact us</h2>
          <ul>
            <li>Phone: 0800 000 000</li>
            <li>
              Email:
              <a href="mailto:jeffersondrs@gmail.com"> Jefferson DRS</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

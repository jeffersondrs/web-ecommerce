import Footer from "../footer/Footer";

export default function About() {
  return (
    <>
      <div className="flex flex-row justify-evenly items-center px-5 flex-wrap py-5">
        <div className="flex flex-col justify-between  items-center my-5 w-96 h-96">
          <h1 className="text-4xl w-full font-semibold mb-5">About Us</h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, nisl eget aliquam tincidunt, nisl nisl aliquet nisl, eget
            aliquam nisl nisl eget nisl. Sed tincidunt, nisl eget aliquam
            tincidunt, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl.
            Sed tincidunt, nisl eget aliquam tincidunt, nisl nisl aliquet nisl,
            eget aliquam nisl nisl eget nisl. Sed tincidunt, nisl eget aliquam
            tincidunt, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl.
            Sed tincidunt, nisl eget aliquam tincidunt, nisl nisl aliquet nisl,
            eget aliquam nisl nisl eget nisl. Sed tincidunt, nisl eget aliquam
            tincidunt, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="background"
        />
      </div>
      <Footer />
    </>
  );
}

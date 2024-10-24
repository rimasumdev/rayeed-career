const Footer = () => {
  return (
    <section className="bg-gray-950 text-gray-400">
      <footer className="container mx-auto footer px-6 py-10 md:p-0 md:py-10 justify-between">
        <nav>
          <h6 className=" text-2xl text-gray-200 font-bold">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className=" text-2xl text-gray-200 font-bold">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className=" text-2xl text-gray-200 font-bold">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className=" text-2xl text-gray-200 font-bold">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="join-item btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </section>
  );
};

export default Footer;

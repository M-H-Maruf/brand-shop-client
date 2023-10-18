

const Register = () => {
    return (
        <form className="flex flex-col gap-8">
              <div className="grid justify-center grid-cols-1 items-center gap-6 my-6">
                <div className="form-control">
                  <label className="input-group">
                    <span className="bg-brand-primary w-44">Image</span>
                    <input
                      type="text"
                      placeholder="Your Image URL"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group">
                    <span className="bg-brand-primary w-44">Name</span>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group">
                    <span className="bg-brand-primary w-44">email</span>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group">
                    <span className="bg-brand-primary w-44">Password</span>
                    <input
                      type="text"
                      placeholder="Your Password"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              <div className="form-control -mt-6">
                <button className="btn glass text-white hover:text-brand-primary">
                  Register
                </button>
              </div>
            </form>
    );
};

export default Register;
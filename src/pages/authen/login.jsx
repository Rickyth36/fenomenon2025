import loginPhoto from "../../assets/login&register/loginRegister.jpg";
import { NavLink } from "react-router-dom";

export default function LogIn() {

    
  // const navigate = useNavigate();
  
  // const handleLogin = () => {
  //   navigate("/"); //navigate after login
  // }

  return (
    <div className="mt-10 flex justify-center w-screen md:mb-[72px] md:mt-32 pt-10 md:pt-1">
      <div className="p-4 flex flex-col md:flex-row  items-center justify-center space-y-0 border md:w-[900px] rounded-xl shadow-lg shadow-gray-400">
        <div>
          <img src={loginPhoto} alt="" className="w-[500px]" />
        </div>
        <div className="w-full md:w-1/2">
          <section className="font-poppins">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
              <div className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 shadow-lg">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <div className="flex flex-col items-center">
                    <h1 className="text-xl flex font-bold md:text-2xl text-gray-900">
                      MTU<div className="text-orangee ml-1 ">KEY</div>
                    </h1>
                    <p className="text-lg font-medium">Log in</p>
                  </div>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                        Your email / login ID
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white border-gray-600 dark:placeholder-gray-400 focus:ring-blue-600"
                        placeholder="Enter your email/login ID"
                        required=""
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  p-2.5 border-gray-600 placeholder-gray-400 dark:focus:ring-blue-600 dark:focus:border-blue-500"
                        required=""
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            required=""
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="remember" className="text-black">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <NavLink to='/forgotPass' href="#" className="text-sm font-medium text-primary-600 hover:underline text-blue-500">
                        Forgot password?
                      </NavLink>
                    </div>
                    <button
                      
                      className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue hover:bg-blue-700 focus:ring-primary-800"
                    >
                      Log in
                    </button>
                    <p className="text-sm font-light text-blue-500">
                      Don’t have an account yet?{' '}
                      <NavLink to="/register" className="font-medium text-blue-500 hover:text-blue-600 hover:underline">
                        Register
                      </NavLink>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

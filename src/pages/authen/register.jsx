import loginPhoto from "../../assets/login&register/loginRegister.jpg";
import { NavLink, useNavigate } from "react-router-dom";

export default function Register() {

    
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate("/"); //navigate after login
  }

  return (
    <div className="mt-10 flex justify-center w-screen md:mb-[72px] md:mt-32 pt-10 md:pt-0">
      <div className="p-4 flex flex-col md:flex-row  items-center justify-center space-y-0 border md:w-[900px] rounded-xl shadow-lg shadow-gray-400">
        <div className="w-1/2">
          <img src={loginPhoto} alt=""  />
        </div>
        <div className="w-full md:w-1/2">
          <section className="font-poppins w-full">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
              <div className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 shadow-lg">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <div className="flex flex-col items-center">
                    <h1 className="text-xl flex font-bold md:text-2xl text-gray-900">
                      MTU<div className="text-orangee ml-1 ">KEY</div>
                    </h1>
                    <p className="text-lg font-medium">Register</p>
                  </div>
                  <form className="space-y-4 md:space-y-4" action="#">
                  <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-3 ">
              <div>
                <label for="name">First name</label>
                <input type="text"
                        name="first_name"
                        id="name"
                        className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 focus:ring-blue-600 placeholder:text-xs"placeholder="Enter your first name"  required="#"/>
              </div>
              <div>
                <label for="email">Last name</label>
                <input type="text"
                        name="last_name"
                        id="email"
                        className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 focus:ring-blue-600 placeholder:text-xs"placeholder="Enter your last name"  required="#"/>
              </div>
            </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                        Your email / login ID
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white border-gray-600 dark:placeholder-gray-400 focus:ring-blue-600 placeholder:text-xs"
                        placeholder="Enter your email/login ID"
                        required=""
                      />
                    </div>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-x-3 ">
              <div>
                <select className='border border-black px-7 rounded-md' name="" id="batch-select">
                                <option value="">Batch</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                </select>
              </div>
              <div>
                <select name="" className='border border-black rounded-md' id="dept-select">
                                <option className="" value="">Department</option>
                                <option value="Computer Science<">Computer Science</option>
                                <option value="Civil">Civil</option>
                                <option value="Electonics & Communication">Electronics & Comm.</option>
                                <option value="Electrical">Electrical</option>
                                <option value="MBA">MBA</option>
                            
                            </select>
            </div>
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
                        className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  p-2.5 border-gray-600 placeholder-gray-400 dark:focus:ring-blue-600 dark:focus:border-blue-500 placeholder:text-xs"
                        required=""
                      />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                        Confirm password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Confirm your password"
                            className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  p-2.5 border-gray-600 placeholder-gray-400 dark:focus:ring-blue-600 dark:focus:border-blue-500 placeholder:text-xs"
                            required=""
                        />
                    </div>
                    <button
                      onClick={handleLogin}
                      className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue hover:bg-blue-700 focus:ring-primary-800"
                    >
                    Register
                    </button>
                    <p className="text-sm font-light text-blue-500">
                      Already have an account ?{' '}
                      <NavLink to="/login" className="font-medium text-blue-500 hover:text-blue-600 hover:underline">
                        Log in
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

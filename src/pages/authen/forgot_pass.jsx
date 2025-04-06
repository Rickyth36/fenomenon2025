import forGotPassFoto from "../../assets/login&register/forgotPassword.jpg";
import { useNavigate } from "react-router-dom";


export default function ForgotPass()
{ 
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login")
  }
    
    return (
   <div className="h-screen pt-10 md:pt-20">   
    <div className="mt-20 flex justify-center p-4 w-screen md:mb-[72px] mb-5">
      <div className="flex flex-col md:flex-row  items-center justify-center space-y-0 border md:p-4 md:w-[900px] rounded-xl shadow-lg shadow-gray-400">
        <div className="w-2/5">
          <img src={forGotPassFoto  } alt="" className="w-full" />
        </div>
        <div className="w-full md:w-1/2 flex-1">
          <section className="font-poppins">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
              <div className="w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <div className="flex flex-col items-center">
                    <h1 className="text-xl flex font-bold md:text-2xl text-gray-900">
                      MTU<div className="text-orangee ml-1 ">KEY</div>
                    </h1>
                    <p className="text-lg font-medium">Forgot Password</p>
                  </div>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                        Enter an email associated with your MTUKey account
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white border-gray-600 dark:placeholder-gray-400 focus:ring-blue-600"
                        placeholder="me@examplemail.com"
                        required=""
                      />
                      <div className="flex flex-col md:flex-row-reverse mt-3 space-y-3 md:space-x-6 md:space-y-0">
                        <button className=" px-3 py-2 border border-Bluee rounded-md bg-Bluee text-white text-sm hover:bg-blue-700 md:mx-4 duration-500">Reset</button>
                        <button onClick={goToLogin} className=" px-3 py-2 border border-black rounded-md bg-black text-white text-sm hover:bg-white md:mx-4 hover:text-black duration-500">Cancel</button>
                      </div>
                    </div>
                    
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>  
  );
}

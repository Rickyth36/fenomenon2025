export default function Header(){
    return(
        <div>
          <div className="bg-Bluee px-44 flex flex-reverse justify-between">
            <div className="flex items-center space-x-4">

            </div>
            <div>
              <button className="px-6 py-1 mx-1 bg-orange-500 text-white font-medium hover:bg-orange-800">Sign Up</button>
              <button className="px-6 py-1 mx-1 bg-green-500 text-white font-medium hover:bg-green-800">Login</button>
            </div>
          </div>
        </div>
    );
}
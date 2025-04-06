import Upsection from "../common/upSection";
import { UpsectionContent } from "../DataJs/upSecData";
import welcomePic from "../assets/aboutUs/welcome.jpg";
import missionPic from "../assets/aboutUs/mission.jpg";
import whoWeAre from "../assets/aboutUs/whoWeAre.jpg"
import whatWeOffer from "../assets/aboutUs/whatWeOffer.jpg"
import howToGetInvolved from "../assets/aboutUs/howToGetInvolved.jpg"
export default function AboutUs() {
    return(
      <div className="mt-[54px]">
        <Upsection title={UpsectionContent[2].title} description={UpsectionContent[2].description} />
        <section className="bg-dark p-7 md:pt-32 md:px-24 flex flex-col space-y-7 lg:space-y-32">
          <div className=" bg-white flex-col rounded-lg p-7 md:p-5 md:py-10 lg:flex-none lg:w-9/12 mx-auto lg:relative">
            <div className="w-5/6 mx-auto lg:w-2/5 lg:-left-24 lg:-top-20 lg:absolute">
              <img src={welcomePic}  alt="welcomingPic" className="shadow-lg shadow-gray-700 w-full rounded-2xl"/>
            </div>
            <div className=" flex flex-col items-center justify-center md:w-1/2 lg:mr-20 lg:max-w-4/5 mx-auto mt-8">
              <h1 className="text-4xl font-bold font-poppins text-center lg:text-left">Welcome to Manipur Technical University</h1>
              <h2 className="text-2xl font-poppins font-semibold text-center lg:text-left mt-6 md:w-full">Alumni Association</h2>
              <p className="mt-1 font-normal text-gray-700 font-poppins text-center lg:text-left">At Manipur Technical University, we believe in the enduring connection that spans beyond graduation. The Alumni Association serves as the bridge between the university and its
                graduates, fostering a lifelong relationship and a sense of pride in being a part of our esteemed community.
              </p>
            </div>
          </div>

          <div className=" bg-white flex-col rounded-lg p-7 md:py-10 lg:flex-none lg:w-9/12 mx-auto lg:relative">
            <div className="w-5/6 mx-auto lg:w-2/5 lg:absolute lg:-right-24 lg:-top-20">
              <img src={missionPic}  alt="welcomingPic" className="shadow-lg shadow-gray-700 w-full rounded-2xl"/>
            </div>
            <div className=" flex flex-col items-center justify-center md:w-1/2 lg:ml-[100px] lg:max-w-[600px] mx-auto mt-8">
              <h1 className="text-4xl font-bold font-poppins text-center lg:text-left">Our Mission</h1>
              <h2 className="text-2xl mt-6  font-poppins font-semibold  text-center lg:text-left md:w-full">Empowering Connections, Inspiring Achievements</h2>
              <p className="mt-1 font-normal text-gray-700 font-poppins text-center lg:text-left">The Manipur Technical University Alumni Association is dedicated to fostering a vibrant and connected community of graduates. We strive to empower
                our alumni through networking opportunities, professional development, and a shared commitment to the values of our alma mater.
              </p>
            </div>
          </div>
          
          <div className=" bg-white flex-col rounded-lg p-7 md:py-10 lg:flex-none lg:w-9/12 mx-auto lg:relative">
            <div className="w-5/6 mx-auto lg:w-2/5 lg:-left-24 lg:top-14 lg:absolute mb-5">
              <img src={whoWeAre}  alt="welcomingPic" className="shadow-lg shadow-gray-700 w-full rounded-2xl"/>
            </div>
            <div className=" flex flex-col items-center justify-center md:w-2/3 lg:w-3/6 lg:mx-96 lg:max-w-5/6 mx-auto ">
              <h1 className="text-4xl font-bold font-poppins text-center">Who we are</h1>
              <h2 className="text-2xl mt-6 font-bold font-poppins text-center w-full lg:text-left">A Legacy of Excellence</h2>
              <p className="mt-1 font-normal text-gray-700 font-poppins text-center lg:text-left">Founded in 2024, the Manipur Technical University Alumni Association has a rich history of supporting and celebrating the achievements of our graduates. Whether you graduated recently or several decades ago, you are an integral part of our legacy.
              </p>
              <h2 className=" mt-5 text-2xl font-bold font-poppins text-center w-full lg:text-left">Global Community, Local Impact</h2>
              <p className="mt-1 font-normal text-gray-700 font-poppins text-center lg:text-left">With alumni spanning the globe, we are proud to be a diverse and inclusive community. Our members make a positive impact in various industries, contributing to the betterment of society on a local and global scale.
              </p>
            </div>
          </div>

          <div className=" bg-white flex-col rounded-lg p-7 md:py-10 lg:flex-none lg:w-9/12 mx-auto lg:relative">
            <div className="w-5/6 mx-auto lg:w-2/5 lg:absolute lg:-right-24 lg:top-36">
              <img src={whatWeOffer}  alt="welcomingPic" className="shadow-lg shadow-gray-700 w-full rounded-2xl"/>
            </div>
            <div className=" flex flex-col items-center justify-center md:w-1/2 lg:ml-[100px] lg:max-w-[600px] mx-auto mt-8">
              <h1 className="text-4xl font-bold font-poppins text-center lg:text-left">What we offer</h1>
              <h2 className="mt-6 text-2xl font-poppins font-bold text-center lg:text-left md:w-full">Networking Opportunities</h2>
              <p className="mt-1 font-normal text-gray-700 font-poppins text-center lg:text-left">Connect with fellow alumni, expand your
                professional network, and discover new opportunities. Our events, both virtual and in-person, provide a platform for meaningful connections that last a lifetime.
              </p>
              <h2 className="mt-8 text-2xl font-poppins font-bold text-center lg:text-left md:w-full">Professional Development</h2>
              <p className="mt-1 font-normal text-gray-700 font-poppins text-center lg:text-left">Stay ahead in your career with access to exclusive workshops, webinars, and resources. Our commitment to lifelong learning ensures that our alumni are equipped to thrive in their professional endeavors.
              </p>
              <h2 className="mt-8 text-2xl font-poppins font-bold text-center lg:text-left md:w-full">Giving Back</h2>
              <p className="mt-1 font-normal text-gray-700 font-poppins text-center lg:text-left">Join us in giving back to the university that shaped our lives. Whether through mentorship programs, scholarships, or volunteer opportunities, there are numerous ways to contribute to the success of future generations.
              </p>
            </div>
          </div>

          <div className=" bg-white flex-col rounded-lg p-7 md:py-10 lg:flex-none lg:w-9/12 mx-auto lg:relative">
            <div className="w-5/6 mx-auto lg:w-2/5 lg:-left-24 lg:-top-20 lg:absolute">
              <img src={howToGetInvolved}  alt="welcomingPic" className="shadow-lg shadow-gray-700 w-full rounded-2xl"/>
            </div>
            <div className=" flex flex-col items-center justify-center md:w-4/5 lg:mr-10 lg:max-w-[600px] mx-auto mt-8">
              <h1 className="text-4xl font-bold font-poppins text-center lg:text-left">How to Get Involved</h1>
              
              <p className="mt-1 font-normal text-gray-700 font-poppins text-center lg:text-left">Ready to reconnect, engage, and contribute? Explore the various ways you can get involved with the Manipur Technical University
                Alumni Association. Attend events, join committees, or become a mentor – your journey with us is just beginning.
              </p>
            </div>
          </div>  
        </section>
      </div>
    )
}
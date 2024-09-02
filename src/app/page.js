import MaxWidthWrapper from "@/components/Reusables/MaxWItdhWrapper";
import Image from "next/image";
import Link from "next/link";
export default function Home() {

  const botInviteLink = 'https://discord.com/oauth2/authorize?client_id=1262069953893236877&permissions=551903685664&integration_type=0&scope=bot '
  const serverInviteLink = 'https://discord.gg/UZ3kMkqfyn'
  return (
    <>
    
    <MaxWidthWrapper >
      <main className="overflow-hidden ">
        
         
            {/* i will add this later  */}
            <Image src='' alt="" /> 
            <div className="md:w-[50%]  md:mt-[30px] ">
              <h2 className="title nerko ml-[25%] md:ml-auto font-bold md:text-4xl  text-xl md:mb-[20px] "><span className="text-red-500">&quot;</span>Nyaa<span className="">!</span> Nyaa!<span className="text-red-500">&quot;</span> </h2> <p className="md:text-3xl text-white  "> Nekochan is a Discord bot where you can collect anime cards and build teams for epic battles! Start collecting today and see if you can assemble the ultimate team!</p>
           </div>
            <div className="">
                <Link href={serverInviteLink} target="_blank" rel="">
                
                  <button className="md:text-3xl font-bold mp-bt text-white md:mt-[35px] mt-5 border-2 md:p-3 px-3 py-1 md:ml-5  ml-[30%]">
                    Join Us
                  </button>
                </Link>
                <span className="md:text-3xl font-bold text-white md:mt-[35px] hidden  md:inline md:ml-2"> On Discord </span>
                <div className="text-xl md:text-3xl mt-4 text-white font-bold">
                  <p className=" md:ml-[15%]  md:inline   flex justify-center">OR </p>
                  <div className="mt-4 md:ml-[3ch] md:block  flex justify-center  md:text-4xl">
                    <span className="mr-3">Invite </span>
                    <Link href={botInviteLink}>
                      <button className="mp-bt md:ml-2 md:p-2 md:text-3xl p-1 py-0   text-[15px] border-2  ">Meow</button>
                    </Link>  
                  </div>
                </div>            
              </div>

            




          
            <div class="card-container md:ml-[300px]   md:bottom-[320px] mt-[-50px] ">
              <div class="card card1">
                {/* <h3 className="text-white ml-2">Some</h3> */}
                <Image src="https://res.cloudinary.com/dcnjpg3bk/image/upload/v1725100606/nekochan%20imgs/web/apucretqfhl3q62w5atr.png"width={320}   height={506}  alt="Image 1" className="responsive-img "  />
              </div>
              <div class="card card2">
              {/* <h3 className="text-white ml-[75px]">Cool</h3> */}
                <Image src="https://res.cloudinary.com/dcnjpg3bk/image/upload/v1725100601/nekochan%20imgs/web/q6gdk0qefbhbtpwiuc6l.png"width={320}  height={506} alt="Image 2"  className="responsive-img " />
              </div>
              <div class="card card3">
              {/* <h3 className="text-white ml-[140px]">Cards</h3> */}
                <Image src="https://res.cloudinary.com/dcnjpg3bk/image/upload/v1725100606/nekochan%20imgs/web/apucretqfhl3q62w5atr.png"width={320}  height={506} alt="Image 3" className="responsive-img " />
                
              </div>
            </div>
      </main>
      
      
    </MaxWidthWrapper>

    </>

  );
}

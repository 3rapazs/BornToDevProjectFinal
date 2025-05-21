"use client";
// import CoursesController from "@/controller/CoursesController";
// import Courses from "@/model/Courses";
import { useState,useEffect } from "react";
// import Cards from "@/components/shared/cards";
import configSystem from "@/config/configSystem";
import Image from 'next/image';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
export default function Ecommerce() {
  // const router = useRouter();
  const [comments,SetComments] = useState<string[]>([]);
  const [comment,SetComment] = useState("")
  // const urlImage: string = "https://cdn.pixabay.com/photo/2016/01/26/17/15/gmail-1162901_1280.png"


  useEffect(() => {
    const listComment : [] = []
    SetComments(listComment);
  }, []);

   function AddComment()
  {
    // alert(comment)
    SetComments(prev => [...prev, comment]);
    SetComment("");
  }
  

  return (
    <>
{/* <div className="flex flex-row">        
  <div className="text-3xl text-white p-3 bg-blue-400 w-15 h-15 rounded-2xl shadow-2xl font-bold">[L]</div>
        <div className="pl-1 pt-3 w-15 h-15 text-3xl font-bold">earnToDev</div></div> */}

        



        <br></br>
    
      <div className="grid gap-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">

      <div className="col-span-2">

      <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
  {/* <img
    className="p-8 rounded-t-lg"
    src={courses.image ? courses.image: null}
    alt={courses.name}
    width={600}
    height={400}
  /> */}
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-5xl mt-5 font-semibold tracking-tight text-gray-900 dark:text-white text-yellow-500">👨🏻‍💻 เรียนรู้ทักษะแห่งอนาคต</h5>
            <h5 className="mt-5 text-3xl dark:text-white">ให้คุณได้กลายเป็นนักพัฒนาเทคโนโลยีรุ่นใหม่ได้แล้ววันนี้ !</h5>
            <p className="mt-5 dark:text-white">
            สร้างสรรค์แอปพลิเคชัน และ ผลงานด้านดิจิทัล ด้วยหลักสูตรที่ลงลึกจัดเต็ม <br></br>
            ทั้งศาสตร์ และ ศิลป์จากผู้มีประสบการณ์เชี่ยวชาญด้านเทคโนโลยีตัวจริง
            </p>
            <br></br>
            <h2 className="font-bold dark:text-white">เลือกเส้นทางการเรียนรู้:</h2>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
            {/* <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div> */}
            {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span> */}
        </div>
        <div className="flex items-center justify-start">
            {/* <span className="text-xl font-bold text-gray-900 dark:text-white"></span> */}

            <div className="flex flex-row flex-wrap gap-2">
            <button className="btn btn-neutral">🌏 Web Dev</button>
            <button className="btn btn-neutral">🚀 Software Dev</button>
            <button className="btn btn-neutral">🎮 Game Dev</button>
            <button className="btn btn-neutral">📱 UX/UI Design</button>
            <button className="btn btn-neutral">📊 Data</button>
            </div>
            
            {/* <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Learn</a> */}
        </div>

<br></br>
<p className="dark:text-white"><i className="fa-brands fa-discord"></i> {configSystem.AppName} Community on Discord มาร่วมพูดคุย สอบถามปัญหา แบ่งปันความรู้
และ เป็นส่วนหนึ่งกับเราได้แล้ววันนี้ฟรี !! คลิกที่นี่</p>
    </div>
</div>
        
      </div>
      <div className="">

      <div className="w-full bg-white rounded-lg border p-2 my-4 mx-6">

<h3 className="font-bold">ความคิดเห็นทั้งหมด ({comments.length})</h3>



    <div className="flex flex-col">

    <div className="w-full px-3 my-2">
        <textarea
            className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            onChange={(e)=> SetComment(e.target.value)}
            value={comment}
            name="body" placeholder='แสดงความคิดเห็น' required></textarea>
    </div>

    <div className="w-full flex justify-end px-3">
        <input type='button' onClick={AddComment} className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500" value='Post Comment'/>
    </div>


               {comments.map((commentLoop) => (
                      <div key={commentLoop}>
                                <div className="border rounded-md p-3 ml-3 my-3">
            <div className="flex gap-3 items-center">
                {/* <img src="https://avatars.githubusercontent.com/u/22263436?v=4"
                    className="object-cover w-8 h-8 rounded-full 
                    border-2 border-emerald-400  shadow-emerald-400
                    "> */}
                <h3 className="font-bold">
                ความคิดเห็น
                </h3>
            </div>
            <p className="text-gray-600 mt-2">
                {commentLoop}
            </p>
        </div>
                      </div>
                    ))}
    </div>


</div>
        
      </div>
      </div>

              <div className="mt-10 text-center dark:text-white">
                <h5 className="text-3xl">
                ส่วนหนึ่งจากองค์กรชั้นนำที่ไว้วางใจพวกเรา
                </h5>
                <h3>
                เราพร้อมให้บริการทั้งบุคคลทั่วไปที่สนใจ และ ลูกค้าในรูปแบบองค์กร<br></br>
                เพื่อจุดประกายทุกไอเดียในการพัฒนาเทคโนโลยี ทั้งด้านการเรียนรู้ และ บริการประชาสัมพันธ์
                </h3>
              </div>

<br></br>
              <div className="grid gap-2 place-items-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                <div>


  <Image
    className="p-4 rounded-t-lg"
    src="/images/cards/card-01.png"
    alt="description"
    width={600}
    height={400}
  />

                 
                </div>
                <div>
                <Image
    className="p-4 rounded-t-lg"
    src="/images/cards/card-01.png"
    alt="description"
    width={600}
    height={400}
  />

                </div>
                <div>
                <Image
    className="p-4 rounded-t-lg"
    src="/images/cards/card-01.png"
    alt="description"
    width={600}
    height={400}
  />

                </div>
                <div>
                <Image
    className="p-4 rounded-t-lg"
    src="/images/cards/card-01.png"
    alt="description"
    width={600}
    height={400}
  />

                </div>
                <div>
                <Image
    className="p-4 rounded-t-lg"
    src="/images/cards/card-01.png"
    alt="description"
    width={600}
    height={400}
  />

                </div>
                <div>
                <Image
    className="p-4 rounded-t-lg"
    src="/images/cards/card-01.png"
    alt="description"
    width={600}
    height={400}
  />

                </div>
                <div>
                <Image
    className="p-4 rounded-t-lg"
    src="/images/cards/card-01.png"
    alt="description"
    width={600}
    height={400}
  />

                </div>
                <div>
                <Image
    className="p-4 rounded-t-lg"
    src="/images/cards/card-01.png"
    alt="description"
    width={600}
    height={400}
  />

                </div>
              </div>

    </>
  );
}

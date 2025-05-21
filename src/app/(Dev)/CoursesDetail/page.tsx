"use client";
import CoursesController from "@/controller/CoursesController";
import Courses from "@/model/Courses";
import { useState,useEffect } from "react";
import { useSearchParams } from 'next/navigation';

export default function Page() {

  const searchParams = useSearchParams();
  const id : string = searchParams.get('id') || "";
  const listSuccessText = localStorage.getItem('MyCoursesSuccess') || '';
  const listSuccess = listSuccessText ? JSON.parse(listSuccessText) : [];
  const [isSuccess,setIsSuccess] = useState(false);


  const coursesController : CoursesController = new   CoursesController();
  const [courses,setCourses] = useState(new Courses);


  useEffect(() => {
     GetData();
  },[]);


  async function GetData() : Promise<void> {
    // alert("ddd")
    const res = await coursesController.GetRecordById(id);
    setCourses(res)

    // const found = listSuccess.find(item => item === "["+id+"]");
    // if (!found) {
    //   listSuccess.push("["+id+"]")
    //   localStorage.setItem('MyCoursesSuccess',JSON.stringify(listSuccess))
    // }
    // //alert(listSuccess.length)
  }

  function CheckIsSuccess()
  {
    setIsSuccess(!isSuccess)
  }

  

  return (
    <>

    {/* <div>[L]</div> */}

    <div className="card card-dash bg-base-100 shadow-2xl p-10">
    <div className="grid gap-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">

      <div>
        <h5 className="text-6xl">{courses.name}</h5>
        
        <div className="pt-5 text-4xl">
        <div className="flex items-center space-x-1 rtl:space-x-reverse ">
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
            </div>
        </div>


<div className="flex flex-row pt-5">
<img className="w-10 h-10 rounded-full" src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="Rounded avatar"></img>

<div className="pl-5 pt-2 text-lg"> Mr. Cat</div>

</div>
       
       <div className="pt-5">

        { isSuccess ?      
        <button className="btn btn-success" onClick={CheckIsSuccess}>
          <i className="fa-solid fa-square-check text-2xl"></i> เรียนแล้ว
        </button>
           :      
        <button className="btn btn-neutral" onClick={CheckIsSuccess}> ยังไม่เรียน</button>}
       </div>


      </div>



      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dIQQBlIyJc4?si=C0ZfIR2j7--lfuoM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

      </div>
    </div>

    <div className="card card-dash bg-base-100 shadow-2xl p-10 mt-10">
          <div className="text-4xl font-bold">เนื้อหา</div>
          <div className="text-2xl pt-5">{courses.description}</div>
          
      </div>
    
    </>
  );
}

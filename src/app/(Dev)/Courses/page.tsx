"use client";
import CoursesController from "@/controller/CoursesController";
import Courses from "@/model/Courses";
import { useState,useEffect } from "react";
import Cards from "@/components/shared/cards";

export default function Page() {
  const coursesController : CoursesController = new   CoursesController();
  // const [entity,setEntity] = useState(new Courses())
  const [entityCollection,setEntityCollection] = useState([new Courses()])
  const [categories,setCategories] = useState<string[]>([]);
  const [categorie,setCategorie] = useState("");

  useEffect(() => {
     GetData();
  },[]);




  async function GetData() : Promise<void> {
    const list = await coursesController.GetListByCategories("All");
    setEntityCollection(list)

    const listCategories = await coursesController.GetListCategories();
    setCategories(listCategories)
    // alert("ttt")
  }

  async function ChangeCategories(categories : string)
  {
    setCategorie(categories)
    const list = await coursesController.GetListByCategories(categories);
    setEntityCollection(list)
  }

  return (
    <>
    
    <div className="font-bold">    Categories: 
    </div>

<div>
    <select  className="select" onChange={e=>ChangeCategories(e.target.value)} value={categorie}>
  {categories.map(categorie => (
    <option key={categorie} value={categorie}>{categorie}</option>
  ))}
</select>
</div>
    {/* <div className="flex gap-2"> */}
    {/* <div className="grid grid-cols-4 gap-2">
 <Cards courses={entity}></Cards>
 <Cards courses={entity}></Cards>
 <Cards courses={entity}></Cards>
 <Cards courses={entity}></Cards>
 <Cards courses={entity}></Cards>
 <Cards courses={entity}></Cards>
</div> */}


    {/* <button onClick={GetData}>GetData</button> */}

    {/* {entity.name} */}
    <br></br>
 {/* {entityCollection[0].name} */}

 <div className="grid gap-2 place-items-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
 {entityCollection.map((entity) => (
        <div key={entity.id}>
          <Cards courses={entity}></Cards>
        </div>
      ))}
</div>

{/* {entityCollection.map((entity) => (
        <div key={entity.id}>
          {entity.id} - {entity.name}- {entity.description}
        </div>
      ))} */}


    </>
  );
}

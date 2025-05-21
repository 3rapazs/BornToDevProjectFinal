import coursesModel from '../model/Courses'
import config from '../config/configSystem'
import axios from "axios";
class CoursesController {

    public async GetList(): Promise<coursesModel[]> {
        let list: coursesModel[] = [];
        const url: string = config.Url + '/courses';
        const res = await axios.get(url)
        list = res.data;
        list = await this.SetIsCoursesSuccess(list);
        return list;
    }

    public async GetListCategories(): Promise<string[]> {
        let list: string[] = [];
        const url: string = config.Url + '/categories';
        const res = await axios.get(url)
        list = res.data;
        list.unshift("All");
        return list;
    }

    public async GetListByCategories(categorie: string): Promise<coursesModel[]> {
        let list: coursesModel[] = [];
        let url: string = "";
        if (categorie === "All") {
            url = config.Url + '/courses';
        }
        else {
            url = config.Url + '/categories/' + categorie + '/courses';
        }
        const res = await axios.get(url)
        list = res.data;
        list = await this.SetIsCoursesSuccess(list);
        return list;
    }

    public async GetRecordById(id: string): Promise<coursesModel> {
        let list: coursesModel = new coursesModel();
        const url: string = config.Url + '/courses/' + id;
        const res = await axios.get(url)
        list = res.data;
        return list;
    }

    private async SetIsCoursesSuccess(list: coursesModel[]): Promise<coursesModel[]> {
        const listSuccessText = localStorage.getItem('MyCoursesSuccess');
        const listSuccess = listSuccessText ? JSON.parse(listSuccessText) : [];
        // for (let i = 0; i < listSuccess.length; i++) {
        //     const id: string = listSuccess[i]
        //     const entity = list.find(item => item.id === id);
        //     if (entity) {
        //         entity.IsCoursesSuccess = true;
        //     }
        // }
        // for (let i = 0; i < list.length; i++) {
        //     const id: string = list[i].id;
        //     const found = listSuccess.find(item => item === id);
        //     if (!found) {
        //         //alert(id)
        //     }
        // }


        console.log(list)
        return list;
    }

}

export default CoursesController
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    CourseInformation : [

    ],
}

const CourseReducer = createSlice({
  name: 'CourseReducer',
  initialState,
  reducers: {

  }
});

export const {} = CourseReducer.actions

export default CourseReducer.reducer

export const getAllCourseApi = () => {
    return async(dispatch, getState) => {
        try {
            const result = await axios ({
                url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP02',
                method: 'GET',
            })
            dispatch({
                type: 'CourseReducer/getAllCourseApi',
                data: result.data.content,
            })
        }catch (err) {
            console.log(err);
        }
    }
}
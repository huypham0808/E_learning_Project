import api from "../../utils/apiUtil";
import * as actionTypes from './constants';
import Swal from "sweetalert2";
//------------------------------
//action get List of Course
export const fetchListCourse = (keyword = "") => {
    return (dispatch) => {
        dispatch(actListCourseRequest());
        const url = keyword
            ? `QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${keyword}&MaNhom=GP09`
            : "QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09";
        api.get(url)
            .then((result) => {
                dispatch(actListCourseSuccess(result.data));
            })
            .catch((err) => {
                dispatch(actListCourseFail(err));
            });
    };
};

const actListCourseRequest = () => ({
    type: actionTypes.COURSE_REQUEST,
});
const actListCourseSuccess = (data) => ({
    type: actionTypes.COURSE_SUCCESS,
    payload: data,
});
const actListCourseFail = (error) => ({
    type: actionTypes.COURSE_FAIL,
    payload: error,
}); 

//action Get Danh Muc Khoa Hoc 
export const fetchCourseCate = () => {
    return (dispatch) => {
        dispatch(actCourseCateRequest());
        api
        .get("QuanLyKhoaHoc/LayDanhMucKhoaHoc")
        .then((result) => {
            dispatch(actCourseCateSuccess(result.data));
        })
        .catch((error) => dispatch(actCourseCateFail(error)));
    }
};

const actCourseCateRequest = () => (
    {
        type: actionTypes.COURSE_CATE_REQUEST, 
    }
);
const actCourseCateSuccess = (data) => (
    {
        type: actionTypes.COURSE_CATE_SUCCESS,
        payload: data,
    }
);
const actCourseCateFail = (error) => (
    {
        type: actionTypes.COURSE_CATE_FAIL,
        payload: error,
    }
);
//action Get Khoa hoc theo danh muc
export const fetchCourseWithCate = (category) => {
    return (dispatch) => {
        dispatch(actCourseWithCateRequest());
        api
        .get(`QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${category}&MaNhom=GP09`)
        .then((result) => {
            dispatch(actCourseWithCateSuccess(result.data));
        })
        .catch((error) => {
            dispatch(actCourseWithCateFail(error));
        })
    }
};
const actCourseWithCateRequest = () => ({
    type: actionTypes.GET_COURSE_WITH_CATEGORY_REQUEST,
});
const actCourseWithCateSuccess = (data) => ({
    type: actionTypes.GET_COURSE_WITH_CATEGORY_SUCCESS,
    payload: data,
});
const actCourseWithCateFail = (error) => ({
    type: actionTypes.GET_COURSE_WITH_CATEGORY_FAIL,
    payload: error,
})
//action Get Chi tiet khoa hoc
export const fetchCourseDetail = (maKhoaHoc) => {
    return (dispatch) => {
        dispatch(actCourseDetailRequest());
        api
        .get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
        .then((result) => {
            dispatch(actCourseDetailSuccess(result.data));
        })
        .catch((error) => {
            dispatch(actCourseDetailFail(error));
        })
    };
};

const actCourseDetailRequest = () => ({
    type: actionTypes.GET_COURSE_DETAIL_REQUEST,
});
const actCourseDetailSuccess = (data) => ({
    type: actionTypes.GET_COURSE_DETAIL_SUCCESS,
    payload: data,
});
const actCourseDetailFail = (error) => ({
    type: actionTypes.GET_COURSE_DETAIL_FAIL,
    payload: error,
});

//action Dang ky (Register)
export const actRegister = (data, navigate) => {
    return (dispatch) => {
        dispatch(actRegisterRequest());

        api
        .post("QuanLyNguoiDung/DangKy",data)
        .then((result)=> {
            dispatch(actRegisterSuccess(result.data));
            Swal.fire({
                icon: "success",
                title:"Đăng ký thành công",
                showConfirmButton: false,
                timer: 1500, 
            }).then(()=>{
                navigate("/user/login", {replace: true});
            });
        })
        .catch((error)=> {
            dispatch(actRegisterFail(error));
            Swal.fire({
                icon: "error",
                title: "Đăng ký không thành công!",
                text: error.response?.data,
                showConfirmButton: false,
                timer:1500,
            });
        });
    };
};
const actRegisterRequest = () => ({
    type: actionTypes.REGISTER_REQUEST,
});
const actRegisterSuccess = (data) => ({
    type: actionTypes.REGISTER_SUCCESS,
    payload: data,
});
const actRegisterFail = (error) => ({
    type: actionTypes.REGISTER_FAIL,
    payload: error,
});
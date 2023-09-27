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
            .post("QuanLyNguoiDung/DangKy", data)
            .then((result) => {
                dispatch(actRegisterSuccess(result.data));
                Swal.fire({
                    icon: "success",
                    title: "Đăng ký thành công",
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    navigate("/user/login", { replace: true });
                });
            })
            .catch((error) => {
                dispatch(actRegisterFail(error));
                Swal.fire({
                    icon: "error",
                    title: "Đăng ký không thành công!",
                    text: error.response?.data,
                    showConfirmButton: false,
                    timer: 1500,
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
//action RegisterCourse
export const registerCourse = (data) => {
    return (dispatch) => {
      dispatch(actRegisterCourseRequest());
  
      api
        .post("QuanLyKhoaHoc/DangKyKhoaHoc", data)
        .then((result) => {
          dispatch(actRegisterCourseSuccess(result.data));
          Swal.fire({
            icon: "success",
            title: "Thành công",
            text: "Đăng ký khóa học thành công",
          });
        })
        .catch((error) => {
          dispatch(actRegisterCourseFail(error));
          Swal.fire({
            icon: "error",
            title: "Thất bại",
            text: error.response?.data,
          });
        });
    };
  };
  
  const actRegisterCourseRequest = () => ({
    type: actionTypes.REGISTER_COURSE_REQUEST,
  });
  
  const actRegisterCourseSuccess = (data) => ({
    type: actionTypes.REGISTER_COURSE_SUCCESS,
    payload: data,
  });
  
  const actRegisterCourseFail = (error) => ({
    type: actionTypes.REGISTER_COURSE_FAIL,
    payload: error,
  });
//action Get User Detail
export const getUserDetail = () => {
    return (dispatch) => {
        dispatch(actGetUserDetailRequest());

        api
            .post("QuanLyNguoiDung/ThongTinTaiKhoan")
            .then((result) => {
                dispatch(actGetUserDetailSuccess(result.data));
            })
            .catch((error) =>
                dispatch(actGetUserDetailFail(error))
            );
    };
};

export const actGetUserDetailRequest = () => ({
    type: actionTypes.GET_USER_DETAIL_REQUEST,
});
export const actGetUserDetailSuccess = (data) => ({
    type: actionTypes.GET_USER_DETAIL_SUCCESS,
    payload: data,
});
export const actGetUserDetailFail = (error) => ({
    type: actionTypes.GET_USER_DETAIL_FAIL,
    payload: error,
});

//action User Login
const TIME_EXPIRE = 60 * 60 * 1000;
export const actLogin = (data, navigate) => {
    return (dispatch) => {
        dispatch(actUserLoginRequest());

        api
            .post("QuanLyNguoiDung/DangNhap", data)
            .then((result) => {
                dispatch(actUserLoginSuccess(result.data));
                localStorage.setItem("user", JSON.stringify(result.data));

                //Tự động đăng xuất
                const TIME = new Date().getTime();
                const EXPIRE = TIME + TIME_EXPIRE;
                localStorage.setItem("EXPIRE", EXPIRE);
                dispatch(actTimeoutLogOut(navigate, TIME_EXPIRE));

                Swal.fire({
                    icon: "success",
                    title: "Đăng nhập thành công",
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => navigate("/", { replace: true }));
            })
            .catch((error) => {
                dispatch(actUserLoginFail(error));
                Swal.fire({
                    icon: "error",
                    title: "Đăng nhập không thành công",
                    text: error.response?.data,
                    showConfirmButton: false,
                    timer: 1500,
                })
            })
    }
};

const actUserLoginRequest = () => ({
    type: actionTypes.USER_LOGIN_REQUEST
});
const actUserLoginSuccess = (data) => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    payload: data,
});
const actUserLoginFail = (error) => ({
    type: actionTypes.USER_LOGIN_FAIL,
    payload: error,
});

const actTimeoutLogOut = (navigate, expire) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(actLogOut(navigate));
        }, expire);
    };
};
export const actLogOut = (navigate) => {
    localStorage.removeItem("user");
    localStorage.removeItem("EXPIRE");
    navigate("/user/login", { replace: true });
    return {
        type: actionTypes.USER_LOGIN_CLEAN,
    };
};
export const actTryLogout = (navigate) => {
    return (dispatch) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) return;
        const EXPIRE = localStorage.getItem("EXPIRE");
        const TIME = new Date().getTime();
        if (TIME > EXPIRE) {
            dispatch(actLogOut(navigate));
            return;
        }
        dispatch(actTimeoutLogOut(navigate, EXPIRE - TIME));
        dispatch(actUserLoginSuccess(user));
    };
};


//action Cancel Course
export const CancelCourse = (data) => {
    return (dispatch) => {
        dispatch(actCancelCourseRequest());

        api
            .post("QuanLyKhoaHoc/HuyGhiDanh", data)
            .then((result) => {
                dispatch(actCancelCourseSuccess(result.data));
                dispatch(getUserDetail());
                Swal.fire("Thành công", "Hủy đăng ký thành công", "success");
            })
            .catch((error) => {
                dispatch(actCancelCourseFail(error));
                Swal.fire("Thất bại", error.response?.data, "error");
            });
    }
};

const actCancelCourseRequest = () => ({
    type: actionTypes.CANCEL_COURSE_REQUEST,
});
const actCancelCourseSuccess = (data) => ({
    type: actionTypes.CANCEL_COURSE_SUCCESS,
    payload: data,
});
const actCancelCourseFail = (error) => ({
    type: actionTypes.CANCEL_COURSE_FAIL,
    payload: error,
});

//action Update User
export const actUpdateUser = (data) => {
    return (dispatch) => {
        dispatch(actUpdateUserRequest());

        api
            .put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", data)
            .then((result) => {
                dispatch(actUpdateUserSuccess(result.data));
                Swal.fire({
                    icon: "success",
                    title: "Thành công",
                    text: "Cập nhật thành công",
                }).then(() => window.location.reload());
            })
            .catch((error) => {
                dispatch(actUpdateUserFail(error));
                Swal.fire({
                    icon: "error",
                    title: error.response?.data,
                    text: "Cập nhật không thành công",
                });
            });
    };
};
const actUpdateUserRequest = () => ({
    type: actionTypes.UPDATE_USER_REQUEST,
});
const actUpdateUserSuccess = (data) => ({
    type: actionTypes.UPDATE_USER_SUCCESS,
    payload: data,
});
const actUpdateUserFail = (error) => ({
    type: actionTypes.UPDATE_USER_FAIL,
    payload: error,
})

//--------------------------------------ADMIN PAGE-----------------------------------
//GET LIST USER
export const getListUsers = (keyword = "") => {
    return (dispatch) => {
        dispatch(getListUsersRequest());

        const url = keyword
            ? `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09&tuKhoa=${keyword}`
            : "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09";

        api
            .get(url)
            .then((result) => {
                dispatch(getListUsersSuccess(result.data));
            })
            .catch((error) => dispatch(getListUsersFail(error)));
    };
};
const getListUsersRequest = () => ({ type: actionTypes.GET_LIST_USER_REQUEST });
const getListUsersSuccess = (data) => ({
    type: actionTypes.GET_LIST_USER_SUCCESS,
    payload: data,
});
const getListUsersFail = (error) => ({
    type: actionTypes.GET_LIST_USER_FAIL,
    payload: error,
});
// ADD USER 
export const addUser = (data) => {
    return (dispatch) => {
        dispatch(addUserRequest());

        api
            .post("QuanLyNguoiDung/ThemNguoiDung", data)
            .then((result) => {
                dispatch(addUserSuccess(result.data));
                Swal.fire({
                    icon: "success",
                    title: "Thành công",
                    text: "Thêm người dùng thành công",
                });
            })
            .catch((error) => {
                dispatch(addUserFail(error));
                Swal.fire({
                    icon: "error",
                    title: "Không thành công",
                    text: error.response?.data,
                });
            });
    };
};
const addUserRequest = () => ({ type: actionTypes.ADD_USER_REQUEST });
const addUserSuccess = (data) => ({
    type: actionTypes.ADD_USER_SUCCESS,
    payload: data,
});
const addUserFail = (error) => ({
    type: actionTypes.ADD_USER_FAIL,
    payload: error,
});
//DELET USER
export const deleteUser = (user) => {
    return (dispatch) => {
        dispatch(deleteUserRequest());

        api
            .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`)
            .then((result) => {
                dispatch(deleteUserSuccess(result.data));
                Swal.fire({
                    icon: "success",
                    title: "Thành công",
                    text: "Xóa người dùng thành công",
                }).then(() => dispatch(getListUsers()));
            })
            .catch((error) => {
                dispatch(deleteUserFail(error));
                Swal.fire({
                    icon: "error",
                    title: "Xoá không thành công",
                    text: error.response?.data,
                });
            });
    };
};
const deleteUserRequest = () => ({ type: actionTypes.DELETE_USER_REQUEST });
const deleteUserSuccess = (data) => ({
    type: actionTypes.DELETE_USER_SUCCESS,
    payload: data,
});
const deleteUserFail = (error) => ({
    type: actionTypes.DELETE_USER_FAIL,
    payload: error,
});

//ADMIN - CRUD COURSE
//ADD COURSE
export const addCourse = (formData) => {
    return (dispatch) => {
        dispatch(addCourseRequest());

        api
            .post("QuanLyKhoaHoc/ThemKhoaHocUploadHinh", formData)
            .then((result) => {
                dispatch(addCourseSuccess(result.data));
                Swal.fire("Thành công", "Thêm khóa học thành công", "success");
            })
            .catch((error) => {
                dispatch(addCourseFail(error));
                Swal.fire("Thất bại", error.response?.data, "error");
            });
    };
};
const addCourseRequest = () => ({ type: actionTypes.ADD_COURSE_REQUEST });
const addCourseSuccess = (data) => ({
    type: actionTypes.ADD_COURSE_SUCCESS,
    payload: data,
});
const addCourseFail = (error) => ({
    type: actionTypes.ADD_COURSE_FAIL,
    payload: error,
});
//DELETE COURSE
export const deleteCourse = (maKhoaHoc) => {
    return (dispatch) => {
        dispatch(deleteCourseRequest());

        api
            .delete(`QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`)
            .then((result) => {
                dispatch(deleteCourseSuccess(result.data));
                Swal.fire("Thành công", "Xóa khóa học thành công", "success").then(() =>
                    dispatch(fetchListCourse()),
                );
            })
            .catch((error) => {
                dispatch(deleteCourseFail(error));
                Swal.fire("Thất bại", error.response?.data, "error");
            });
    };
};
const deleteCourseRequest = () => ({ type: actionTypes.DELETE_COURSE_REQUEST });
const deleteCourseSuccess = (data) => ({
    type: actionTypes.DELETE_COURSE_SUCCESS,
    payload: data,
});
const deleteCourseFail = (error) => ({
    type: actionTypes.DELETE_COURSE_FAIL,
    payload: error,
});
//UPDATE COURSE
export const updateCourse = (formData) => {
    return (dispatch) => {
        dispatch(updateCourseRequest());
        api
            .post("QuanLyKhoaHoc/CapNhatKhoaHocUpload", formData)
            .then((result) => {
                dispatch(updateCourseSuccess(result.data));
                Swal.fire("Thành công", "Cập nhật khóa học thành công", "success");
            })
            .catch((error) => {
                dispatch(updateCourseFail(error));
                Swal.fire("Thất bại", error.response?.data, "error");
            });
    };
};
export const updateCourseNoImage = (values) => {
    return (dispatch) => {
        dispatch(updateCourseRequest());

        api
            .put("QuanLyKhoaHoc/CapNhatKhoaHoc", values)
            .then((result) => {
                dispatch(updateCourseSuccess(result.data));
                Swal.fire("Thành công", "Cập nhật khóa học thành công", "success").then(
                    () => window.location.reload(),
                );
            })
            .catch((error) => {
                dispatch(updateCourseFail(error));
                Swal.fire("Thất bại", error.response?.data, "error");
            });
    };
};
const updateCourseRequest = () => ({ type: actionTypes.UPDATE_COURSE_REQUEST });
const updateCourseSuccess = (data) => ({
    type: actionTypes.UPDATE_COURSE_SUCCESS,
    payload: data,
});
const updateCourseFail = (error) => ({
    type: actionTypes.UPDATE_COURSE_FAIL,
    payload: error,
});

//COURSE CONFIRM - ADMIN
export const getCourseConfirm = (taiKhoan) => {
    return (dispatch) => {
        dispatch(courseConfirmRequest());
        api
            .post("QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet", taiKhoan)
            .then((result) => {
                dispatch(courseConfirmSuccess(result.data));
            })
            .catch((error) => {
                dispatch(courseConfirmFail(error));
            });
    };
};

const courseConfirmRequest = () => ({
    type: actionTypes.COURSES_CONFIRM_REQUEST,
});

const courseConfirmSuccess = (data) => ({
    type: actionTypes.COURSES_CONFIRM_SUCCESS,
    payload: data,
});

const courseConfirmFail = (error) => ({
    type: actionTypes.COURSES_CONFIRM_FAIL,
    payload: error,
});
//COURSE UNREG - ADMIN
export const getCourseUnReg = (taiKhoan) => {
    return (dispatch) => {
        dispatch(getCourseUnRegRequest());

        api
            .post(
                `QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${taiKhoan}`,
            )
            .then((result) => {
                dispatch(getCourseUnRegSuccess(result.data));
            })
            .catch((error) => {
                dispatch(getCourseUnRegFail(error));
            });
    };
};

const getCourseUnRegRequest = () => ({
    type: actionTypes.COURSES_UNREG_REQUEST,
});

const getCourseUnRegSuccess = (data) => ({
    type: actionTypes.COURSES_UNREG_SUCCESS,
    payload: data,
});

const getCourseUnRegFail = (error) => ({
    type: actionTypes.COURSES_UNREG_FAIL,
    payload: error,
});
//COURSE WAIT CONFIRM - ADMIN
export const getCourseWaitConfirm = (taiKhoan) => {
    return (dispatch) => {
        dispatch(courseWaitConfirmRequest());

        api
            .post("QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet", taiKhoan)
            .then((result) => {
                dispatch(courseWaitConfirmSuccess(result.data));
            })
            .catch((error) => {
                dispatch(courseWaitConfirmFail(error));
            });
    };
};

const courseWaitConfirmRequest = () => ({
    type: actionTypes.COURSES_WAIT_CONFIRM_REQUEST,
});

const courseWaitConfirmSuccess = (data) => ({
    type: actionTypes.COURSES_WAIT_CONFIRM_SUCCESS,
    payload: data,
});

const courseWaitConfirmFail = (error) => ({
    type: actionTypes.COURSES_WAIT_CONFIRM_FAIL,
    payload: error,
});

//DELETE COURSE - ADMIN
export const delCourseByAdmin = (data) => {
    return (dispatch) => {
        dispatch(delCourseByAdminRequest());

        api
            .post("QuanLyKhoaHoc/HuyGhiDanh", data)
            .then((result) => {
                dispatch(delCourseByAdminSuccess(result.data));
                dispatch(getCourseUnReg(data.taiKhoan));
                dispatch(getCourseWaitConfirm({ taiKhoan: data.taiKhoan }));
                dispatch(getCourseConfirm({ taiKhoan: data.taiKhoan }));
                Swal.fire("Thành công", "Hủy ghi danh thành công", "success");
            })
            .catch((error) => {
                dispatch(delCourseByAdminFail(error));
                Swal.fire("Thất bại", error.response?.data, "error");
            });
    };
};

const delCourseByAdminRequest = () => ({
    type: actionTypes.DEL_COURSE_BY_ADMIN_REQUEST,
});

const delCourseByAdminSuccess = (data) => ({
    type: actionTypes.DEL_COURSE_BY_ADMIN_SUCCESS,
    payload: data,
});

const delCourseByAdminFail = (error) => ({
    type: actionTypes.DEL_COURSE_BY_ADMIN_FAIL,
    payload: error,
});
//REGISTER COURSE - ADMIN
export const regCourseByAdmin = (data) => {
    return (dispatch) => {
        dispatch(regCourseByAdminRequest());

        api
            .post("QuanLyKhoaHoc/GhiDanhKhoaHoc", data)
            .then((result) => {
                dispatch(regCourseByAdminSuccess(result.data));
                dispatch(getCourseUnReg(data.taiKhoan));
                dispatch(getCourseWaitConfirm({ taiKhoan: data.taiKhoan }));
                dispatch(getCourseConfirm({ taiKhoan: data.taiKhoan }));
                Swal.fire("Thành công", "Ghi danh thành công", "success");
            })
            .catch((error) => {
                dispatch(regCourseByAdminFail(error));
                Swal.fire("Thất bại", error.response?.data, "error");
            });
    };
};

const regCourseByAdminRequest = () => ({
    type: actionTypes.REG_COURSE_BY_ADMIN_REQUEST,
});

const regCourseByAdminSuccess = (data) => ({
    type: actionTypes.REG_COURSE_BY_ADMIN_SUCCESS,
    payload: data,
});

const regCourseByAdminFail = (error) => ({
    type: actionTypes.REG_COURSE_BY_ADMIN_FAIL,
    payload: error,
});

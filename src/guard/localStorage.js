const localStorage_message={
    //用于保存新生姓名和专业到localStorage
    saveLogin_auth(state) {
       localStorage.setItem("name_major", JSON.stringify(state))
   },
   //读取localStorage
   getLogin_auth() {
       return JSON.parse(localStorage.getItem("name_major")||"{}")
   },
   //删除localStorage
   removeLogin_auth(){
      localStorage.removeItem("name_major")
   }
}
//暴露封装localStorage方法
export default localStorage_message
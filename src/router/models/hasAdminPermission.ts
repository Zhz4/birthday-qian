import {login} from "@/api/user";

const hasAdminPermission = async () => {
    // 获取token
    try {
        const username = JSON.parse(localStorage.getItem("userStore")).token.username;
        const password = JSON.parse(localStorage.getItem("userStore")).token.password;
        if (!username || !password) return false;
        // 登录验证
        const res = await login({ username, password });
        return res.code === 200;
    }catch (e){
        return false;
    }

};
export default hasAdminPermission

interface loginParam {
    username: string,
    password: string
}

/**
 *  后管登录
 * @param param 登录参数
 */
export function userLogin(param: loginParam) {
    const loginUrl = "http://127.0.0.1:8080/user/login";
    console.log(param)
    return fetch(loginUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(param)
    })
}
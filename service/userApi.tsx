interface loginParam {
    username: string,
    password: string
}

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
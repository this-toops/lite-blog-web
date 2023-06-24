interface loginParam {
    username: string,
    password: string
}

/**
 * 获取菜单分类树
 */
export function getMenuTree() {
    const getTreeUrl = "http://127.0.0.1:8080/menu/getMenuTree";
    var resp = fetch(getTreeUrl, {
        method: "GET"
    }).then(res => res.json());
    console.log(resp)
    return resp;
}
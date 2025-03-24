const base = {
    get() {
        return {
            url : "http://localhost:8080/bianjiefandiandiacan/",
            name: "bianjiefandiandiacan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/bianjiefandiandiacan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "便捷饭店点餐小程序"
        } 
    }
}
export default base

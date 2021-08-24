class Globals {
}

class DevelopmentGlobals extends Globals {
    public urls = {
        admin: "http://myblog-env.eba-ueehxgpj.us-east-2.elasticbeanstalk.com/api/admin",
        getArticles: "http://myblog-env.eba-ueehxgpj.us-east-2.elasticbeanstalk.com/api/user/get-article/",
        getAllArticles: "http://myblog-env.eba-ueehxgpj.us-east-2.elasticbeanstalk.com/api/user/get-all-articles",
        getAllCategories: "http://myblog-env.eba-ueehxgpj.us-east-2.elasticbeanstalk.com//api/user/get-all-categories",
        getByCategory: "http://myblog-env.eba-ueehxgpj.us-east-2.elasticbeanstalk.com/api/user/get-articles-by-category/",
    };
}

class ProductionGlobals extends Globals {
    public urls = {
        admin: "/api/admin",
        getArticles: "/api/user/get-article/",
        getAllArticles: "/api/user/get-all-articles",
        getAllCategories: "/api/user/get-all-categories",
        getByCategory: "/api/user/get-articles-by-category/",
    };
}

// Creating the correct object
const globals = process.env.NODE_ENV === "development" ? new DevelopmentGlobals() : new ProductionGlobals();

export default globals;
class Globals {
}

class DevelopmentGlobals extends Globals {
    public urls = {
        admin: "http://localhost:8080/api/admin",
        getArticles: "http://localhost:8080/api/user/get-article/",
        getAllArticles: "http://localhost:8080/api/user/get-all-articles/",
        getAllCategories: "http://localhost:8080/api/user/get-all-categories/",
        getByCategory: "http://localhost:8080/api/user/get-articles-by-category/",
    };
}

class ProductionGlobals extends Globals {
    public urls = {
        admin: "http://localhost:8080/api/admin",
        getArticles: "http://localhost:8080/api/user/get-article/",
        getAllArticles: "http://localhost:8080/api/user/get-all-articles/",
        getAllCategories: "http://localhost:8080/api/user/get-all-categories/",
        getByCategory: "http://localhost:8080/api/user/get-articles-by-category/",
    };
}

// Creating the correct object
const globals = process.env.NODE_ENV === "development" ? new DevelopmentGlobals() : new ProductionGlobals();

export default globals;
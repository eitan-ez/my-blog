class Globals {
}

class DevelopmentGlobals extends Globals {
    public urls = {
        admin: "http://localhost:8080/api/admin",
        getArticles: "http://localhost:8080/api/user/get-article/", 
        getAllArticles: "http://localhost:8080/api/user/get-all-articles/",
        
    };
}

class ProductionGlobals extends Globals {
    public urls = {
        admin: "http://localhost:8080/api/admin", 
        getArticles: "http://localhost:8080/api/user/get-article/",
        getAllArticles: "http://localhost:8080/api/user/get-all-articles/",
        
    };
}

// Creating the correct object
const globals = process.env.NODE_ENV === "development" ? new DevelopmentGlobals() : new ProductionGlobals();

export default globals;
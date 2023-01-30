# Middleware

    # What is it?
        ANATOMY:
            app.use() takes two arguments
                1. (optional) - mount path (endpoints) e.g. app.use("/something")
                2. callback function - recieves the req, res objects, also the "next" function
    
    # the "next" fucntion
        dictates the next middleware to run on the server
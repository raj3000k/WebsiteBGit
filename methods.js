const express =require("express");
const app=express();
app.use(express.json());
app.listen(3000);
//mini app

const userRouter=express.Router();  //a router to route

//base route , router to use
app.use("/user",userRouter);
userRouter
.route("/")
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser);

userRouter.route('/:id').get(getUserById);

let users =[
    {
        Name: "Raj",
        id: 30
    },{
        Name : "Raj2.0",
        id : 20
    }
];

function getUser(req,res){    
    res.send(users);

};

function postUser(req,res){          
    console.log(req.body);
    users=req.body;
    res.json({
        message: "data recieved successfully",
        user:req.body
    });
};


function updateUser(req,res){
    log('req.body->',req.body);

    //updating user data in user obj
    let dataTobeUpdated =req.body;
    for(key in dataTobeUpdated){
        users[key]=dataTobeUpdated[key];
    }
    res.json({
        message: "data updated successfully"
    });
};


function deleteUser(req,res){
    users={};

    res.json({
        message: "data deleted successfully"
    });
};

function getUserById(req,res){
    console.log(req.params.id);
    let params=req.params.id;
    let obj={};
    for(let i=0;i<users.length;i++){
        if(users[i]['id']==paramId){
            obj=users[i];
        }
    }
    res.json({
        message: "reqq recieved",
        data:obj
    });
};
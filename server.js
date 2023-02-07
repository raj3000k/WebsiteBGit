// server creation

// http module
const http=require('http');                                       //1
const fs=require('fs'); //a module very useful and basic          //2
const _ =require('lodash');

const server=http.createServer((req,res)=>{                        //3
    console.log('Request made from browser to server');
    // console.log(req.method);
    // console.log(req.url);
    //lodash
    let num= _.random(0,20);
    res.setHeader('Content-Type','text/html');                     //4
    let path='./views';
    switch(req.url){
        case '/':
            path+='/index.html';
            break;
        case '/about':
            path+='/about.html';
            break;
        default:
            path+='/404.html';
            break;

    };
    fs.readFile(path,(err,fileData)=>{                             //5
        if(err){
            console.log(err);
        }
        else{
            
            res.end(fileData);
        }
    })

});

//port number,host 
server.listen(3000, 'localhost',()=>{                           //6
    console.log('server is listening');
});
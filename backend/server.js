const dotenv=require('dotenv');
const express = require('express');
const app = express();


dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));




const server=app.listen(5000,()=>console.log('Server is running on port '+5000))

const io=require('socket.io')(server,{
    pingTimeout: 60000,
    cors:{
        origin: 'http://localhost:3000'
    }
});

io.on('connection',(socket)=>{
    console.log("Connected to socket.io")

    socket.on('setup',userData=>{
        socket.join(userData);
        console.log('Connected',userData)
        socket.emit("connected");
    });

    socket.on('new K',(k)=>{
        socket.broadcast.emit('received K',k)
    })

    socket.on('Open Dropdown',({val,user})=>{
        socket.broadcast.emit('dropdown open',{val,user})
    })
    socket.on('reload',()=>{
        socket.broadcast.emit('load')
    })

    socket.on('mouse',({mousePos,user})=>{
        socket.broadcast.emit('mouseback',{mousePos,user})
    })


    socket.on("new component",(message)=>{
        var chat=message.chat;
        if(!chat.users) return console.log("Chat.users not defined");

        
        chat.users.forEach(user=>{
            if(user._id === message.sender._id) return

            socket.in(user._id).emit("component received",message);
        });
    });

    socket.off("setup", (userData) => {
        console.log("USER DISCONNECTED");
        socket.leave(userData._id);
      });
});
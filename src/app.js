const express = require("express")

const app=express();
let port=3000;
const path = require("path");
const arogyasetuCollection=require("./model/model");
const template_path = path.join(__dirname, "../template/views");
app.set("vie engine", "hbs");
app.set("views",template_path);
require("./db/db");

app.use(express.urlencoded({extended:false}));

app.get("/", (req,res)=>{
    res.render("index")
})

app.post("/register_user",async(req,res)=>{
    console.log(req.body.name);
    res.send(req.body.name);
})
app.post("/register_user",async(req,res)=>{
    console.log(req.body,phoneNumber);
    res.send(req.body.phoneNumber);
})
app.post("/register_user",async(req,res)=>{
    console.log(req.body.age);
    res.send(req.body.age);
})
app.post("/register_user",async(req,res)=>{
    console.log(req.body.pincode);
    res.send(req.body.pincode);
})
app.post("/register_user",async(req,res)=>{
    console.log(req.body.adharNumber);
    res.send(req.body.adharNumber);
})
app.post("/register_user",async(req,res)=>{
    const password=req.body.password;
    onsole.log(req.body.password);
    res.send(req.body.password);
})
app.post("/register_user",async(req,res)=>{
    console.log(req.body.firstDose);
    res.send(req.body.firstDose);
})
app.post("/register_user",async(req,res)=>{
    console.log(req.body.secondDose);
    res.send(req.body.secondDose);
})
app.get("/", (req,res)=>{
    res.render("login")
})
app.post("/register_user",async(req,res)=>{
    console.log(req.body,phoneNumber);
    res.send(req.body.phoneNumber);
})
app.post("/register_user",async(req,res)=>{
    const password=req.body.password;
    onsole.log(req.body.password);
    res.send(req.body.password);
})
const availableTimeSlots = [];
const startTime = new Date('2023-06-01T10:00:00');
const endTime = new Date('2023-06-30T17:00:00');
const slotDuration = 30 * 60 * 1000; // 30 minutes in milliseconds

for (let time = startTime; time <= endTime; time.setTime(time.getTime() + slotDuration)) {
    availableTimeSlots.push({
        startTime: new Date(time),
        endTime: new Date(time.getTime() + slotDuration),
        availableDoses: 10,
        registeredUsers: [],
    });
}

app.get('/available-time-slots', (req, res) => {
    res.json(availableTimeSlots);
});

// API endpoint to register a user for a time slot
app.post('/register', (req, res) => {
    const { slotIndex, userId } = req.body;

    if (slotIndex >= 0 && slotIndex < availableTimeSlots.length) {
        const slot = availableTimeSlots[slotIndex];

        if (slot.availableDoses > 0) {
            slot.availableDoses--;
            slot.registeredUsers.push(userId);
            res.json({ message: 'Registration successful' });
        } else {
            res.status(400).json({ error: 'No available doses in this slot' });
        }
    } else {
        res.status(400).json({ error: 'Invalid time slot index' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

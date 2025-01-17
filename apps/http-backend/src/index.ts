import  express  from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import {CreateUserSchema, SigninSchema, CreateRoomSchema} from "@repo/common/types";
import {prismaClient} from "@repo/db/client";


const app = express();
app.use(express.json())
app.post("/signup", async (req, res) => {

    const parsedData = CreateUserSchema.safeParse(req.body);
    if (!parsedData.success) {
        console.log(parsedData.error);
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }
    try {
        const user = await prismaClient.user.create({
            data: {
                email: parsedData.data?.userName,
                password: parsedData.data.password,
                name: parsedData.data.name
            }
        })
        res.json({
            userId: user.id
        })
    } catch(e) {
        res.status(411).json({
            message: "User already exists with this username"
        })
    }
})

app.post("/signin", (req, res) => {
    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET as any)

    res.json({
        token
    })
})

app.get("/user", (req, res) => {
    res.json({
        roomId:123,
    })
})

app.listen(3001);



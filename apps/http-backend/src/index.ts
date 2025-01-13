import  express  from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import {CreateUserSchema} from "@repo/common/types"


const app = express();

app.post("/singup", (req, res) => {
    const data = CreateUserSchema.safeParse(req.body);

    if(!data.success) {
        res.json({
            message:"Incorrect Inputs"
        })

        return;
    }
    res.json({
        userId:123,
    })
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



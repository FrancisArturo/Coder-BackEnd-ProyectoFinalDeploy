import jwt from "jsonwebtoken"





export const generateJWT = (user) => {
        const token = jwt.sign({user}, SECRET_CODE_JWT, { expiresIn: "60m"})
        return token;
};

export const cookieExtractor = req => {
        let token = null;
        if (req && req.cookies) {
                token = req.cookies["cookieToken"]
        }
        return token
};
import JWT from "jsonwebtoken";

const createTokensAndsetCookies = (Userid, res) => {
       const token = JWT.sign({Userid}, process.env.SECRET, {
            expiresIn : "30d"
        });

        res.cookie("jwt", token, {
            maxAge : 30 * 24 * 60 * 60 *  1000,
            httpOnly : true, // prevent XSS attacks cross-site scripting attacks
            sameSite : "strict", // prievent CSRF attacks cross site request forgery attack
            secure : process.env.NODE_ENV == "DEVELOPMENT" ? true : false ,
        } 
    )
}

export default createTokensAndsetCookies;
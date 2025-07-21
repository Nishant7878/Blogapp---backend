const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const asyncHandler = require("../utils/AsyncHandler.js");

//  Auth middleware
const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            //  decode token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // attach user (without password)
            req.user = await User.findById(decoded.id).select("-password");

            next();
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    }
    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});


const authorizeRoles = (...roles) => {
    return (req, res, next) => {
     
        if (!roles.includes(req.user.roles)) {
            res.status(403);
            throw new Error("Forbidden: You are not allowed to access this resource");
        }
        next();
    };
};

module.exports = { protect, authorizeRoles };
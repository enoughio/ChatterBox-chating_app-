import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;

		const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};



// import message from "../model/messege.model.js";
// import User from "../model/user.model.js";

// export const getUserForSidePart = async (req, res ) => {
//     try {
//         const loggedInUser = req.user._id;

//         const filteruser = await User.find( { _id: { $ne: loggedInUser }}).select("-password")

//         console.log(filteruser)
//         res.status(200).json({
//             filteruser,
//         })

//     } catch (error) {
//         console.log("error in user controller", error.message)
//         res.status(500).json({
//             error : "internal server error",
//         })
//     }

// }


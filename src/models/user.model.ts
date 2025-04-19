import mongoose, { Document } from "mongoose";

interface IUser extends Document {
	username: string;
	password: string;
	email: string;
	fullname: string;
    role: "user" | "admin";
    refreshTokenSecret : string ,
    accessTokenSecret: string 
}

const userSchema = new mongoose.Schema<IUser>(
	{
		username: {
			type: String,
            unique : [true , "Username should be unique"],
			required: [true, "Please provide username"],
			trim: true,
			lowercase: true,
		},

		password: {
			type: String,
			required: [true, "Please provide password"],
			trim: true,
		},

		email: {
			type: String,
			required: [true, "Please provide email"],
			match: [/^[\w.-]+@[\w.-]+\.[a-z]{2,4}$/, "Invalid email"],
			trim: true,
            lowercase: true,
            unique : [true , "Email should be unique"]
		},

		fullname: {
			type: String,
			required: [true, "Please provide fullname"],
			trim: true,
		},
		role: {
			type: String,
			enum: ["user", "admin"],
        },
		refreshTokenSecret: {
			type: String,
            default : "",
            required: true,
            
        },
		accessTokenSecret: {
			type: String,
            default : "",
            required: true,
            
        },
		
	},
	{ timestamps: true }
);

const UserModel = mongoose.model<IUser>("User", userSchema);
export default UserModel;

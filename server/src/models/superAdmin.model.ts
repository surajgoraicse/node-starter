import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
	username: string;
	password: string;
	email: string;
	fullName: string;
	role: "superAdmin";
	avatar: string;
	comparePassword: (password: string) => Promise<boolean>;
	changePassword: (
		newPassword: string,
		oldPassword: string
	) => Promise<boolean>;
}

const userSchema = new mongoose.Schema<IUser>(
	{
		username: {
			type: String,
			unique: [true, "Username should be unique"],
			required: [true, "Please provide username"],
			trim: true,
			lowercase: true,
		},

		password: {
			type: String,
			required: [true, "Please provide password"],
			trim: true,
		},

		avatar: {
			type: String,
			default: "some default image link",
		},

		email: {
			type: String,
			required: [true, "Please provide email"],
			match: [/^[\w.-]+@[\w.-]+\.[a-z]{2,4}$/, "Invalid email"],
			trim: true,
			lowercase: true,
			unique: [true, "Email should be unique"],
		},

		fullName: {
			type: String,
			required: [true, "Please provide fullName"],
			trim: true,
		},
		role: {
            type: String,
            enum : ["superAdmin"],
		},
	},
	{ timestamps: true }
);


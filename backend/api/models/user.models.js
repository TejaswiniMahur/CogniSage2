import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            unique:true,
            required:true,
        },
        email:{
            type:String,
            unique:true,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
        profilePicture:{
            type: String,
            default: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709769600&semt=ais"
        }
    },{timestamps:true}
);
const User = mongoose.model('User',userSchema);
export default User;
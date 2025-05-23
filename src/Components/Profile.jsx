import profilePic from "../assets/profilepic.jpg";
import "../Components/Profile.css";

function Profile(props) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto text-center">
        <img
          src={profilePic}
          alt="profile pic"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-300"
        />
        <h1 className="text-4xl font-semibold text-gray-800 mb-2">
          {props.title}
        </h1>
        <p className="text-xl text-gray-600">
          Hello, I'm {props.age} years old and I{" "}
          {props.isStudent ? "am a student" : "am not a student"}.
        </p>
      </div>
    </div>
  );
}

export default Profile;

// This component is responsible for displaying the user's profile information.

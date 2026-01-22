// interface ProfileDropdownProps {
//   name: string;
//   email: string;
//   onLogout: () => void;
// }

const ProfileDropdown = () => {
  return (
    <div className="absolute right-6 top-16 w-48 bg-white shadow-lg rounded-md p-4 z-50">
      <p className="font-semibold">Rishu</p>
      <p className="text-sm text-gray-500">rishu@gmail.com</p>
    <button className="mt-3 w-full bg-red-600 text-white font-bold rounded-md py-1">
        Logout
      </button>
    </div>
  );
};


export default ProfileDropdown;

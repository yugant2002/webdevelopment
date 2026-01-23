import React from 'react'

const UserProfile = () => {

  const [isEditProfileModalOpen,setIsEditProfileModalOpen] = userState(false);
  const {user}= useAuth();
  return (
    <>
    <div className='flex gap-10'>
      <span>Name:</span>  <span>{user.fullname}  </span>
    </div>
    
    <div>
      <span>email:</span>  <span>{user.email}  </span>
    </div>

    <div>
      <span>Phone:</span>  <span> {user.Moblie} </span>
    </div>

    <button className='border px-5 py-2 bg-amber-400'
    onClick={() => setIsEditModalOpen(true)}
    >

    Edit Profile
    </button>

{ isEditProfileModalOpen && (
 <EditProfileModal onClose = {() => setIsEditProfileModalOpen(false)} />
)}

    </>
  );
};

export default UserProfile
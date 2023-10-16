import React, { useState } from 'react';
import axios from 'axios';



function ImageUpload () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0].name;
    setImage(selectedImage);
  };

  console.log(image)

  const handleImageUpload = () => {
    if (name && email && image) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('image', image);



      console.log(formData)

    //   axios.post('/upload', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })
    //   .then((response) => {
    //     // Handle the response from the backend here
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
    }
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} placeholder='name' onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} placeholder='email' onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input type="file" accept="image/*" id="image" onChange={handleImageChange} />
      </div>
      <button onClick={handleImageUpload} className='bg-red-500 p-4'>Upload</button>
    </div>
  );
}

export default ImageUpload;

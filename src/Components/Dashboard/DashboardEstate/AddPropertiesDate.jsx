import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../../../Api/Api";
import Cookies from "universal-cookie";

const AddPropertiesDate = () => {
    // State for storing image URLs
    const [images, setImages] = useState([]);

    const cookies = new Cookies()
    const token = cookies.get('auth_token')
    
    // State for form data fields
    const [formData, setFormData] = useState({
        price: "",
        city: "",
        direction: "",
        district: "",
        area: "",
        buildType: "",
        bedrooms: "",
        type: "",
        description: "",
    });

    // Handle image selection and preview
    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages([...images, ...newImages]);
    };

    // Remove an image from the preview list
    const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    // Handle text input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();

        // Append all text fields to the FormData object
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        // Convert image URLs to files and append them
        for (let i = 0; i < images.length; i++) {
            const response = await fetch(images[i]);
            const blob = await response.blob();
            formDataToSend.append("https://picsum.photos/id/237/200/300", blob, );
        }

        try {
            // Send POST request with form data
            const response = await axios.post(`${baseUrl}/property/add-property`, formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                },
            });

            console.log("Property added successfully:", response.data);
            // Handle success (e.g., clear form, show success message)
        } catch (error) {
            console.error("Error adding property:", error);
            // Handle error (e.g., show error message)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white mx-[15px] lg:mx-0 ">
            {/* Image Upload Section */}
            <div className="flex flex-col xl:flex-row gap-6">
                {/* Left side - Image Preview */}
                <div className="xl:w-[40%] bg-gray-100 rounded-lg flex justify-center items-center min-h-[300px]">
                    {images.length > 0 ? (
                        <img
                            src={images[0]}
                            alt="Preview"
                            className="w-full h-full min-h-[300px] lg:max-h-[378px] object-cover rounded-lg"
                        />
                    ) : (
                        <p className="text-[#858585]">No image selected</p>
                    )}
                </div>

                {/* Right side - Upload Controls */}
                <div className="xl:w-[60%] flex flex-col gap-2 mb-5">
                    {/* Drop/Select Image Area */}
                    <label className="border border-[#D3D3D3] h-[54px] lg:h-[156px] p-4 text-center rounded-[10px] cursor-pointer flex justify-center items-center text-[#858585]">
                        <input type="file" multiple onChange={handleImageChange} className="hidden" />
                        Select or drop image
                    </label>

                    {/* Upload Button */}
                    <div className="border border-[#D3D3D3] h-[65px] rounded-[10px] p-3 flex justify-between items-center">
                        <span className="text-[#858585]">Images</span>
                        <button
                            className="text-white bg-[#714E95] w-[152px] h-[40px] py-2 rounded-[6px]"
                            disabled={images.length === 0}
                        >
                            Upload Images
                        </button>
                    </div>

                    {/* Thumbnail Previews */}
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-[16px]">
                        {images.map((image, index) => (
                            <div key={index} className="relative aspect-square">
                                <img
                                    src={image}
                                    alt="preview"
                                    className="w-full h-full object-cover rounded-[10px]"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeImage(index)}
                                    className="absolute top-1 right-1 bg-gray-50 rounded-full w-4 h-4 flex items-center justify-center"
                                >
                                    x
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Input Fields */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-[24px] mt-[16px] lg:mt-[24px]">
                <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Property Price"
                    className="border h-[50px] p-2 rounded-[10px] focus:border-[#714E95] focus:outline-none focus:border-2 border-[#D3D3D3]" />

                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Property City"
                    className="border h-[50px] p-2 rounded-[10px] focus:border-[#714E95] focus:outline-none focus:border-2 border-[#D3D3D3]" />

                <input type="text" name="direction" value={formData.direction} onChange={handleChange} placeholder="Property Direction"
                    className="border h-[50px] p-2 rounded-[10px] focus:border-[#714E95] focus:outline-none focus:border-2 border-[#D3D3D3]" />

                <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="Property District"
                    className="border h-[50px] p-2 rounded-[10px] focus:border-[#714E95] focus:outline-none focus:border-2 border-[#D3D3D3]" />

                <input type="text" name="area" value={formData.area} onChange={handleChange} placeholder="Property Area"
                    className="border h-[50px] p-2 rounded-[10px] focus:border-[#714E95] focus:outline-none focus:border-2 border-[#D3D3D3]" />

                <input type="text" name="buildType" value={formData.buildType} onChange={handleChange} placeholder="Property Build Type"
                    className="border h-[50px] p-2 rounded-[10px] focus:border-[#714E95] focus:outline-none focus:border-2 border-[#D3D3D3]" />

                <input type="text" name="bedrooms" value={formData.bedrooms} onChange={handleChange} placeholder="Property Bedrooms"
                    className="border h-[50px] p-2 rounded-[10px] focus:border-[#714E95] focus:outline-none focus:border-2 border-[#D3D3D3]" />

                <input type="text" name="type" value={formData.type} onChange={handleChange} placeholder="Property Type"
                    className="border h-[50px] p-2 rounded-[10px] focus:border-[#714E95] focus:outline-none focus:border-2 border-[#D3D3D3]" />
            </div>

            {/* Description */}
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description"
                className="border p-2 border-[#D3D3D3] rounded-[10px] w-full mt-5 h-[122px] lg:h-[220px] focus:border-[#714E95] focus:outline-none focus:border-2"></textarea>

            {/* Submit Button */}
            <button type="submit" className="bg-[#714E95] text-white px-6 h-[50px] rounded-[10px] text-[22px] font-bold mt-4 w-full">
                Submit
            </button>
        </form>
    );
};

export default AddPropertiesDate;

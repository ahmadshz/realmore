import React, { useState } from 'react';

const AddPropertiesCSV = () => {
  const [csvFile, setCsvFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files.length) {
      setCsvFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log('Uploading file:', csvFile.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        {/* File Drop Zone */}
        <label className="block mb-[24px]">
          <div className="border border-[#D3D3D3] rounded-[10px] h-[136px] p-8 flex items-center justify-center cursor-pointer">
            <input 
              type="file" 
              onChange={handleFileChange} 
              className="hidden" 
            />
            <p className="text-[18px] text-[#858585]">Select or drop CSV file</p>
          </div>
        </label>


        {/* File Info and Upload Button */}
        <div className="flex justify-between items-center mb-[40px] border border-[#D3D3D3] rounded-[10px] px-[16px] py-[12px] h-[65px]">
          <div className='text-[18px] text-[#858585]'>
            <p >CSV file</p>
            {csvFile && <p className="text-gray-500">{csvFile.name}</p>}
          </div>
          <button
            type="button"
            onClick={handleUpload}
            disabled={!csvFile}
            className='px-4 py-2 rounded-[6px] h-[41px] bg-[#714E95] text-white'
          >
            Upload files
          </button>
        </div>


        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#714E95] text-white h-[50px] rounded-[10px] font-bold text-[22px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPropertiesCSV;
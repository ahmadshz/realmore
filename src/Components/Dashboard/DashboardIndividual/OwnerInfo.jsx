import { useState, useRef, useEffect } from "react";

const OwnerInfo = ({ owner, polygon, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOwner, setSelectedOwner] = useState(owner);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSelect = (name) => {
        setSelectedOwner(name);
        setIsOpen(false);

        if (onChange) {
            onChange(name); // ✅ Notify parent
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} className="flex justify-end items-center gap-2 mt-2 relative">
            <span className="text-[24px]">Owner</span>
            <div
                onClick={toggleDropdown}
                className="h-[46px] w-[320px] border border-[#000000] rounded-full px-2 flex items-center justify-between gap-2 relative cursor-pointer"
            >
                <div className="flex items-center gap-2">
                    <div className="h-[36px] w-[36px] bg-[#D9D9D9] rounded-full"></div>
                    <h1 className="text-[24px] font-bold">{selectedOwner}</h1>
                </div>
                <img className="mr-3" src={polygon} alt="dropdown" />

                {isOpen && (
                    <div className="absolute right-0 top-[110%] w-full bg-white border rounded-[10px] border-[#000000] shadow-md z-10">
                        <ul className="p-2">
                            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelect("Ahmad")}>
                                Ahmad
                            </li>
                            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelect("Mohamad")}>
                                Mohamad
                            </li>
                            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelect("Mahmoud")}>
                                Mahmoud
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OwnerInfo;

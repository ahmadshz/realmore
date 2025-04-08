const OwnerInfo = ({ owner, polygon }) => {
    return (
        <div className="flex justify-end items-center gap-2 mt-2">
            <span className="text-[24px]">Owner</span>
            <div className="h-[46px] w-[320px] border border-[#000000] rounded-full px-2 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                    <div className="h-[36px] w-[36px] bg-[#D9D9D9] rounded-full"></div>
                    <h1 className="text-[24px] font-bold">{owner}</h1>
                </div>
                <img className="mr-3" src={polygon} alt="dropdown" />
            </div>
        </div>
    );
};

export default OwnerInfo;

const MetricCard = ({ title, value, icon, additionalText, progressBar, className, desc, classValue, progress, shadow, description, empty }) => {
    return (
        <div className={`border relative border-[#D3D3D3]  flex items-center justify-between ${shadow} ${className}`}>
            <div className='flex flex-col justify-between h-full leading-[1.2]'>
                <h1 className='text-[12px]  lg:text-[16px] text-[#858585]'>{title}</h1>
                <div className="hidden xl:block">
                    {empty && <div />}
                    {empty && <div />}
                </div>
                <div className={`${classValue}`}>{value}</div>
               { description && <div className=" lg:hidden text-[16px]">{description}</div>}

                <h2 className=" text-[12px] lg:text-[16px] ">{desc}</h2>
            </div>
            <div className="flex items-center gap-2">
                {additionalText && <span className='text-[12px] text-[#858585]'>{additionalText}</span>}
                {icon && <img src={icon} alt={title} />}
            </div>
            {progressBar && (
                <div className='flex flex-col mt-5 lg:mt-14'>
                    <div className='flex flex-col  gap-2 lg:gap-3'>
                        <div>
                            {progressBar}
                        </div>
                        {progress && <h1 className='text-[10px] text-end text-[#328C71] font-bold '>%20 Left</h1>}

                    </div>
                </div>
            )}

            <div className="absolute hidden lg:block bottom-[20px] right-[20px] text-[16px]">{description}</div>
        </div>
    );
};

export default MetricCard
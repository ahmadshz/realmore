import React, { useState, useRef, useEffect } from "react";

// ScrollBarList Component
const ScrollBarList = ({ children, height = "400px" }) => {
    const [scrollValue, setScrollValue] = useState(0); // Scroll position (0 to 100)
    const [isDragging, setIsDragging] = useState(false); // Dragging state
    const scrollRef = useRef(null); // Ref for the scroll container
    const contentRef = useRef(null); // Ref for the content container

    // Calculate scroll position percentage
    const handlePositionPercentage = scrollValue;

    // Update scroll position based on mouse/touch input
    const updateScrollValue = (clientY) => {
        if (!scrollRef.current || !contentRef.current) return;

        const scrollContainer = scrollRef.current;
        const contentContainer = contentRef.current;

        const rect = scrollContainer.getBoundingClientRect();
        const scrollHeight = rect.height;
        const offsetY = clientY - rect.top;

        // Calculate percentage based on position
        let percentage = offsetY / scrollHeight;
        percentage = Math.max(0, Math.min(1, percentage));

        // Update scroll value
        setScrollValue(percentage * 100);

        // Scroll the content
        const contentHeight = contentContainer.scrollHeight - contentContainer.clientHeight;
        contentContainer.scrollTop = percentage * contentHeight;
    };

    // Handle mouse down event
    const handleMouseDown = (e) => {
        setIsDragging(true);
        updateScrollValue(e.clientY);
    };

    // Handle touch start event
    const handleTouchStart = (e) => {
        setIsDragging(true);
        updateScrollValue(e.touches[0].clientY);
    };

    // Add event listeners for dragging
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging) {
                updateScrollValue(e.clientY);
            }
        };

        const handleTouchMove = (e) => {
            if (isDragging) {
                updateScrollValue(e.touches[0].clientY);
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("touchmove", handleTouchMove);
            window.addEventListener("mouseup", handleMouseUp);
            window.addEventListener("touchend", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchend", handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div className="flex">
            {/* Scrollable Content */}
            <div
                ref={contentRef}
                className="flex-1 overflow-hidden  custom-scrollbar"
                style={{ height }}
            >
                {children}
            </div>

            {/* Custom Scrollbar */}
            <div
                className="relative w-[1px] lg:left-3  xl:left-5 2xl:left-6 bg-[#D3D3D3] rounded-full"
                style={{ height }}
                ref={scrollRef}
            >
                {/* Vertical bar */}
                <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 bg-gray-300 w-full" />

                {/* Handle */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 rounded-full bg-white border border-gray-300 cursor-pointer"
                    style={{
                        width: 16,
                        height: 16,
                        top: `calc(${handlePositionPercentage}% - 8px)`,
                    }}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                />
            </div>
        </div>
    );
};

export default ScrollBarList;
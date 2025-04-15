import React, { useState, useRef, useEffect } from "react";

const ScrollBarY = ({
    children,
    width = "auto",
    scrollWidth = "600px",
    height = "auto",
    scrollBarHeight = 4,
    scrollBarColor = "#D3D3D3",
    gap = 8,
    hideNativeScrollbar = true,
    scrollSpeed = 2 // Scroll speed multiplier
}) => {
    const [scrollValue, setScrollValue] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isScrollable, setIsScrollable] = useState(false);
    const scrollRef = useRef(null);
    const contentRef = useRef(null);

    // Check if content is scrollable
    useEffect(() => {
        const checkScrollable = () => {
            if (contentRef.current) {
                const isScrollable = contentRef.current.scrollWidth > contentRef.current.clientWidth;
                setIsScrollable(isScrollable);
            }
        };

        checkScrollable();
        const resizeObserver = new ResizeObserver(checkScrollable);
        if (contentRef.current) {
            resizeObserver.observe(contentRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, [children]);

    // Scroll to position based on mouse X
    const updateScrollValue = (clientX, smooth = false) => {
        if (!scrollRef.current || !contentRef.current) return;

        const rect = scrollRef.current.getBoundingClientRect();
        let percentage = (clientX - rect.left) / rect.width;
        percentage = Math.max(0, Math.min(1, percentage));
        setScrollValue(percentage * 100);

        const content = contentRef.current;
        const scrollTarget = percentage * (content.scrollWidth - content.clientWidth);

        if (smooth) {
            content.scrollTo({ left: scrollTarget, behavior: "smooth" });
        } else {
            content.scrollLeft = scrollTarget;
        }
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        updateScrollValue(e.clientX);
        e.preventDefault();
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        updateScrollValue(e.touches[0].clientX);
    };

    const handleContentScroll = () => {
        if (!contentRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = contentRef.current;
        const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;
        setScrollValue(scrollPercentage);
    };

    // Wheel scrolling
    useEffect(() => {
        const content = contentRef.current;
        if (!content) return;

        const handleWheel = (e) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                content.scrollLeft += e.deltaY * scrollSpeed;
            }
        };

        content.addEventListener("wheel", handleWheel, { passive: false });
        return () => content.removeEventListener("wheel", handleWheel);
    }, [scrollSpeed]);

    // Handle drag
    useEffect(() => {
        const handleMove = (e) => {
            if (isDragging) {
                updateScrollValue(e.clientX);
            }
        };

        const handleTouchMove = (e) => {
            if (isDragging) {
                updateScrollValue(e.touches[0].clientX);
            }
        };

        const handleMouseUp = () => setIsDragging(false);

        if (isDragging) {
            window.addEventListener("mousemove", handleMove);
            window.addEventListener("touchmove", handleTouchMove);
            window.addEventListener("mouseup", handleMouseUp);
            window.addEventListener("touchend", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchend", handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div
            className={`"scrollbar-list-container ${width}`}
        >
            {/* Scrollable Content */}
            <div
                ref={contentRef}
                className={`scrollbar-content ${scrollWidth}`}
                style={{
                    height,
                    overflowX: hideNativeScrollbar ? "hidden" : "auto",
                    display: "flex",
                    gap: `${gap}px`,
                    scrollBehavior: "smooth",
                    position: "relative",
                    
                }}
                onScroll={handleContentScroll}
            >
                {children}
            </div>

            {/* Custom Scrollbar */}
            {isScrollable && (
                <div
                    className={`"custom-scrollbar ${scrollWidth}`}
                    style={{
                        height: `${scrollBarHeight}px`,
                        margin: `${scrollBarHeight}px auto 0`,
                        position: "relative",
                        cursor: "pointer"
                    }}
                    ref={scrollRef}
                    onClick={(e) => updateScrollValue(e.clientX, true)}
                >
                    {/* Track */}
                    <div
                        className="scrollbar-track mt-3"
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: scrollBarColor,
                            borderRadius: `${scrollBarHeight / 2}px`,
                            position: "absolute"
                        }}
                    />

                    {/* Handle */}
                    <div
                        className="absolute bg-white border border-gray-300 cursor-pointer rounded-full mt-3"
                        style={{
                            width: 16,
                            height: 16,
                            left: `calc(${scrollValue}% - 8px)`,
                            top: "50%",
                            transform: "translateY(-50%)",
                        }}
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleTouchStart}
                    />
                </div>
            )}
        </div>
    );
};

export default ScrollBarY;

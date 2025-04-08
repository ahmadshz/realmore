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
    scrollSpeed = 2 // Add scroll speed multiplier (default 2x faster)
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
            window.removeEventListener('resize', checkScrollable);
        };
    }, [children]);

    const updateScrollValue = (clientX) => {
        if (!scrollRef.current || !contentRef.current) return;

        const scrollContainer = scrollRef.current;
        const contentContainer = contentRef.current;
        const rect = scrollContainer.getBoundingClientRect();

        const scrollWidth = rect.width;
        const offset = clientX - rect.left;

        let percentage = offset / scrollWidth;
        percentage = Math.max(0, Math.min(1, percentage));
        setScrollValue(percentage * 100);

        const contentScrollWidth = contentContainer.scrollWidth - contentContainer.clientWidth;
        contentContainer.scrollLeft = percentage * contentScrollWidth;
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        updateScrollValue(e.clientX);
        e.preventDefault(); // Prevent text selection during drag
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

    // Add wheel event for faster scrolling
    useEffect(() => {
        const contentContainer = contentRef.current;
        if (!contentContainer) return;

        const handleWheel = (e) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                // Only prevent default if we're handling horizontal scroll
                e.preventDefault();
                contentContainer.scrollLeft += e.deltaY * scrollSpeed;
            }
        };

        contentContainer.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            contentContainer.removeEventListener('wheel', handleWheel);
        };
    }, [scrollSpeed]);

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

        const handleMouseUp = () => {
            setIsDragging(false);
        };

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
            className="scrollbar-list-container"
            style={{ width }}
        >
            {/* Scrollable Content */}
            <div
                ref={contentRef}
                className="scrollbar-content"
                style={{
                    width: "100%",
                    maxWidth: scrollWidth,
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

            {/* Custom Horizontal Scrollbar */}
            {isScrollable && (
                <div
                    className="custom-scrollbar"
                    style={{
                        width: scrollWidth,
                        height: `${scrollBarHeight}px`,
                        margin: `${scrollBarHeight}px auto 0`,
                        position: "relative",
                        cursor: "pointer"
                    }}
                    ref={scrollRef}
                    onClick={(e) => {
                        updateScrollValue(e.clientX);
                    }}
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
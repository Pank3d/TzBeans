import { useEffect, useState } from 'react';
import { useInfiniteScrollInter } from '../interface/interface';

const useInfiniteScroll = ({ fetchNextPage, hasNextPage, isFetchingNextPage }:useInfiniteScrollInter) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY + window.innerHeight;
        setScrollPosition(position);

        if (document.documentElement.scrollHeight - position < 100 && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasNextPage, isFetchingNextPage]);

    return scrollPosition;
};

export default useInfiniteScroll;

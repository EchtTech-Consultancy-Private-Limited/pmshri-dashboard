import React from 'react';
import { Pagination } from 'react-bootstrap';

const CustomPagination = ({ currentPage, totalPages, onPageChange }: { currentPage: number, totalPages: number, onPageChange: (pageNumber: number) => void }) => {
    const handlePageChange = (pageNumber: number) => {
        onPageChange(pageNumber);
    };

    const renderPaginationItems = () => {
        const items = [];

        items.push(
            <Pagination.Prev
                key="prev"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            />
        );

        const visiblePages = 3; 
        let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
        let endPage = Math.min(totalPages, startPage + visiblePages - 1);

        if (startPage > 1) {
            items.push(<Pagination.First key="first" onClick={() => handlePageChange(1)} />);
            if (startPage > 2) {
                items.push(<Pagination.Ellipsis key="startEllipsis" />);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            items.push(
                <Pagination.Item
                    key={i}
                    active={i === currentPage}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </Pagination.Item>
            );
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                items.push(<Pagination.Ellipsis key="endEllipsis" />);
            }
            items.push(<Pagination.Last key="last" onClick={() => handlePageChange(totalPages)} />);
        }

        items.push(
            <Pagination.Next
                key="next"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            />
        );

        return items;
    };

    return (
        <Pagination 
        size="sm">{renderPaginationItems()}</Pagination>
    );
};

export default CustomPagination;
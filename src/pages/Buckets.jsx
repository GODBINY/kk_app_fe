import React, { useState, useEffect } from 'react';
import '../css/Buckets.scss';
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import apiClient from '../api/apiClient';

const Buckets = () => {
    const [bucketLists, setBucketLists] = useState([]);

    useEffect(() => {
        const fetchBucketLists = async () => {
            try {
                const response = await apiClient.get('/bucket-lists');
                setBucketLists(response.data);
            } catch (error) {
                console.error('Error fetching bucket lists:', error);
            }
        };

        fetchBucketLists();
    }, []);

    return (
        <div className="bucket-list">
            {bucketLists.map((item) => (
                <div key={item.id}>
                    {item.isCompleted ? (
                        <MdOutlineCheckBox />
                    ) : (
                        <MdOutlineCheckBoxOutlineBlank />
                    )}
                    {item.content}
                </div>
            ))}
        </div>
    );
}

export default Buckets;
import React from 'react';
import '../css/Buckets.scss';
import bucketList from '../data/bucketList.json';
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const Buckets = () => {
        return (
            <div className="bucket-list">
                    {bucketList.map((item) => (
                        <div key={item.idx}>
                                {item.content.includes('O') ? (
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
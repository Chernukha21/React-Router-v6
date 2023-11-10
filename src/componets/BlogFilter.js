import React, {useState} from 'react';
import {useSearchParams} from "react-router-dom";

const BlogFilter = ({searchQuery, latest, setSearchParams}) => {
    const [search, setSearch] = useState(searchQuery);
    const [checked, setChecked] = useState(latest);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const isLatest = form.latest.checked;
        const query = form.search.value;
        const params = {};
        if(query.length) params.post = query;
        if(isLatest) params.latest = true;
        setSearchParams(params);
    }
    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <input type="search" name="search" value={search} onChange={e => setSearch(e.target.value)}/>
            <div style={{display: "block"}}>
                <label style={{padding: '0 10px'}}>
                    New only<input type="checkbox" value={checked} name="latest" onChange={e => setChecked(e.target.value)}/>
                </label>
            </div>
            <button type="submit">search</button>
        </form>
    );
};

export default BlogFilter;
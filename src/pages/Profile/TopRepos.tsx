import React, { useState } from 'react';

const Bio: React.FC = () => {
    const initialReposToShow = 3;
    const [reposToShow, setReposToShow] = useState(initialReposToShow);
    const repositories = ['Repo_1', 'Repo_2', 'Repo_3', 'Repo_4', 'Repo_5', 'Repo_6', 'Repo_7', 'Repo_8', 'Repo_9', 'Repo_10'];
    const [buttonLabel, setButtonLabel] = useState('More');

    const loadMore = () => {
        if (buttonLabel === 'Show More') {
            setReposToShow(repositories.length);
            setButtonLabel('Show Less');
        } else {
            setReposToShow(initialReposToShow);
            setButtonLabel('Show More');
        }
    };

    return (
        <div className='my-8 border-2 px-6 rounded-sm w-1/2'>
            <h1 className="text-2xl font-bold py-3">Top Repos</h1>
            <div style={{ maxHeight: '200px', overflow: 'auto' }}>
                {repositories.slice(0, reposToShow).map((repo, index) => (
                    <div className="border-2 mb-3 p-2" key={index}>
                        {repo}
                    </div>
                ))}
            </div>
            <button onClick={loadMore} className='border-2 px-2 bg-slate-100 my-3 ml-80 w-28'>{buttonLabel}</button>
        </div>
    );
};

export default Bio;

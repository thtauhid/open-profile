import React, { useState } from 'react';

const TopRepos: React.FC = () => {
    const initialReposToShow = 3;
    const [reposToShow, setReposToShow] = useState(initialReposToShow);
    const repositories = ['Repo_1', 'Repo_2', 'Repo_3', 'Repo_4', 'Repo_5', 'Repo_6', 'Repo_7', 'Repo_8', 'Repo_9', 'Repo_10'];
    const [buttonLabel, setButtonLabel] = useState('Show More');

    const loadMore = () => {
        if (buttonLabel === 'Show More') {
            setReposToShow(repositories.length);
            setButtonLabel('Show Less');
        } else {
            setReposToShow(initialReposToShow);
            setButtonLabel('Show More');
        }
    };

    const initialActivitiesToShow = 3;
    const [ActivitiesToShow, setActivitiesToShow] = useState(initialActivitiesToShow);
    const activities = ['Activity_1', 'Activity_2', 'Activity_3', 'Activity_4', 'Activity_5', 'Activity_6', 'Activity_7', 'Activity_8', 'Activity_9', 'Activity_10'];
    const [ActiveButton, setActiveButton] = useState('Show More');

    const loadMoreActivities = () => {
        if (ActiveButton === 'Show More') {
            setActivitiesToShow(activities.length);
            setActiveButton('Show Less');
        } else {
            setActivitiesToShow(initialActivitiesToShow);
            setActiveButton('Show More');
        }
    };

    return (
        <div className="flex justify-between">

            <div className='my-8 border-2 px-6 rounded-sm'>
                <h1 className="text-2xl font-bold py-3">Top Repos</h1>
                <div style={{ maxHeight: '200px', overflow: 'auto' }}>
                    {repositories.slice(0, reposToShow).map((repo, index) => (
                        <div className="border-2 mb-3 p-2" key={index}>
                            {repo}
                        </div>
                    ))}
                </div>
                <button onClick={loadMore} className='border-2 px-2 bg-slate-100 my-3 ml-72 w-28'>{buttonLabel}</button>
            </div>

            <div className='my-8 border-2 px-6 rounded-sm'>
                <h1 className="text-2xl font-bold py-3">Recent Activities</h1>
                <div style={{ maxHeight: '200px', overflow: 'auto' }}>
                    {activities.slice(0, ActivitiesToShow).map((repo, index) => (
                        <div className="border-2 mb-3 p-2" key={index}>
                            {repo}
                        </div>
                    ))}
                </div>
                <button onClick={loadMoreActivities} className='border-2 px-2 bg-slate-100 my-3 ml-72 w-28'>{ActiveButton}</button>
            </div>
            
        </div>
    );
};

export default TopRepos;

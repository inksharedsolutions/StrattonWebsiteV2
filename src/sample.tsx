import * as React from 'react';
import axios from 'axios';
// https://randomuser.me/api

interface UserName {
    first: string; 
    last: string;
    title: string;
}

interface UserPicture {
    thumbnail: string;
}

interface UserInfo {
    name: UserName;
    picture: UserPicture;
}


const fetchRandomData = (pageNumber: number) => {
    return axios.get(`https://randomuser.me/api?page=${pageNumber}`)
        .then(({data}) => {
            console.log(data);
            return data;
        })
        .catch(err =>  {
            console.log(err);
        })
}

const getFullUserName = (userInfo: UserInfo) => {
    const {name: {first, last}} = userInfo;
    return `${first} ${last}`;
}
const App: React.FC = () => {
    const [counter, setCounter] = React.useState(0); 
    const [nextPageNumber, setNextPageNumber] = React.useState(1);
    const [userInfos, setUserInfos] = React.useState<any>([]);
    const [randomUserDataJSON, setRandomUserDataJSON] = React.useState('');

    React.useEffect(() => {
        fetchNextUser();
    }, []);

    const fetchNextUser = () => {
        fetchRandomData(nextPageNumber).then(randomData => {
            setRandomUserDataJSON(JSON.stringify(randomData, null, 2) || 'No User Data Found');
            if(randomData === undefined) return;
            const newUserInfos = [
                ...userInfos,
                ...randomData.results,
            ]
            setUserInfos(newUserInfos);
            setNextPageNumber(randomData.info.page + 1);
        });
    }

    return(
        <div>
            <p>
                {counter}
            </p>
            <button onClick={() => {
                setCounter(counter + 1);
                console.log('foo');
                }}>Increase Counter</button>
            {/* <button onClick={() => fetchRandomData()}>Fetch Random Data</button> */}
            <button onClick={() => {
                fetchNextUser();
            }}>Next User</button>
            <p>
                hello world
            {
                userInfos.map((userInfo: UserInfo, idx : number) => (
                    <div key={idx}>
                        <p>
                            {getFullUserName(userInfo)}
                        </p>
                        <img src={userInfo.picture.thumbnail} />
                    </div>
                ))
            }
            </p>
            <pre>
                {randomUserDataJSON}
            </pre>
        </div>
    )
}

export default App;



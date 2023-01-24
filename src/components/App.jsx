import mainStyle from "./mainStyle.module.css"

import Profile from "./Profile/Profile.jsx"
import user from "../data/profile.json"

import FriendList from "./FriendList/FriendList.jsx"
import friends from "../data/friends.json"

import Statistics from "./Statistics/Statistics.jsx";
import statisticsData from "../data/statistics.json"

import TransactionHistory from "./Transactions/TransactionHistory.jsx"
import transactions from  "../data/transactions.json"



export const App = () => {
  return (
    <div className={mainStyle.containerStyle}> 
      
      <Profile 
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />

      <FriendList friends={friends} />;

      <Statistics
      title = "Upload stats"
      stats={statisticsData}
      />

      <TransactionHistory items={transactions} />;

    </div>
  );
};
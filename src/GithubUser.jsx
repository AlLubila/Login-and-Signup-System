import './GithubUser.css'

export const GithubUser = ({user}) => {

    const {avatar_url, followers, following, public_repos, login, name} = user
    
    return(
        <div className="user-profile">
      <img src={avatar_url} alt="User Avatar" />
      <div className="user-details">
        <p>Name: {name}</p>
        <p>Login: {login}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Public Repos: {public_repos}</p>
        <a href={`https://github.com/${login}`} target='_blank'>Visit Profile</a>
      </div>
    </div>
    )
}
const Card = ({profile, userName}) => {
  return (
    <article className='tw-followCard'>
          <h1>Welcome!</h1>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar' 
                src={`https://unavatar.io/instagram/${profile}`}/>
                <div className='tw-followCard-info'>
                    <strong>{userName}</strong>
                    <span className='tw-followCard-infoUsername'>@{profile}</span>
                </div>
            </header>
                
        </article>
  )
};


export default Card;

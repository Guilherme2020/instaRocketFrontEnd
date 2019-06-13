import React, {Component} from 'react';

import './Feed.css'
import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

class Feed extends Component {

    render(){
        return(
            <section id='post-list'> 
                <article>
                    <header>
                        <div className='user-info'>
                            <span>
                                Diego Fernandes
                            </span>
                            <span className='place'>
                                Rio do sul
                            </span>

                        </div>
                        <img src={more} alt="Mais" />



                    </header>

                    <footer>
                        <div className="actions">
                            <img src={like} alt="like" />
                            <img src={comment} alt="comment" />
                            <img src={send} alt="send" />
                        </div>
                    </footer>
                </article>
            </section>
        )
    }    

}
export default Feed;


//  <img src="http://localhost:3333/files/"  />/
import React, { Component } from 'react';
import io from 'socket.io-client'

import api from '../services/api'
import './Feed.css'

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

class Feed extends Component {

    state = {
        feed: []
    }

    registerToSocket = () => {

        let urlBase = 'http://localhost:3333';
        let socket = io(urlBase);

        socket.on('post', newPost => {
            this.setState({ feed: [newPost, ...this.state.feed] })
        })
        socket.on('like',likedPost => {
            let liked = this.state.feed.map(post => post._id === likedPost._id ? likedPost : post)
            this.setState({
                feed: liked
            })
        })
    }

    async componentDidMount() {
        this.registerToSocket()


        let url = 'posts'
        const response = await api.get(url);

        this.setState({
            feed: response.data
        })


    }

    handleLike = id => {
        let url = `/posts/${id}/like`
        api.post(url)
    }
    render() {
        return (
            <section id='post-list'>
                {this.state.feed.map(post => (
                    <article key={post._id}>
                        <header>
                            <div className='user-info'>
                                <span>
                                    {post.author}
                                </span>
                                <span className='place'>
                                    {post.place}
                                </span>

                            </div>
                            <img src={more} alt="Mais" />



                        </header>
                        <img src={`http://localhost:3333/files/${post.image}`} alt="Post" />

                        <footer>
                            <div className="actions">
                                <button type="button" onClick={() => this.handleLike(post._id)}>

                                    <img src={like} alt="like" />


                                </button>
                                <img src={comment} alt="comment" />
                                <img src={send} alt="send" />
                            </div>

                            <strong>
                                {post.likes} curtidas
                            </strong>

                            <p>
                                {post.description}
                                <span>{post.hashtags}</span>
                            </p>

                        </footer>
                    </article>

                ))}
            </section>
        )
    }

}
export default Feed;


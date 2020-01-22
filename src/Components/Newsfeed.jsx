import React from 'react';
import { Container, Toast, ToastHeader, ToastBody, Row } from 'reactstrap';
import { FaPencilAlt, FaCameraRetro } from "react-icons/fa";
import NewsModel from './NewsModel';
import NewsFeedBox from './NewsFeedBox';
import NewsPictureModel from './NewsPictureModel';

let Toaststyle = {
    width: "900px",
    height: "250px"
}

let camera = {
    width: "50px",
}

let pencil = {
    width: "150px",
    size: "30"
}

class Newsfeed extends React.Component {
    state = {
        newsfeed: '',
        modalOpen: false,
        modalOpenPicture: false,
        dropdownOpen: false
    }

    setModal = (event) => {
        event.preventDefault();

        if (this.state.modalOpen === true) {
            this.setState({
                modalOpen: false
            })
        } else if (this.state.modalOpen === false) {
            this.setState({
                modalOpen: true,
            })
        }
    }

    setModalPicture = (event) => {
        event.preventDefault();

        if (this.state.modalOpenPicture === true) {
            this.setState({
                modalOpenPicture: false
            })
        } else if (this.state.modalOpenPicture === false) {
            this.setState({
                modalOpenPicture: true
            })
        }
    }
    componentDidMount = async () => {
        let username = "user21"
        let password = "2ruxa4MRJdUgg6cz"
        let token = btoa(username + ":" + password)
        let response = await fetch("https://striveschool.herokuapp.com/api/posts/", {
            method: "GET",
            headers: {
                "Authorization": "Basic " + token
            }
        })
        let news = await response.json()
        console.log(news);
        this.setState({
            Newsfeed: news.reverse()
        })
    };
    render() {
        console.log(this.state);
        return (
            <>
                <Container flex id="newsfeed-toast">
                    <div className="p-4 bg-info my-4 fluid">
                        <div>{this.state.modalOpen && <NewsModel
                            setmodal={this.setModal} open={this.state.modalOpen} />}
                        </div>
                        <div>{this.state.modalOpenPicture && <NewsPictureModel
                            setModalPicture={this.setModalPicture} open={this.state.modalOpenPicture} />}
                        </div>
                        <Toast style={Toaststyle}>
                            <ToastHeader>
                                Start a Post
                                <div className="mx-5 float-right">
                                    <FaPencilAlt size={25} style={pencil} onClick={this.setModal} />
                                    <FaCameraRetro size={25} style={camera} onClick={this.setModalPicture} />
                                </div>
                            </ToastHeader>
                            <ToastBody>
                                Write a Text
                         </ToastBody>
                        </Toast>
                    </div>
                    <Row> {this.state.Newsfeed && this.state.Newsfeed.map((news, index) =>
                        <NewsFeedBox newsData={news} key={index} />
                    )}
                    </Row>
                </Container>
            </>
        );
    }
}

export default Newsfeed;
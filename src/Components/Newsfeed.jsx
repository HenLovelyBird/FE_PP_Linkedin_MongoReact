import React from 'react';
import { Container, Toast, ToastHeader, ToastBody, Row } from 'reactstrap';
import { FaPencilAlt, FaCameraRetro, FaThumbsUp } from "react-icons/fa";
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
        Newsfeed: [],
        modalOpen: false,
        modalOpenPicture: false,
        dropdownOpen: false,
        

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


    componentDidMount = async () => {

         let username = "user21"
         let password = "2ruxa4MRJdUgg6cz"
         let token = btoa(username + ":" + password)
        let response = await fetch("http://localhost:7000/posts/")
        let news = await response.json()
        // console.log(news);
        this.setState({
            Newsfeed: news.posts.reverse()

       
    })

    }


    render() {
        
        return (
        
                <Container flex id="newsfeed-toast" >

                    <div className="p-4 bg-info my-2 fluid">

                        <div>{this.state.modalOpen && <NewsModel
                            setmodal={this.setModal} open={this.state.modalOpen} />}
                        </div>
                        <div>{this.state.modalOpenPicture && <NewsPictureModel
                            setModalPicture={this.setModalPicture} open={this.state.modalOpenPicture} />}
                        </div>
                        <Toast style={{maxWidth: '100%'}}>
                            <ToastHeader>
                                Click on the Pencil to Post Something!
                                <div className="mx-5 float-right">
                                    <FaPencilAlt size={15} style={pencil} style={{position: "float-right"}}onClick={this.setModal} />
                                </div>
                            </ToastHeader>
                            {/* <ToastBody>
                                Write a Text
                         </ToastBody> */}
                        </Toast>
                    </div>
                    <Row> {this.state.Newsfeed && this.state.Newsfeed.map((news, index) =>
                        <NewsFeedBox newsData={news} key={index} />
                    )}
               
                    </Row>
                </Container>
            
        );
    }

}

export default Newsfeed;
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import  styled  from 'styled-components';


//캠핑안내채널

const Videos = styled.div`
      display: flex;
      flex-direction :column;
`
const Title = styled.h1`
      
`

const Search = styled.div`
      display: flex;
      align-items: center;
      margin-left: 25px;
      padding: 5px;
      justify-content: center;
      margin-bottom: 30px;
`
const Input =styled.input`
      border: none;
      border-radius: 2px;
      width: 30%;
      height: 40px;
      border: 1px solid #e5e5e5;
      padding: 9px 12px;
      outline: none;
      box-sizing: border-box;
      ::placeholder{
          color: #999999;
        }
`

const VideoFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;        
`
const VideoSection =styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
    gap:3rem 1rem;
    padding: 3rem 17px;
    border-top : 4px solid white ;
  
`
const VideoContainer =styled.div`
    display: flex;
    flex-direction: column;
`
const Thumbnail =styled.iframe`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    min-width: 350px;
    min-height: 250px;
    background-color: #AAA;
`
const VideoBottom =styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: 1rem;
`
const VideoDetails=styled.div`
    display: flex;
    flex-direction: column;
`
const VideoTitle = styled.a`
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: .5rem;
    text-decoration: none;
    color: black;
`


const CampingNav = () => {
    let [video,setVideo] = useState([
        {id:1, videos:'https://www.youtube.com/embed/vofsvw-pYno'},
        {id:2, videos:'https://www.youtube.com/embed/vofsvw-pYno'},
        {id:3, videos:'https://www.youtube.com/embed/vofsvw-pYno'},
        {id:4, videos:'https://www.youtube.com/embed/vofsvw-pYno'},
        {id:5, videos:'https://www.youtube.com/embed/vofsvw-pYno'},
        {id:6, videos:'https://www.youtube.com/embed/vofsvw-pYno'},
        {id:7, videos:'https://www.youtube.com/embed/vofsvw-pYno'},
        {id:8, videos:'https://www.youtube.com/embed/vofsvw-pYno'},
        {id:9, videos:'https://www.youtube.com/embed/vofsvw-pYno'}
        
    ])
  return (
    <Videos>
            <Title>유튜브페이지</Title>
            <Search>
             <Input type="text" placeholder='검색' />
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{height: "17px", fontSize:"16px" ,color:"white"
                  ,padding:"10px" ,width: "50px" ,border: "1px solid #d3d3d3",background:"rgb(255, 198, 64)", cursor:"pointer" ,display:"flex"}}/>
            </Search>
            <VideoFlex >
            {
                video.map(function (item,id) {
                   return <>
                            <VideoSection key={id}>
                                <VideoContainer>
                                    <Thumbnail src={item.videos} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                                    <VideoBottom>
                                        <VideoDetails>
                                            <VideoTitle href={item.videos}>비디오명</VideoTitle>
                                        </VideoDetails>
                                    </VideoBottom>
                                </VideoContainer>
                            </VideoSection>
                            </>
                })
            }
            
            </VideoFlex>
           
    </Videos>
  )
}

export default CampingNav
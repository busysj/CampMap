import React from 'react'
import  styled  from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faComment, faXmark } from '@fortawesome/free-solid-svg-icons';


const Taps = styled.div`
      display: flex;
      flex-direction: column;
      position: relative;
      width: 400px;
      height: 600px;
      margin: 0 auto;
      background: white;
      text-align: center; 
      min-height: 400px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      

` 
const XbtnP =styled.div`
      display: flex;
      justify-content: end;
      align-items: center;
      flex-direction: row;
`
const Xbtn =styled.button`
      font-size: 25px;
      box-sizing: border-box;
      height: 10px;
      width: 10px;
      border: none;
      background: white;
      z-index: 2;
      
`

const TapList = styled.div`
      display: flex;
      justify-content: center;
      .active{
          background: #ff8807;
          color: white;
        }

`
const BtnTap = styled.button`
      padding: 10px;
      margin-top: 30px;
      width: 100%;
      font-size: 20px;
      font-weight: bold;
      border: none;
      cursor: pointer;
`


const ContentTabs =styled.div`
      position: relative;
      padding: 0 20px 32px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      flex-direction: column;
`
const TapContant = styled.div`
    background-color: white;
    color: black;
    
`

const Title = styled.h2`
      text-align: center;
`

const LoginForm = styled.form`
  
`
const InputContainer = styled.div`
      margin: 0 auto;
      position: relative;
      padding: 0 20px 32px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      flex-direction: column;
    
`
const Input =styled.input`
      margin-top: 30px;
      border-radius: 2px;
      width: 100%;
      height: 40px;
      border: 1px solid #e5e5e5;
      padding: 9px 12px;
      outline: none;
      box-sizing: border-box;
      background-color: #f8f8f8;
      ::placeholder{
              color: #999999;
            }
     ` 
const LogniBtn =styled.button`
    width: 100%;
      height: 40px;
      font-size: 14px;
      padding: 13px 30px;
      cursor: pointer;
      background-color: #ff8807;
      color: white;
      line-height: 1px;
      margin-top: 40px;
      margin-bottom: 12px;
      border-radius: 3px;
      border-style: none;
      font-weight: bold;
  `
const GoogleBtn =styled.button`
      margin-bottom: 30px;
      background-color: #548bf5;
      color: white;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3px;
      box-sizing: border-box;
      margin-bottom: 10px;
      font-weight: bold;
      border:none;
      text-align: center;
      cursor: pointer;
          
         `
const GoogleText = styled.div`
      width: 300px;
      font-size: 15px;
      text-align: center;
      display: inline-block;
      box-sizing: border-box;
         `
         
const KakaoiBtn =styled.button`
      background-color: #feec34;
      color: #4e3821;
      height: 40px;
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      margin-bottom: 10px;
      font-weight: bold;
      border:none;
      cursor: pointer;
          `

const KakaoText = styled.div`
      width: 300px;
      font-size: 15px;
      text-align: center;
      display: inline-block;
      box-sizing: border-box;
          `

const SignUpForm = styled.form`
            
          `
const SignupBtn =styled.button`
    width: 100%;
    margin-top: 40px;
     margin-bottom: 30px;
     background-color: #ff8807;
      color: white;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3px;
      box-sizing: border-box;
      margin-bottom: 10px;
      font-weight: bold;
      border:none;
      text-align: center;
      cursor: pointer;
      `
 
const Google =styled.button`
      margin-bottom: 30px;
      background-color: #548bf5;
      color: white;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3px;
      box-sizing: border-box;
      margin-bottom: 10px;
      font-weight: bold;
      border:none;
      text-align: center;
      cursor: pointer;
           
  `


const LogReg = ({openModal,setOpenModal }) => {
const[index,setIndex] = useState(0);
  
if(!openModal) return null 



  return( 
  <Taps>
    <XbtnP>
      <Xbtn > <FontAwesomeIcon onClick={ () => {setOpenModal(false)}} icon={faXmark} style={{color: "black", marginLeft:"-36px",marginTop:"8px" ,cursor :"pointer",zIndex:"1"}}/> </Xbtn>
    </XbtnP>
    <TapList>
      <BtnTap  className= {`${index ===0? 'active':null}`} onClick={()=>setIndex(0)} >로그인</BtnTap>
      <BtnTap className= {`${index ===1? 'active':null}`}  onClick={()=>setIndex(1)}>회원가입</BtnTap>    
    </TapList>
    <ContentTabs>
      <TapContant hidden={index != 0}>
        <InputContainer>
       
          <Title>로그인</Title>
          <LoginForm>
          <Input type="email" placeholder='아이디' required/>
          <Input type="password" placeholder='비밀번호' required/>
          <LogniBtn type='submit'>로그인</LogniBtn>
          </LoginForm>
          <GoogleBtn> <FontAwesomeIcon icon={faGoogle} style={{ width: "24px" ,height: "25px"}}  /><GoogleText>Google 계정으로 로그인</GoogleText> </GoogleBtn>
          <KakaoiBtn><FontAwesomeIcon icon={faComment} style={{ width: "24px" ,height: "25px"}}  /><KakaoText>카카오 계정으로 로그인</KakaoText> </ KakaoiBtn>
        </InputContainer>
      </TapContant>

        <TapContant hidden={index != 1}>
          <InputContainer>  
            <Title>회원가입</Title>
            <SignUpForm>
            <Input type="text" name="" id=""  placeholder='아이디' required  />
            <Input type="email" name="" id=""  placeholder='이메일' required/>
            <Input type="password" name="" id="" placeholder='비밀번호' required/>
            <Input type="password" name="" id="" placeholder='비밀번호확인' required/>
            <SignupBtn type='submit'>회원등록</SignupBtn>
            </SignUpForm>
            < Google><FontAwesomeIcon icon={faGoogle} style={{ width: "24px" ,height: "25px"}}  /><GoogleText>Google 등록</GoogleText></ Google>
          </InputContainer>
        </TapContant>
    </ContentTabs>
  </Taps>
  )
} 

export default LogReg

import React from 'react'
import styled from 'styled-components'

import bgImg from "../images/bg-image.png";
import { MdKeyboardArrowRight } from 'react-icons/md';

const Hero = () => {

    const Section = styled.section`
        background-image: url(${bgImg});
        height: 756px;
        display: block;
        background-repeat: no-repeat;
        background-size: contain;
    `;
    const Content = styled.div`
        width:100%;
        height:100%
    `
    const Left = styled.div`
        padding-left:220px;
        padding-top:140px;

    `//@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800;900&family=Open+Sans:wght@500&display=swap');
    const Title = styled.p`
        font-size:55px;
        color:#0405a;
        font-weight:400;
         
    `
    const Desc = styled.p`
        width:477px;
        font-size:20px;
        color:#9ea0ac;
        line-height:30px;
        margin-top:58px;    
    `
    const Button = styled.a`
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius: 18px;
        margin-top: 58px;
        width:371px;
        height: 71px;
        line-height: 71px;
        font-size:22px;
        text-align:center;
        color:#fff;
        cursor:pointer;
        background:linear-gradient(90deg,#0546e6, #3f89fc);
        text-decoration:none;
        box-shadow: 0px 15px 14px rgb(0 42 177/ 12%);


    `

    return (
        <Section>
            <Content>
                <Left>
                    <Title>
                        Get 2 FREE Stocks <br /> up to $1850!
                        <Desc>
                            Open and fund a brokerage account with $100 or more and you will
                            have a chance of claiming stocks like <span> GOOG, FB, SBUX</span>{' '}
                            and more!
                        </Desc>
                        <Button href="https://www.webull.com/activity?inviteCode=7q7l7zOON3l8&source=invite_gw&inviteSource=wb_oversea" target='_blank'>
                            <span>Claim you Free stocks now</span>
                            <MdKeyboardArrowRight />
                        </Button>

                    </Title>
                </Left>
            </Content>
        </Section>
    )
}

export default Hero

import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 35px;
    div{
        display: flex;
        flex-direction: column;
        width: 500px;
        margin: 0 auto;
        h2{
            color: #6F6F6F;
            text-align: center;
            font-size: 1.5rem;
            margin: 10px 0;
        }
        input, button{
            font-size: 1.3rem;
            font-weight: 100;
            padding: 15px;
            margin-top: 10px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.07);
            &::placeholder{
                color: #999999;
            }
        }
        label{
            font-size: 1.2rem;
        }
        button{
            color: #FFFFFF;
            background-color: #0A88DC;
            margin-top: 15px;
            transition: .2s;
            &:hover{
                cursor: pointer;
                background-color: #086FB3;
            }
        }
    }
`;
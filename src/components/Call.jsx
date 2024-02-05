import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FcCallback, FcContacts } from "react-icons/fc";
import { GrConnect } from "react-icons/gr";

const Call = () => {
  return (
    <Wrapper>
      <div className="top-wa">
        <a href="https://wa.me/9331089123" target="_blank" rel="noreferrer">
          <BsWhatsapp href="tel:+919205859621" />{" "}
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-con {
    font-size: 1.5rem;
    width: 3rem;
    height: 3rem;
    color: #fff;
    background-color: white;
    border-radius: 50%;
    position: fixed;
    bottom: 12rem;
    right: 3rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }

  .top-btn {
    font-size: 1.5rem;
    width: 3rem;
    height: 3rem;
    color: #fff;
    background-color: white;
    border-radius: 50%;
    position: fixed;
    bottom: 8rem;
    right: 3rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }
  .top-wa {
    font-size: 1.5rem;
    width: 3rem;
    height: 3rem;
    color: #fff;
    background-color: green;
    border-radius: 50%;
    position: fixed;
    bottom: 4rem;
    right: 3rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }
`;

export default Call;

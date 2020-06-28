import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div<any>`
  display: inline-flex;
  justify-content: center;
  height: auto;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;
`;

const SocialMediaList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const SocialMediaItem = styled.li`
  display: inline-flex;
  margin: 0;
  margin-right: 20px;
  &:last-child {
    margin-right: 0px;
  }
`;

const CircleLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.5);
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

type SocialMediaProps = {
  marginTop?: number;
  marginBottom?: number;
  children: any;
};

const SocialMedia = ({
  marginTop,
  marginBottom,
  children,
}: SocialMediaProps) => {
  return (
    <Wrapper marginTop={marginTop} marginBottom={marginBottom}>
      <SocialMediaList>{children}</SocialMediaList>
    </Wrapper>
  );
};

type SocialMediaItemProps = {
  icon?: any;
  link: string;
  altText?: string;
};

SocialMedia.Item = ({ icon, link, altText }: SocialMediaItemProps) => {
  return (
    <SocialMediaItem>
      <CircleLink href={link} target="_blank" title={altText}>
        <span>{icon}</span>
      </CircleLink>
    </SocialMediaItem>
  );
};

export default SocialMedia;

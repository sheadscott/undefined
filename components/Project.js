import styled from "styled-components";
import Icon from "../images/button.svg";

const Project = ({ project }) => {
  const imageSizes = require(`../images/${project.img}?resize`);

  return (
    <div>
      <Section>
        <Text>
          <h1>{project.title}</h1>
          <h2>{project.tagline}</h2>
          <StyledIcon />
        </Text>
        {}
        {project.img && project.imgNoMarginRight ? (
          <ImageContainer className="no-margin-right">
            <Image
              sizes="100vw"
              srcSet={imageSizes.srcSet}
              src={imageSizes.src}
              alt=""
            />
          </ImageContainer>
        ) : (
          <ImageContainer>
            <Image
              sizes="100vw"
              srcSet={imageSizes.srcSet}
              src={imageSizes.src}
              alt=""
            />
          </ImageContainer>
        )}
      </Section>
      <HRule />
    </div>
  );
};

export default Project;

const Section = styled.section`
  margin: 4rem 0 0 0;
  display: flex;
  flex-wrap: wrap;
`;

const Text = styled.div`
  padding-right: calc(70px + 2rem);
  color: black;
  position: relative;

  @media (min-width: 768px) {
    width: 60%;
  }

  h1,
  h2 {
    font-weight: normal;
    width: 100%;
  }
  h1 {
    text-transform: uppercase;
    font-size: 18px;
    margin-top: 0;
    font-weight: 700;
    @media (min-width: 415px) {
      font-size: 28px;
    }
  }
  h2 {
    font-size: 18px;
    @media (min-width: 415px) {
      font-size: 28px;
    }
  }
`;

const StyledIcon = styled(Icon)`
  width: 63px;
  position: absolute;
  top: -0.2rem;
  right: -1rem;

  @media (min-width: 415px) {
    width: 80px;
  }

  @media (min-width: 768px) {
    position: relative;
    right: 0;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  flex: auto;
  order: 3;
  display: flex;
  align-items: flex-end;

  &.no-margin-right {
    margin-right: -2rem;
  }

  @media (min-width: 728px) {
    width: 40%;
    order: 2;
  }
`;

const Image = styled.img`
  /* float: right; */
  /* width: 280px; */
  max-width: 100%;

  @media (min-width: 414px) {
    /* width: 400px; */
  }

  @media (min-width: 1200px) {
    /* width: 600px; */
  }
`;

const HRule = styled.div`
  position: relative;
  right: calc(-2rem + -1px);
  border-bottom: 1px solid #666;
  width: 90%;
  margin-left: 10%;
`;

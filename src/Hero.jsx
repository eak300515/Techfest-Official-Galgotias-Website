import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px #4f46e5, 0 0 10px #4f46e5, 0 0 15px #4f46e5; }
  50% { box-shadow: 0 0 20px #4f46e5, 0 0 25px #4f46e5, 0 0 30px #4f46e5; }
  100% { box-shadow: 0 0 5px #4f46e5, 0 0 10px #4f46e5, 0 0 15px #4f46e5; }
`;

const typewriter = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const rocketAnimation = keyframes`
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
  50% {
    transform: translateY(-100px) translateX(50px) rotate(5deg);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
`;

const flame = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
`;

// Styled Components
const HeroContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, # 0%, # 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  z-index: 1;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled.div`
  color: white;
`;

const TagLine = styled.div`
  background: linear-gradient(90deg, #4f46e5, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const MainTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typewriter} 2s steps(40, end);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  color: #94a3b8;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 500px;

  @media (max-width: 968px) {
    margin: 0 auto 2rem auto;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &.primary {
    background: linear-gradient(90deg, #4f46e5, #7c3aed);
    color: white;
    border: none;
    animation: ${glowAnimation} 2s infinite;

    &:hover {
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background: transparent;
    color: white;
    border: 2px solid #4f46e5;

    &:hover {
      background: rgba(79, 70, 229, 0.1);
    }
  }
`;

const HeroVisual = styled.div`
  position: relative;
  min-height: 600px;
  transform: perspective(1000px) 
             rotateY(${props => props.mouseX}deg) 
             rotateX(${props => -props.mouseY}deg);
  transition: transform 0.1s ease;
`;

const Circle = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(45deg, #4f46e5, #7c3aed);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    animation: rotate 10s linear infinite;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const CardContent = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(90deg, #4f46e5, #7c3aed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

const FloatingCard = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1rem;
  color: white;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};

  &.card1 {
    top: 10%;
    left: -20%;
  }

  &.card2 {
    bottom: 10%;
    right: -20%;
  }
`;

const FloatingCardExtra = styled(FloatingCard)`
  &.card3 {
    top: 40%;
    right: -10%;
    transform: rotate(10deg);
  }

  &.card4 {
    top: 60%;
    left: -10%;
    transform: rotate(-5deg);
  }

  &.card5 {
    top: -10%;
    right: 20%;
    transform: rotate(15deg);
  }
`;

const Rocket = styled.div`
  position: absolute;
  top: 50%;
  right: -100px;
  width: 60px;
  height: 120px;
  background: linear-gradient(45deg, #4f46e5, #7c3aed);
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  animation: ${rocketAnimation} 10s ease-in-out infinite;
  transform-origin: center;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 40px;
    background: linear-gradient(to bottom, #ff6b6b, #ff0000);
    clip-path: polygon(50% 100%, 0% 0%, 100% 0%);
    animation: ${flame} 0.5s ease-in-out infinite;
  }
`;

const RocketParticle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.color};
  border-radius: 50%;
  opacity: ${props => props.opacity};
  animation: fall 1s linear forwards;

  @keyframes fall {
    from {
      transform: translate(${props => props.startX}px, ${props => props.startY}px);
      opacity: ${props => props.opacity};
    }
    to {
      transform: translate(${props => props.endX}px, ${props => props.endY}px);
      opacity: 0;
    }
  }
`;

const ParticleBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
`;

const Particle = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  opacity: ${props => props.opacity};
  transform: translate(${props => props.x}px, ${props => props.y}px);
`;

const Hero = () => {
  const [particles, setParticles] = useState([]);
  const [rocketParticles, setRocketParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: Math.random()
        });
      }
      setParticles(newParticles);
    };

    generateParticles();

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    const particleInterval = setInterval(() => {
      const newParticle = {
        id: Math.random(),
        startX: Math.random() * 50 - 25,
        startY: Math.random() * 50 - 25,
        endX: Math.random() * 100 - 50,
        endY: Math.random() * 100 + 50,
        opacity: Math.random() * 0.5 + 0.5,
        color: Math.random() > 0.5 ? '#4f46e5' : '#7c3aed'
      };
      setRocketParticles(prev => [...prev.slice(-20), newParticle]);
    }, 100);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <HeroContainer>
      <ParticleBackground>
        {particles.map(particle => (
          <Particle
            key={particle.id}
            x={particle.x}
            y={particle.y}
            opacity={particle.opacity}
          />
        ))}
      </ParticleBackground>

      <ContentWrapper>
        <HeroText>
          <TagLine>GU TECHFEST 2024</TagLine>
          <MainTitle>The Future of Technology</MainTitle>
          <Description>
            Join us for an immersive journey into the world of technology. 
            Experience cutting-edge innovations, participate in workshops, 
            and connect with industry leaders.
          </Description>
          <ButtonGroup>
            <Button className="primary">Register Now</Button>
            <Button className="secondary">Learn More</Button>
          </ButtonGroup>
        </HeroText>

        <HeroVisual mouseX={mousePosition.x} mouseY={mousePosition.y}>
          <Circle />
          <Rocket>
            {rocketParticles.map(particle => (
              <RocketParticle
                key={particle.id}
                startX={particle.startX}
                startY={particle.startY}
                endX={particle.endX}
                endY={particle.endY}
                opacity={particle.opacity}
                color={particle.color}
              />
            ))}
          </Rocket>
          <FloatingCard className="card1" delay="1s">
            <CardContent>
              <h3>200+ Events</h3>
              <p>Technical & Cultural</p>
            </CardContent>
          </FloatingCard>
          <FloatingCard className="card2" delay="2s">
            <CardContent>
              <h3>₹1cr+</h3>
              <p>Prize Pool</p>
            </CardContent>
          </FloatingCard>
          <FloatingCardExtra className="card3" delay="1.5s">
            <CardContent>
              <h3>50+</h3>
              <p>Workshops</p>
            </CardContent>
          </FloatingCardExtra>
          <FloatingCardExtra className="card4" delay="2.5s">
            <CardContent>
              <h3>10K+</h3>
              <p>Participants</p>
            </CardContent>
          </FloatingCardExtra>
          <FloatingCardExtra className="card5" delay="3s">
            <CardContent>
              <h3>24/7</h3>
              <p>Hackathon</p>
            </CardContent>
          </FloatingCardExtra>
        </HeroVisual>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;

import React, { useEffect, useRef } from 'react';
import './Intro.css';
import 'animate.css';
import { Stack } from '@fluentui/react';

export function Intro() {
  const [visibleItem, setVisibleItem] = React.useState<boolean>(false);
  const [node, setNode] = React.useState<any>(null);
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };
  const observer = useRef(
    new window.IntersectionObserver(() => setVisibleItem(true), options)
  );
  useEffect(() => {
    if (observer.current) {
      observer!.current!.disconnect()
    }
    observer.current = new window.IntersectionObserver(() => { setVisibleItem(true) }, options);
    const { current: currentObserver } = observer;
    if (node) {
      currentObserver.observe(node);
    }
    return currentObserver.disconnect();
  });

  return (
    <Stack>
      <Stack className="Intro" verticalAlign="center">
        <Stack.Item className="name">
          Sara Norris <span className={"subText"}>is a human with a love for beautiful UX, music, animals, psychology, and astrology. </span>
        </Stack.Item>
      </Stack>
      <Stack className="AboutMe aboutMe" tokens={{ childrenGap: 30 }} horizontalAlign={"space-between"} horizontal={true}>
        <Stack className="aboutMeTitle" verticalAlign={'center'}>
          About Me
        </Stack>
        <Stack className={"aboutMeText"} verticalAlign={'center'}>
          <div id={'animatedItem'} ref={node} className={visibleItem ? 'aboutMeTextOnly' : ''}>
            I'm a full-stack Software Engineer with a passion for building customer-centric, accessible, and inclusive UX. When I'm not coding, I love
          <span className={"strikeThrough"}>
              &nbsp;beating my friends at&nbsp;
          </span> playing board games, trying out new restaurants, and reading about astrology!
          </div>
        </Stack>
      </Stack>
      <Stack className="Skills" tokens={{ childrenGap: 30 }} horizontalAlign={"space-between"}>
        <Stack className="skillsTitle" verticalAlign={'center'}>
          Skills
        </Stack>
        <Stack className={"skillsText"} verticalAlign={'center'} horizontal={true}>
          <Stack.Item>
          </Stack.Item>
        </Stack>
      </Stack>
    </Stack>
  );
}
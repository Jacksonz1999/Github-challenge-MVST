import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import firstImg from '../assets/navbar_icon/first.png';
import secondImg from "../assets/navbar_icon/second.png"
import thirdImg from "../assets/navbar_icon/third.png"
import fourthImg from "../assets/navbar_icon/fourth.png"
import { Button } from './Button';


export default {
  title: 'Example/Button',
  component: Button,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Previous = Template.bind({});
Previous.args = {
  primary: true,
  label: 'Previous',
};


export const Next = Template.bind({});
Next.args = {
  primary: true,
  label: 'Next',
};
export const Overview = Template.bind({});
Overview.args = {
  primary: true,
  label: 'Overview',
  image: firstImg,
};
export const Repositories = Template.bind({});
Repositories.args={
  primary: true,
  label: "Repositories",
  image: secondImg,
};
export const Project = Template.bind({});
Project.args={
  primary: true,
  label: "Project",
  image: thirdImg,
}
export const Packages = Template.bind({});
Packages.args={
  primary: true,
  label: "Packages",
  image: fourthImg,
}


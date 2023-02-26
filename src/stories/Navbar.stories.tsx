import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Navbar,  { NavbarProps }  from "./Navbar";


export default {
  title: "Example/Navbar",
  component: Navbar,
} as Meta;

const Template: Story<NavbarProps> = (args) => {
  const [activeTab, setActiveTab] = useState("Overview");

  return <Navbar {...args} activeTab={activeTab} onTabChange={setActiveTab} />;
};

export const Default = Template.bind({});
Default.args = {};

export const Overview = Template.bind({});
Overview.args = {
  activeTab: "Overview",
};

export const Repositories = Template.bind({});
Repositories.args = {
  activeTab: "Repositories",
};

export const Project = Template.bind({});
Project.args = {
  activeTab: "Project",
};

export const Packages = Template.bind({});
Packages.args = {
  activeTab: "Packages",
};
import React from 'react';
import {AddItemForm, AddItemFormPropsType,} from "./AddItemForm";
import {Meta, Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {Task, TaskPropsType} from "./Task";
import AppWithRedux from "./AppWithRedux";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";

export default {
    title: 'todolist/AppWithRedux',
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorator]
} as Meta;

const Template: Story = () => <AppWithRedux />;

export const isNotCompletedTask = Template.bind({});

export const BaseExample =  Template.bind({})
BaseExample.args = {}
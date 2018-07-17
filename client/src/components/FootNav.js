import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import styled from 'styled-components'

const MenuWrapper = styled.div`
    position: fixed;
    bottom: 0px;
    width: 100%;
    .ui.inverted.menu {
        background-color: rgb(56,57,58);
    }
`

const StyledMenu = styled(Menu)`
    justify-content: space-around;
    padding-left: 45px;
    a {
        font-size: 2vh;
    }
      @media(min-height: 780px){
       visibility: hidden;
    }
`

export default class FootNav extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <MenuWrapper>
                <StyledMenu inverted icon='labeled'>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name='user' />
                        Log In
                    </Menu.Item>
                    <Menu.Item
                        name='messages'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name='home' />
                        Home
                    </Menu.Item>
                    <Menu.Item
                        name='friends'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name='building' />
                        Top Sites
                    </Menu.Item>
                </StyledMenu>
            </MenuWrapper>
        )
    }
}